// server.js
require('dotenv').config();
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const simpleGit = require('simple-git');

const app = express();
const port = process.env.PORT || 5000;

// Serve static files (public folder) for downloads
app.use('/public', express.static(path.join(__dirname, 'public')));

// Initialize simple-git with repo root
const git = simpleGit();

// Multer storage configuration – store files in appropriate public subfolders
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const type = req.params.type; // resume, certificates, internships, reports, documents, screenshots
    const dest = path.join(__dirname, 'public', type);
    // Ensure folder exists
    fs.mkdirSync(dest, { recursive: true });
    cb(null, dest);
  },
  filename: (req, file, cb) => {
    // Keep original filename, but avoid collisions by prefixing timestamp
    const timestamp = Date.now();
    const safeName = file.originalname.replace(/\s+/g, '_');
    cb(null, `${timestamp}_${safeName}`);
  }
});

const upload = multer({ storage });

// Upload endpoint – expects multipart/form-data with field "file"
app.post('/api/upload/:type', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }
  // Return relative URL for the uploaded file
  const fileUrl = `/public/${req.params.type}/${req.file.filename}`;
  res.json({ success: true, fileUrl, filename: req.file.filename });
});

// List files endpoint – returns array of filenames for a given type
app.get('/api/files/:type', (req, res) => {
  const dir = path.join(__dirname, 'public', req.params.type);
  fs.readdir(dir, (err, files) => {
    if (err) {
      return res.status(404).json({ error: 'Folder not found' });
    }
    const fileInfos = files.map(f => {
      const filePath = path.join(dir, f);
      const stats = fs.statSync(filePath);
      return {
        name: f,
        url: `/public/${req.params.type}/${f}`,
        size: stats.size,
        mtime: stats.mtimeMs
      };
    });
    res.json({ files: fileInfos });
  });
});

// Git sync endpoint – performs add, commit, push
app.post('/api/sync', express.json(), async (req, res) => {
  const { message } = req.body;
  const commitMsg = message || 'Sync uploaded files';
  try {
    await git.add('.');
    await git.commit(commitMsg);
    await git.push();
    res.json({ success: true, message: 'Changes pushed to remote' });
  } catch (e) {
    console.error('Git sync error:', e);
    res.status(500).json({ error: 'Git operation failed', details: e.message });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});

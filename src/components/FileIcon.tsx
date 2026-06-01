// src/components/FileIcon.tsx
import React from 'react';
import { FaFilePdf, FaFileWord, FaFileArchive, FaFileImage, FaFileAlt } from 'react-icons/fa';

interface FileIconProps {
  filename: string;
  size?: number; // optional, not used here
}

const getExtension = (name: string) => {
  const parts = name.split('.');
  return parts.length > 1 ? parts.pop()!.toLowerCase() : '';
};

const FileIcon: React.FC<FileIconProps> = ({ filename }) => {
  const ext = getExtension(filename);
  switch (ext) {
    case 'pdf':
      return <FaFilePdf className="text-red-500" size={24} />;
    case 'doc':
    case 'docx':
      return <FaFileWord className="text-blue-500" size={24} />;
    case 'zip':
    case 'rar':
      return <FaFileArchive className="text-yellow-500" size={24} />;
    case 'png':
    case 'jpg':
    case 'jpeg':
    case 'gif':
      return <FaFileImage className="text-green-500" size={24} />;
    default:
      return <FaFileAlt className="text-gray-400" size={24} />;
  }
};

export default FileIcon;



const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <span className="title-gradient font-bold text-xl">Adithiya.R</span>
        </div>
        <p className="footer-text">
          Designed and built with ❤️ by Adithiya R. <br/>
          &copy; {currentYear} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

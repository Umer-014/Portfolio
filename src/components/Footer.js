import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Muhammad Umer Riaz</p>

        <div className="footer-links">
          <a href="https://github.com/" target="_blank">GitHub</a>
          <a href="https://linkedin.com/" target="_blank">LinkedIn</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

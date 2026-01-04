import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>Muhammad Umer Riaz</h3>
          <p>Full Stack Developer • React • React Native</p>
        </div>

        <div className="footer-links">
          <a
            href="https://github.com/umer-014/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href="/contact">Contact</a>
        </div>
      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} All rights reserved
      </div>
    </footer>
  );
};

export default Footer;

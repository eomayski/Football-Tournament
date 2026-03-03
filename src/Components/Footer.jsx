const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p className="footer-text">
        &copy; {currentYear} <span className="footer-accent">Sirma Academy Final Exam</span>
      </p>
    </footer>
  );
};

export default Footer;
import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>Andrey Basov ⓒ {year}</p>
    </footer>
  );
}

export default Footer;

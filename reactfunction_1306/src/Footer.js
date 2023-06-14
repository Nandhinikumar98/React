import React from "react";

const Footer = () => {
  /*function for getting year*/
  const year = new Date();

  return <footer>Copyright &copy; {year.getFullYear()}</footer>;
};

export default Footer;

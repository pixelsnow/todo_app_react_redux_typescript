import React from "react";

import classes from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <p>
        by <a href="https://github.com/pixelsnow/">Valeria Vagapova</a>
      </p>
    </footer>
  );
};

export default Footer;

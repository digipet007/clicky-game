import React from "react";
import "./style.css";

function Footer(props) {
  return (
    <footer className="py-4 text-white-50 text-center footer">
      <div className="footer-container text-center">
        <p>{props.children}</p>
      </div>
    </footer>
  );
}

export default Footer;

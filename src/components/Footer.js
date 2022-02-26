import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <p>
        @ {new Date().getFullYear()} Airbnb clone! No rights reserved - this is
        a demo!
      </p>
      <p>
        <a href="http://localhost:3000/">Privacy</a> · Terms· Sitemap Company
        Details
      </p>
    </div>
  );
}

export default Footer;

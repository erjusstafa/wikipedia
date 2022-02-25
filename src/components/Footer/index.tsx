import React, { ReactElement } from "react";
import "./styles.scss";

function Footer(): ReactElement {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
    <div className="footerWrapper">
      <div className="linkSocialMedia">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-snapchat"></i>

        <i className="fab fa-whatsapp"></i>
      </div>

     <div className="wrapp--events">
     <div className="events">
        <strong>Events</strong>
        <p>Tirane ,Albania</p>
        <h5>March {date}</h5>
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
      </div>

      <div className="events--one">
        <strong>News</strong>
        <p>
          <b>Wikipedia</b> is a free online encyclopedia.
        </p>
      </div>
     </div>

      <div className="copyright">
        <hr className="copyright--line--one" />
        <p>©{date}</p>
        <hr className="copyright--line--two" />
      </div>
    </div>
  );
}

export default Footer;

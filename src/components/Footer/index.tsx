import React, { ReactElement } from 'react'
import  "./styles.scss";

function Footer():ReactElement {
  const current = new Date();
  const date = `${current.getFullYear()}`;
  return (
<div className="headerWrapper">
        <div className="linkSocialMedia">
        <i className="fab fa-instagram"></i>
        <i className="fab fa-whatsapp"></i>
        <i className="fab fa-snapchat"></i>
        </div>
        <div className="copyright">
       <p>©{date}</p>
        </div>
      </div> 
       )
}

export default Footer
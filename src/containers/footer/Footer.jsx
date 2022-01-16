import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className="gpt3__footer" id="contact">
    <h4 className="gpt3_footer_header">Stay in touch!</h4>
    <a className="btn btn-outline-light btn-floating m-1 " href="https://www.facebook.com/onitiu.cosmin/" role="button" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
    <a className="btn btn-outline-light btn-floating m-1 " href="https://www.instagram.com/onitiucosmin/?hl=ro" role="button" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
    <a className="btn btn-outline-light btn-floating m-1 " href="https://www.linkedin.com/in/cosmin-onitiu-047ba11b2/" role="button" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a className="btn btn-outline-light btn-floating m-1 " href="https://github.com/onitiucosmin" role="button" target="_blank" rel="noreferrer">
      <FontAwesomeIcon icon={faGithub} />
    </a>
  </div>
);

export default Footer;

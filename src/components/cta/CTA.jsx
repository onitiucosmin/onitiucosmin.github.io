import React from 'react';
import './cta.css';
import myCv from './CV-Onitiu_Cosmin.pdf';

const CTA = () => (
  <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <h3>My portfolio of projects</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button type="button"><a href={myCv} download>Download my CV</a></button>
    </div>
  </div>
);

export default CTA;

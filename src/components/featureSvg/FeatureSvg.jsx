import React from 'react';
import './featureSvg.css';

const FeatureSvg = ({ title, text, imgsrc }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}<img src={imgsrc} className="language_icon" style={{ color: 'white' }} /></h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default FeatureSvg;

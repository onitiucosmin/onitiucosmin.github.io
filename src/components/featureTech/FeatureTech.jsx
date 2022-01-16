import React from 'react';
import './featureTech.css';

const FeatureTech = ({ title, text, imgsrc }) => (
  <div className="gpt3__features-container__feature-tech row">
    <div className="gpt3__features-container__feature-title-tech col-4">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="col-2">
      <img src={imgsrc} className="language_icon-tech" style={{ color: 'white' }} />
    </div>
    <div className="gpt3__features-container_feature-text-tech col-6">
      <p>{text}</p>
    </div>
    <hr style={{ color: 'white' }} />
  </div>
);

export default FeatureTech;

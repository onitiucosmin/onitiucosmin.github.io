import React from 'react';
import './featureTech.css';

const FeatureTech = ({ title, text, imgsrc }) => (
  <div className="gpt3__features-container__feature-tech row">
    <div className="col-lg-6 col-sm-12">
      <div className="row">
        <div className="col-7">
          <div className="gpt3__features-container__feature-title-tech">
            <div />
            <h1>{title}</h1>
          </div>
        </div>
        <div className="col-5">
          <img src={imgsrc} className="language_icon-tech" style={{ color: 'white' }} />
        </div>
      </div>
    </div>
    <div className="col-lg-6 col-sm-12">
      <div className="gpt3__features-container_feature-text-tech col-lg-6">
        <p>{text}</p>
      </div>
    </div>
    <hr style={{ color: 'white' }} />
  </div>
);

export default FeatureTech;

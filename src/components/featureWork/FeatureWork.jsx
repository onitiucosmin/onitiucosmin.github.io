import React from 'react';

const FeatureWork = ({ title, period, list }) => (
  <div className="gpt3__features-container__feature-tech row">
    <div className="col-lg-5 col-md-12">
      <div className="gpt3__features-container__feature-title-tech">
        <div />
        <h1>{title}</h1>
        <p>{period}</p>
      </div>
    </div>
    <div className="col-lg-7 col-md-12">
      <div className="gpt3__features-container_feature-text-tech">
        <ul>
          {list.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
    </div>
    <hr style={{ color: 'white' }} />
  </div>
);

export default FeatureWork;

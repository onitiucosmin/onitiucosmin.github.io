import React from 'react';

const FeatureWork = ({ title, period, list }) => (
  <div className="gpt3__features-container__feature-tech row">
    <div className="gpt3__features-container__feature-title-tech col-5">
      <div />
      <h1>{title}</h1>
      <p>{period}</p>
    </div>
    <div className="gpt3__features-container_feature-text-tech col-7">
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
    <hr style={{ color: 'white' }} />
  </div>
);

export default FeatureWork;

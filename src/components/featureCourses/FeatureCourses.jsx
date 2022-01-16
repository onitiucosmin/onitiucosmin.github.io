import React from 'react';
import './featureCourses.css';

const FeatureCourses = ({ title, courses }) => (
  <div className="gpt3__features-container__feature">
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <ul className="gpt3_features-container_list">
        {courses.map((course) => (
          <li>{course}</li>
        ))}
      </ul>
    </div>
  </div>
);

export default FeatureCourses;

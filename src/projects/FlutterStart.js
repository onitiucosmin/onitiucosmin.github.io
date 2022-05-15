import React from 'react';
import e1 from '../assets/flutterBMI-1.png';
import e2 from '../assets/flutterClima-1.png';
import e3 from '../assets/flutterDestini-1.png';

const expense = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://github.com/flutterProjectsCosmin/BasicProjects" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        INTRODUCTION (Link to github repo)
      </a>
    </h1>
    <p>
      While planning for my future applications, i had to consider mobile development as it is becoming more and more proeminent, and Frameworks
      that allow cross-platform development might become the norm. While studying about the trends on mobile development, I could not ignore the
      presence of Flutter in this medium. I took a bootcamp course on Flutter, which included the mentioned projects in this section.
      What i have observed but did not have difficulties with was the nature of Flutter of abstractizating the classes it provides, but also allowing
      the use of the base classes, if you want more customization. The overall potential seems amazing and I will probably delve a bit deeper into Flutter
      at some point in the future.
    </p>
    <h3 style={{ color: 'rgb(55, 51, 51)', marginTop: '2rem', marginBottom: '2rem' }} className="text-center">BMI Calculator</h3>
    <img src={e1} style={{ width: '24%', marginLeft: '38%', marginTop: '1rem' }} />
    <h3 style={{ color: 'rgb(55, 51, 51)', marginTop: '2rem', marginBottom: '2rem' }} className="text-center">Weather Application using Location</h3>
    <img src={e2} style={{ width: '24%', marginLeft: '38%', marginTop: '1rem' }} />
    <h3 style={{ color: 'rgb(55, 51, 51)', marginTop: '2rem', marginBottom: '2rem' }} className="text-center">Text Adventure App with Dynamic Rendering</h3>
    <img src={e3} style={{ width: '24%', marginLeft: '38%', marginTop: '1rem' }} />
  </div>
);

export default expense;

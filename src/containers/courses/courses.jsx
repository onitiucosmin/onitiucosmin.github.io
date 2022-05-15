import React from 'react';
import FeatureCourses from '../../components/featureCourses/FeatureCourses';
import './courses.css';

const info = {
  udemy: ['Rest API testing, Rest Assured', 'Full-stack Web Dev Course( Python, Wagtail, Node.js)', 'Complete Next.js with React and Node',
    'Blockchain.A-Z™.Build.Your.First.Blockchain', 'Complete.DApp-Solidity.React-Blockchain.Development', 'The.Complete.2020.Flutter.Development.Bootcamp.with.Dart',
    'The.Complete.Solidity.Course-Blockchain-Zero.to.Expert'],
  codecademy: ['Basics in Java, PHP, JS, Python, C#', 'Career Path to Full-stack engineering'],
  linkedin: ['Parallel and concurrent programming with C++', 'C++: Advanced topics, Design patterns, Best practices, Neural networks, Web Servers and APIs, Functional programming, Test drived development'],
};

const Courses = () => (
  <div className="gpt3__whatgpt3 section__margin-partial" id="wgpt3course">
    <div className="gpt3__whatgpt3-heading-course">
      <h1 className="gradient__text">Courses i have followed</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <FeatureCourses title="Udemy courses" courses={info.udemy} />
      <FeatureCourses title="Codecademy courses" courses={info.codecademy} />
      <FeatureCourses title="Linkedin courses" courses={info.linkedin} />
    </div>
  </div>
);

export default Courses;

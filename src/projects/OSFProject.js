import React from 'react';
import osf1 from '../assets/OSFAcademyProject-1.png';
import osf2 from '../assets/OSFAcademyProject-2.png';
import osf3 from '../assets/OSFAcademyProject-3.png';
import osf4 from '../assets/OSFAcademyProject-4.png';

const osfProj = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)' }} className="text-center my-2">DISCLAIMER</h1>
    <p className="text-center my-2">In any of the work related pages, I take on myself the responsability to not present the companies i worked with in neither a negative nor a positive light.
      The contents will be focused on what I learned, how i evolved and the projects given, on a brief report for privacy reasons.
    </p>
    <h1 className="text-center my-2">INTRODUCTION</h1>
    <p>
      The academy was an internship/upskill program, launched by OSF, which focused on a few different paths. The path i took was the back-end course, and i will list the notions covered in the course right here:
    </p>
    <ul>
      <li>Introduction and the Basics of JavaScript</li>
      <li>JavaScript Loops and Arrays</li>
      <li>JavaScript and the DOM</li>
      <li>jQuery Basics</li>
      <li>AJAX Basics</li>
      <li>Object Oriented JavaScript</li>
      <li>HTML and CSS Basics</li>
      <li>Bootstrap 4 Basics</li>
      <li>Node.js Introduction</li>
      <li>NPM basics and task-runner</li>
      <li>Express Basics and using PUG templating</li>
      <li>User auth with Express and Mongo</li>
      <li>Introductions to REST APIs</li>
      <li>REST with Express</li>
      <li>Github basics</li>
    </ul>
    <p>
      The course went on for almost a month and the objective was to build a dynamic commerce website, using endpoints given to us to their private database(including product and category searches, user database, and based on token, shopping cart information). I will put a few captures of the website i built but not de code:
    </p>
    <img src={osf1} style={{ width: '100%' }} />
    <img src={osf2} style={{ width: '100%' }} />
    <img src={osf3} style={{ width: '100%' }} />
    <img src={osf4} style={{ width: '100%' }} />
  </div>
);

export default osfProj;

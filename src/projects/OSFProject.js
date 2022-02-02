import React from 'react';
import osf1 from '../assets/OSFAcademyProject-1.png';
import osf2 from '../assets/OSFAcademyProject-2.png';
import osf3 from '../assets/OSFAcademyProject-3.png';
import osf4 from '../assets/OSFAcademyProject-4.png';

const osfProj = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)' }} className="text-center my-2">DISCLAIMER</h1>
    <p className="text-center my-4">In any of the work related pages, I take on myself the responsability to not present the companies i worked with in neither a negative nor a positive light.
      The contents will be focused on what I learned, how i evolved and the projects given, on a brief report for privacy reasons.
    </p>
    <h1 className="text-center my-3">INTRODUCTION</h1>
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
    <h3 className="text-center my-3">Problems i had trouble with and how i got over them</h3>
    <p>Being my first ever front-end application, of course errors were part of the norm. Let me list a few of the them and i got over them</p>
    <h6 className="my-2">Templating with PUG</h6>
    <p>
      Since i was not accustomed to even the usual HTML and CSS, going to PUG for templating was not something i found easy. Resources were a bit scarce as well, since
      most people that want custom components and templates would go to a framework like React. Still, there were enough for me to figure out how to do it and use
      translators from HTML to PUG. So i cheated and first wrote the HTML and translated it to PUG to make my life easier :)
    </p>
    <h6 className="my-2">Requests</h6>
    <p>
      Being completely unfamiliar with web requests at this point did not give me any advantages. AJAX and express and REST all piled up and i got a bit overwhelmed.
      Thankfully, there were tutorial videos in this course which hit close to what i needed to do, so i tried to replicate their application building in my project with partial success.
      All my routing went fine, but i do think it was not optimized, since i was grabbing too much data from the API when i needed just fractions of it + extra META information
    </p>
    <h6 className="my-2">The Asynchronous JavaScript</h6>
    <p>
      If i had to list one major issue i have had with this, it would be the async and await of JavaScript. It did not take me long to understand how they were supposed to work. But
      understanding them and implementing them in my project without encountering errors were completely different beasts. To be honest, how i got over this barrier was my taking little
      steps and testing each one, with console.logs, or alerts or using temporary variables. Thankfully, by the end, i got most of the concepts down, with a few headaches and a lot of coffee.
    </p>
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

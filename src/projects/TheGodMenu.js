import React from 'react';
import godmenu1 from '../assets/GodMenu-1.png';
import godmenu2 from '../assets/GodMenu-2.png';
import godmenu3 from '../assets/GodMenu-3.png';
import godmenu4 from '../assets/GodMenu-4.png';
import godmenu5 from '../assets/GodMenu-5.png';
import godmenu6 from '../assets/GodMenu-6.png';

const godMenu = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://thegodmenu.netlify.com" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        INTRODUCTION (Link)
      </a>
    </h1>
    <p>
      Before creating this app I was looking through full-stack courses, trying bit and pieces of each one, until i found a very interesting
      MERN Project, standing for Mongo, Express, Redux and Node, on Youtube. Following the course got a me a social media-type of web application,
      which got me thinking. I had a personal diet app i built for myself, a simple HTML, CSS and JS app. Why not make it into a social active and
      engaging experience to be shared among my friends, and extended further?
      <br /><br />
      And that is what i did, i used the knowledge gained in that tutorial to build this web application. I started with Mongo to recreate the
      data that i had before in JSON format. Then built the API with express and cloudify for image hosting, testing it all with Postman.
      Then came the front-end, using React as a base framework, adding Redux for global state, dispatchs, Axios for API connection,
      and a lot of small packages (The animated burger menu, react bootstrap, material ui, and tons of other small bits and pieces) to get this application.
      <br /><br />
      It may have been the most fun i have had in a while building something, and it us actually being used by my training group to maximize our gains. It is amaazing!
    </p>
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      The Profile page (Including profile pictures, user data and favorite recipes)
    </h1>
    <img src={godmenu1} style={{ width: '100%' }} />
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      The FAQ (Details about App usage, future plans and contact details)
    </h1>
    <img src={godmenu2} style={{ width: '100%' }} />
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      The 3 main pages for recipes (Which include options to like, favorite, delete, search and create recipes)
    </h1>
    <img src={godmenu3} style={{ width: '100%' }} />
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      The Recipe details page (Which contains data for the ingredients needed and what you have, nutritional data and comments)
    </h1>
    <img src={godmenu4} style={{ width: '100%' }} />
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      The Fridge (Where users input their actual resources)
    </h1>
    <img src={godmenu5} style={{ width: '100%' }} />
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      The Weekplanner, the main deal (Used to plan a whole week of nutrition, generate shopping lists and have fun)
    </h1>
    <img src={godmenu6} style={{ width: '100%' }} />
  </div>
);

export default godMenu;

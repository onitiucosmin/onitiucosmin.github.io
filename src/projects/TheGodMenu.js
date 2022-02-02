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
      <a href="https://thegodmenu.com" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
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
      The progress and the trouble along the way
    </h1>
    <p>Like any good personal project (good as in a good learning experience), it was filled with barriers and hoops i had to get over in order to grasp the concepts i needed. Let me start listing this mental marathon of mine:</p>
    <h4 style={{ color: 'rgb(55, 51, 51)', marginTop: '1rem', marginBottom: '1rem' }}>The schema</h4>
    <p>
      Before building this app using React as a front-end framework, Mongo, REST APIs and a lot more, i had a previous version built only with HTML, CSS and JS.
      It stored the data it needed in JSON files and was just a simple client-side application for my personal use. A few months later i followed a Youtube course on designing
      a MERN application (Mongo, Express, React+Redux, Node) for a social media platform. I saw the potential in that and planned the transformation of my simple app into
      a social nutrition application. On paper i started designing my routing first, with the data i needed and what fields each schema will have
    </p>
    <h4 style={{ color: 'rgb(55, 51, 51)', marginTop: '1rem', marginBottom: '1rem' }}>Designing the API, the database and the routing</h4>
    <p>
      Thankfully, being a NoSQL-type of database, Mongo was easy to work with. I already had the data schemas in mind, the users, breakfasts, meals, snacks and ingredients.
      I planned for every other feature that would come to mind and needed some type of data for them (Like recipe creation date, user fridge information, image paths).
      This first part went without trouble. I managed to even find a free image hosting side, Cloudinary with a modern API, to evade using base64 to store images since that could get out of hand.
      I used Express and routers to start building the API and Postman to test them. To my surprise, there were not many blockages. Possibly thanks to my previous experience with OSF Academy and some
      courses that i took beforehand.
    </p>
    <h4 style={{ color: 'rgb(55, 51, 51)', marginTop: '1rem', marginBottom: '1rem' }}>React and Redux</h4>
    <p>
      First part of designing the front-end, was creating the calls to the API and testing the data i get back. Using the standard folder structure for Redux App (api, actions, reducers),
      i designed this side quite fast. Saving the user to the local storage was the only different call i have made, since i needed that data to be always available after logging in.
      What followed was hard for me to grasp at first, which was the Hooks of React. UseState, UseDispatch, UseHistory, and some more made me confused at first. Thankfully Google showed me different
      use cases for each one, since learning by example has always been the easiest way for me to learn.
      I still had trouble with the availability of data at some points, not knowing when the data was available to display my components. Thankfully some Redux tricks (like loading states) solved these
      issues and would let me play with different loading screens.
    </p>
    <h4 style={{ color: 'rgb(55, 51, 51)', marginTop: '1rem', marginBottom: '1rem' }}>The subtle issues</h4>
    <p>
      While designing this application, the issues did not come about (or at least most of them) with what i have learnt in the tutorial. If it was a simpler use case than a nutrition app which needs
      to do a lot of calculations at some points, it would have not been a problem. But life is life. I found the way Javascript stores memory on the client side quite confusing and problematic at some points.
      Being used to C++, i was used to the freedom of retaining data by reference or value, but this was not the case here. I had to do some workarounds due to my lack of experience with JS, like using temporary
      variables at some points and force-freeing memory at others. So to summarize, i would put designing the data structure for the app has been the hardest task so far for me. :)
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

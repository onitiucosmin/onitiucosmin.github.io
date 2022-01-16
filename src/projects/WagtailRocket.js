import React from 'react';
import wagtail1 from '../assets/WagtailRocket-1.png';
import wagtail2 from '../assets/WagtailRocket-2.png';
import wagtail3 from '../assets/WagtailRocket-3.png';
import wagtail4 from '../assets/WagtailRocket-4.png';

const wagtailRocket = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)' }} className="text-center my-2">
      <a href="https://github.com/Python-Experiences-Onitiu-Cosmin/Rocketman-FullStack-Web-Dev" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(53, 105, 145)' }}>
        INTRODUCTION (GitHub Link)
      </a>
    </h1>
    <p>
      During the FullStack Web Development Course offered by Kalob Taulien on Udemy, one section was dedicated to Python. Thankfully he did not leave it as just the introduction to Python
      and introduced his project, a framework CMS development on top of Django with simmilar syntax called Wagtail. The way he presentent it, and I will use his words Think of
      Wordpress, but think much bigger, much more customizable, more admin-friendly <br />
      The project here is a simple site for Rocket Cleaning, i mean, as you do, called Rocketman. The interface, being the first image you will see looks a lot like Wordpress, but it is completely
      customized in the course, all the elements, all the settings are created in the project. So with Wagtail there are no limits and no defaults, total freedom. <br />
      I will refrain from posting the code, since it is a lot to post (You can find it in the Github link) but i will list the points covered in the course. :)
    </p>
    <ul>
      <li>Python management and virtual enviroments</li>
      <li>Homepages and templates</li>
      <li>Apps and pages predesign and templating</li>
      <li>Validation and debugging using Python packages</li>
      <li>Flex pages and customizable content</li>
      <li>Streamfields and their power</li>
      <li>Navigations and limitations</li>
      <li>Support and customizable settings</li>
      <li>Caching and Speeding up the site</li>
      <li>Using Sentry</li>
      <li>Launching the site on DigitalOcean</li>
    </ul>
    <p>
      There is not much content added to the site, but the point was to create the framework on which to add content:
    </p>
    <img src={wagtail1} style={{ width: '100%' }} />
    <img src={wagtail2} style={{ width: '100%' }} />
    <img src={wagtail3} style={{ width: '100%' }} />
    <img src={wagtail4} style={{ width: '100%' }} />
  </div>
);

export default wagtailRocket;

import React from 'react';
import t1 from '../assets/TeamsCopy-1.PNG';

const teams = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://cosmin-teams-copy.netlify.app/" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        INTRODUCTION (Link to actual site)
      </a>
    </h1>
    <p>Please use onitiucosmin and 123123 as the password, as the signup functionality of the chat engine was still a WIP. :)</p>
    <h2 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://github.com/Javascript-Projects-Cosmin/Teams-Copy" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        GitHub Link
      </a>
    </h2>
    <p>
      There are so many node packages out there at the moment, each one bringing different possibilities to the table, and i belive that to be amazing.
      On this project, i made use of a really cool API from Chat Engine, a dedicated platform to develop your own chat applications and design them
      however you want to.
      In this project, branching off from the default Chat Engine interface, this app also has read and push notifications, images, activity status,
      and a redesigned main chat. Really cool experience to see what possibilities are out there for developing whatever the hell you want!
    </p>
    <img src={t1} style={{ width: '100%', marginTop: '1rem' }} />
  </div>
);

export default teams;

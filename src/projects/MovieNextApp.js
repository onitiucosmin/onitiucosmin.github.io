import React from 'react';
import movieNext1 from '../assets/MovieNextApp-1.png';

const movieNext = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://github.com/Javascript-Projects-Cosmin/Movie-App-with-Next.js" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(53, 105, 145)' }}>
        INTRODUCTION (GitHub Link)
      </a>
    </h1>
    <p>
      I will not show the whole process of creating the app since the app itself is quite simple. <br />
      What was fun about it, was learning the principles of React and Next.js. The modularization and big range of customization with passable props,
      fun design and easy to understand, made this experience great for me.
    </p>
    <img src={movieNext1} style={{ width: '100%' }} />
  </div>
);

export default movieNext;

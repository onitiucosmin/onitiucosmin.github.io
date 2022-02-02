import React from 'react';
import k1 from '../assets/kryptonet-1.PNG';
import k2 from '../assets/kryptonet-2.PNG';
import k3 from '../assets/kryptonet-3.PNG';

const kryptonet = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://kryptotest.netlify.app/" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        INTRODUCTION (Link to actual site)
      </a>
    </h1>
    <h2 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://github.com/Javascript-Projects-Cosmin/Kryptonet" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        GitHub Link
      </a>
    </h2>
    <p>
      Before starting this little project, i was still aware of the crypto world, and had just a bit of insight on the blockchain technology. So i did not start from zero. However, it opened
      my eyes regarding what is possible at the moment and what is to come in the future for Web 3.0. Seems the world is moving towards a different direction.
      The project itself, at least on the front-end was quite simple, but it was the first time i have used TailwindCSS and it was so fun. It does feel like a different Bootstrap to me, which
      just means more options to choose from and learn.
      Also, a new tool shown in this project is Vite, a tooling which makes developing React apps much faster.
    </p>
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      Old and new lessons
    </h1>
    <h4 style={{ color: 'rgb(55, 51, 51)', marginTop: '1rem', marginBottom: '1rem' }}>TailwindCSS</h4>
    <p>
      Just an amazing CSS framework, if i can call it that, all around. I had no need to create any extra classes, or use any css files. It was all done in the JSX, and it was simple to setup.
      I do admit the amount of new classes, and terminology was a bit much at the beginning, but it all made sense halfway through the course.
    </p>
    <h4 style={{ color: 'rgb(55, 51, 51)', marginTop: '1rem', marginBottom: '1rem' }}>Ethers, Smart Contracts and Solidity</h4>
    <p>
      I did struggle a bit, i will be honest. A completely new language, new functions, and terms i have not heard before. I grabbed the documentation and started reading just for it to make sense
      to me. By the end, i still have some things to solve in my mind, but it was an eye-opening experience. It is not that complicated after getting into it.
    </p>
    <h4 style={{ color: 'rgb(55, 51, 51)', marginTop: '1rem', marginBottom: '1rem' }}>New tools at my disposal</h4>
    <p>
      Before listing the blockchain tools, a special mention to Vite, making the development process of my React apps much faster.
      Starting from Metamask which was a simple wallet to use and create new accounts for testing, to Ropsten faucet for grabbing Dummy Ethereum so i do not have to spend real money on Gas Fees,
      and Alchemy for providing me the base for making blockchain requests.
    </p>
    <img src={k1} style={{ width: '100%', marginTop: '1rem' }} />
    <img src={k2} style={{ width: '100%', marginTop: '1rem' }} />
    <img src={k3} style={{ width: '100%', marginTop: '1rem' }} />
  </div>
);

export default kryptonet;

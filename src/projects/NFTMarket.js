import React from 'react';
import k1 from '../assets/nftmarket-1.PNG';
import k2 from '../assets/nftmarket-2.PNG';

const nftmarket = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://old-credit-9021.on.fleek.co/" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        INTRODUCTION (Link to actual site)
      </a>
    </h1>
    <h2 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://github.com/Javascript-Projects-Cosmin/ReactNativeNFTMarket/tree/main/nft-marketplace-showcase-main" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        GitHub Link
      </a>
    </h2>
    <p>
      React Native has not been a hard transition to do while having some React experience, thankfully. What amazed me while doing this project is the power of Expo, allowing you to test your app on your phone while updating it
      on your development machine. I got blown away by the possibility this has brought to mobile development.
    </p>
    <img src={k1} style={{ width: '100%', marginTop: '1rem' }} />
    <img src={k2} style={{ width: '100%', marginTop: '1rem' }} />
  </div>
);

export default nftmarket;

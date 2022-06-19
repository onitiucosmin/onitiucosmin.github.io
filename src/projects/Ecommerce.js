import React from 'react';
import k1 from '../assets/ecommerce-1.PNG';
import k2 from '../assets/ecommerce-2.PNG';

const ecommerce = (
  <div>
    <h1 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://ecommerce-next-js-stripe-fg57s9md8-globaldevgroup.vercel.app/" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        INTRODUCTION (Link to actual site)
      </a>
    </h1>
    <h2 style={{ color: 'rgb(55, 51, 51)', marginTop: '4rem', marginBottom: '4rem' }} className="text-center">
      <a href="https://github.com/Javascript-Projects-Cosmin/Ecommerce-Next.js-Stripe" rel="noreferrer" target="_blank" style={{ textDecoration: 'none', color: 'rgb(21, 44, 61)' }}>
        GitHub Link
      </a>
    </h2>
    <p>
      Why am i building an ecommerce site in a world where Shopify and so many others shop building platforms exist? Well, i have worked recently with a few clients on developing their Shopify shops,
      and, while helpful to have tools at your disposal, so many of them costing money, i would have wanted the freedom to build the site as i want it, but including the functionalities and simplifications that
      Shopify brings. Then a course came about which included the CMS Sanity, the Stripe payment system and developed with Next.js and i saw the possibilities of developing such a website.
      I would normally list the difficulties i have had with the project, but due to Adrian from JSM being a very good teacher and the technologies used being modern and not having old dependencies, the project
      went without a hitch.
    </p>
    <img src={k1} style={{ width: '100%', marginTop: '1rem' }} />
    <img src={k2} style={{ width: '100%', marginTop: '1rem' }} />
  </div>
);

export default ecommerce;

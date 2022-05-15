import React, { useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Languages from './containers/languages/languages';
import { Footer, Blog, Tech, StrongPoints, Header, Courses, Work } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => {
  //  eslint-disable-next-line
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  return (
    <div className="App" id="outer-container">
      <Navbar />
      <Menu
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        isOpen={openBurgerMenu}
        noOverlay
        right
      >
        <a href="#home"><p className="lead menuItem">Home</p></a>
        <a href="#features"><p className="lead menuItem">My programming languages</p></a>
        <a href="#possibility"><p className="lead menuItem">Familliar technologies</p></a>
        <a href="#portfolio"><p className="lead menuItem">See my porfolio</p></a>
        <a href="#possibilitywork"><p className="lead menuItem">Work experiences and Studies</p></a>
        <a href="#wgpt3course"><p className="lead menuItem">Followed Courses</p></a>
        <a href="#wgpt3"><p className="lead menuItem">What represents me?</p></a>
        <a href="#contact"><p className="lead menuItem">Contact me</p></a>
      </Menu>
      <main id="page-wrap">
        <div className="gradient__bg">
          <Header />
        </div>
        <Languages />
        <Tech />
        <CTA />
        <Blog />
        <Work />
        <Courses />
        <StrongPoints />
      </main>
      <Footer />
    </div>
  );
};

export default App;

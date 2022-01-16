import React, { useEffect, useState } from 'react';
import { slide as Menu } from 'react-burger-menu';
import Languages from './containers/languages/languages';
import { Footer, Blog, Tech, StrongPoints, Header, Courses, Work } from './containers';
import { CTA, Navbar } from './components';

import './App.css';

const App = () => {
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => { setOpenBurgerMenu(true); }, 2000);
  }, []);

  return (
    <div className="App" id="outer-container">
      <Navbar />
      <Menu
        pageWrapId="page-wrap"
        outerContainerId="outer-container"
        isOpen={openBurgerMenu}
      >
        <h3 style={{ marginBottom: '2rem' }}>Contents</h3>
        <a href="#home"><button type="button" className="menuItem btn btn-outline-dark">Home</button></a>
        <a href="#wgpt3"><button type="button" className="menuItem btn btn-outline-dark">What represents me?</button></a>
        <a href="#features"><button type="button" className="menuItem btn btn-outline-dark">My programming languages</button></a>
        <a href="#possibility"><button type="button" className="menuItem btn btn-outline-dark">Familliar technologies</button></a>
        <a href="#portfolio"><button type="button" className="menuItem btn btn-outline-dark">See my porfolio</button></a>
        <a href="#wgpt3course"><button type="button" className="menuItem btn btn-outline-dark">Followed Courses</button></a>
        <a href="#possibilitywork"><button type="button" className="menuItem btn btn-outline-dark">Work experiences and Studies</button></a>
        <a href="#contact"><button type="button" className="menuItem btn btn-outline-dark">Contact me</button></a>
      </Menu>
      <main id="page-wrap">
        <div className="gradient__bg">
          <Header />
        </div>
        <StrongPoints />
        <Languages />
        <Tech />
        <CTA />
        <Blog />
        <Courses />
        <Work />
      </main>
      <Footer />
    </div>
  );
};

export default App;

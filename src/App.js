import React, { useState } from 'react';
// import { slide as Menu } from 'react-burger-menu';
import Languages from './containers/languages/languages';
import { Header, Footer, Tech, Blog, Work, Courses, StrongPoints } from './containers';
import { Navbar, CTA } from './components';

import './App.css';

const App = () => {
  //  eslint-disable-next-line
  const [openBurgerMenu, setOpenBurgerMenu] = useState(false);

  return (
    <div className="App" id="outer-container">
      <Navbar />
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

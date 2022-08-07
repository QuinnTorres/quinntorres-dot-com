import React from 'react';
import 'components/global/Nav/Nav.scss';
import {ReactComponent as MenuIcon} from 'svg/hamburger.svg';

import SocialLinks from 'components/navigation/SocialLinks/SocialLinks';
import NavMenu from 'components/global/NavMenu/NavMenu';

let menuIsOpen = false;

function toggleMenu() {
  menuIsOpen = !menuIsOpen;
}

function Nav() {
  return (
    <header className="Nav">
      <button className="Nav__MenuButton" aria-label="Open mobile menu" onClick={toggleMenu}>
        <MenuIcon />
      </button>

      <h1 className="Nav__Header">
        <a className="Nav__HeaderTitle" href="/">
          Quinn Torres
        </a>
        <span className="Nav__HeaderSubTitle">
          Senior Front-End Developer @ Dotdash Meredith
        </span>
      </h1>

      {menuIsOpen ? <NavMenu /> : <SocialLinks />}
    </header>
  );
}

export default Nav;

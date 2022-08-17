import {React, useState} from 'react';
import 'components/global/Nav/Nav.scss';

import SocialLinks from 'components/navigation/SocialLinks/SocialLinks';
import NavMenu from 'components/global/NavMenu/NavMenu';

function Nav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const body = document.querySelector('body');

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
    body.classList.toggle('noscroll')
  }

  return (
    <header className={`Nav ${menuIsOpen ? 'Nav--MenuOpen' : ''}`}>
      <button className="Nav__MenuButton" aria-label="Open mobile menu" onClick={toggleMenu}>
        <div className="Nav__MenuButtonShape Nav__MenuButtonTop" />
        <div className="Nav__MenuButtonShape Nav__MenuButtonMiddle" />
        <div className="Nav__MenuButtonShape Nav__MenuButtonBottom" />
      </button>

      {menuIsOpen ?
        <NavMenu />
        :
        <h1 className="Nav__Header">
          <a className="Nav__HeaderTitle" href="/">
            Quinn Torres
          </a>
          <span className="Nav__HeaderSubTitle">
            <span className="Nav__HeaderSubTitleLine">Senior Front-End Developer</span>
            <span className="Nav__HeaderSubTitleLine">@ Dotdash Meredith</span>
          </span>
          <SocialLinks />
        </h1>
      }
    </header>
  );
}

export default Nav;

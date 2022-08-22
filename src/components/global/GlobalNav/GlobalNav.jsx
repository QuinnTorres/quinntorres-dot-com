import {React, useState} from 'react';
import 'components/global/GlobalNav/GlobalNav.scss';

import SocialLinks from 'components/navigation/SocialLinks/SocialLinks';
import NavMenu from 'components/global/NavMenu/NavMenu';
import { throttle } from 'js/utils.js';

const LARGE_HEADER_CUTOFF = 200;

function Nav({menuIsOpen, toggleMenu}) {
  const [navIsMinimized, setNavIsMinimized] = useState(false);

  function handleScroll() {
    if (window.scrollY > LARGE_HEADER_CUTOFF) {
      setNavIsMinimized(true);
    } else {
      setNavIsMinimized(false);
    }
  }

  window.addEventListener('scroll', throttle(handleScroll, 100));

  return (
    <header className={`GlobalNav ${menuIsOpen ? 'GlobalNav--MenuOpen' : ''} ${navIsMinimized ? 'GlobalNav--Minimized' : ''}`.trim()}>
      <button className="GlobalNav__MenuButton" aria-label="Open mobile menu" onClick={toggleMenu}>
        <div className="GlobalNav__MenuButtonShape GlobalNav__MenuButtonTop" />
        <div className="GlobalNav__MenuButtonShape GlobalNav__MenuButtonMiddle" />
        <div className="GlobalNav__MenuButtonShape GlobalNav__MenuButtonBottom" />
      </button>

      {menuIsOpen ?
        <NavMenu toggleMenu={toggleMenu} />
        :
        <h1 className="GlobalNav__Header">
          <a className="GlobalNav__HeaderTitle" href="/">
            Quinn Torres
          </a>
          <span className="GlobalNav__HeaderSubTitle">
            <span className="GlobalNav__HeaderSubTitleLine">Senior Front-End Developer</span>
            <span className="GlobalNav__HeaderSubTitleLine">@ Dotdash Meredith</span>
          </span>
          <SocialLinks />
        </h1>
      }
    </header>
  );
}

export default Nav;

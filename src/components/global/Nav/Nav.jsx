import {React, useState} from 'react';
import 'components/global/Nav/Nav.scss';
import {ReactComponent as MenuIcon} from 'svg/hamburger.svg';

import SocialLinks from 'components/navigation/SocialLinks/SocialLinks';
import NavMenu from 'components/global/NavMenu/NavMenu';

function NavMenuButton({onClick, menuIsOpen=false}) {
  return (
    <button className={`Nav__MenuButton ${menuIsOpen ? 'Nav__MenuButton--Open' : ''}`} aria-label="Open mobile menu" onClick={onClick}>
      <MenuIcon />
    </button>
  )
}

function Nav() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const body = document.querySelector('body');

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
    body.classList.toggle('noscroll')
  }

  return (
    <header className="Nav">
      <NavMenuButton onClick={toggleMenu} />

      <h1 className="Nav__Header">
        <a className="Nav__HeaderTitle" href="/">
          Quinn Torres
        </a>
        <span className="Nav__HeaderSubTitle">
          <span className="Nav__HeaderSubTitleLine">Senior Front-End Developer</span>
          <span className="Nav__HeaderSubTitleLine">@ Dotdash Meredith</span>
        </span>
      </h1>

      {menuIsOpen ?
        <NavMenu>
          <NavMenuButton onClick={toggleMenu} menuIsOpen={true}/>
        </NavMenu>
        :
        <SocialLinks />
      }
    </header>
  );
}

export default Nav;

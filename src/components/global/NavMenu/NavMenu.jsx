import React from 'react';
import 'components/global/NavMenu/NavMenu.scss';
import SocialLinksMenu from 'components/navigation/SocialLinks/SocialLinksMenu/SocialLinksMenu';

function NavMenu({children, toggleMenu}) {
  const links = [
    {
      name: process.env.REACT_APP_ABOUT_TITLE,
      url: `#${process.env.REACT_APP_ABOUT_ANCHOR}`,
    },
    {
      name: process.env.REACT_APP_EXPERIENCE_TITLE,
      url: `#${process.env.REACT_APP_EXPERIENCE_ANCHOR}`,
    },
    {
      name: process.env.REACT_APP_PROJECTS_TITLE,
      url: `#${process.env.REACT_APP_PROJECTS_ANCHOR}`
    }
  ];

  return (
    <div className="NavMenu">
      {children}

      <h2 className="NavMenu__Header">
        Contents
      </h2>

      <div className="NavMenu__Links" onClick={toggleMenu}>
        {links.map(link => (
          <a className="NavMenu__Link" href={link.url} key={link.url}>
            {link.name}
          </a>        
        ))}
      </div>

      <h2 className="NavMenu__Header">
        Links
      </h2>
      <SocialLinksMenu />
    </div>
  );
}

export default NavMenu;

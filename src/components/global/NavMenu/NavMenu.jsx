import React from 'react';
import 'components/global/NavMenu/NavMenu.scss';
import SocialLinksMenu from 'components/navigation/SocialLinks/SocialLinksMenu/SocialLinksMenu';

function NavMenu({children}) {
  const links = [
    {
      name: 'About Me',
      url: '#about-me',
    },
    {
      name: 'Experience',
      url: '#experience',
    },
    {
      name: 'Projects',
      url: '#projects'
    }
  ];

  return (
    <div className="NavMenu">
      {children}

      <h2 className="NavMenu__Header">
        Contents
      </h2>

      <div className="NavMenu__Links">
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

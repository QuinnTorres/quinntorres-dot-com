import React from 'react';
import 'components/global/NavMenu/NavMenu.scss';
import SocialLinksMenu from 'components/navigation/SocialLinks/SocialLinksMenu/SocialLinksMenu';

function NavMenu() {
  const links = [
    {
      name: 'About',
      url: '#about',
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
      {links.map(link => (
        <a className="Nav__MenuLink" href={link.url}>
          {link.name}
        </a>        
      ))}

      <SocialLinksMenu />
    </div>
  );
}

export default NavMenu;

import React from 'react';
import 'components/global/Nav/Nav.scss';
import {ReactComponent as GitHubLogo} from 'svg/github.svg';
import {ReactComponent as LinkedInLogo} from 'svg/linkedin.svg';
import {ReactComponent as EmailLogo} from 'svg/email.svg';

import IconLink from 'components/navigation/IconLink/IconLink';

function Nav() {
  const links = [
    {
      name: 'Email',
      url: 'mailto:quinntorrs@gmail.com',
      logo: EmailLogo
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/quinn-torres/',
      logo: LinkedInLogo
    },
    {
      name: 'GitHub',
      url: 'https://github.com/QuinnTorres/',
      logo: GitHubLogo
    }
  ];

  return (
    <header className="Nav">
      {links.map(link => (
        <IconLink
          key={link.url}
          name={link.name}
          url={link.url}
          logo={link.logo}
        />
      ))}
    </header>
  );
}

export default Nav;

import React from 'react';
import 'components/navigation/SocialLinks/SocialLinks.scss';
import {ReactComponent as GitHubIcon} from 'svg/github.svg';
import {ReactComponent as LinkedInIcon} from 'svg/linkedin.svg';
import {ReactComponent as EmailIcon} from 'svg/email.svg';

import IconLink from 'components/navigation/IconLink/IconLink';

function SocialLinks({className=''}) {
  const links = [
    {
      name: 'Email',
      url: 'mailto:quinntorrs@gmail.com',
      logo: EmailIcon
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/quinn-torres/',
      logo: LinkedInIcon
    },
    {
      name: 'GitHub',
      url: 'https://github.com/QuinnTorres/',
      logo: GitHubIcon
    }
  ];

  return (
    <div className={`SocialLinks ${className}`}>
      {links.map(({url, name, logo}) => (
        <IconLink
          key={url}
          name={name}
          url={url}
          logo={logo}
        />
      ))}
    </div>
  );
}

export default SocialLinks;

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
      url: process.env.REACT_APP_EMAIL,
      logo: EmailIcon
    },
    {
      name: 'LinkedIn',
      url: process.env.REACT_APP_LINKEDIN,
      logo: LinkedInIcon
    },
    {
      name: 'GitHub',
      url: process.env.REACT_APP_GITHUB,
      logo: GitHubIcon
    }
  ];

  return (
    <div className={`SocialLinks ${className}`.trim()}>
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

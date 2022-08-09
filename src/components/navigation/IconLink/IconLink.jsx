import React from 'react';
import 'components/navigation/IconLink/IconLink.scss';

function IconLink({url, name, logo: Logo}) {
  return (
    <a
      className="IconLink"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
    >
      <Logo className={`App__${name}`} />
    </a>
  );
}

export default IconLink;

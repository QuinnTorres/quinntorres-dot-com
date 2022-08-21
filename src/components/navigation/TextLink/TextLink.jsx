import React from 'react';
import 'components/navigation/TextLink/TextLink.scss';

function TextLink({children, href}) {
  return (
    <a className="TextLink" href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default TextLink;

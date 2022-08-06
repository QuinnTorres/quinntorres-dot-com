import React from 'react';
import 'components/navigation/IconLink/IconLink.scss';

function IconLink(props) {
    return (
        <a
            className="IconLink"
            href={props.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={props.name}
        >
            <props.logo className={`App__${props.name}`} />
        </a>
    );
}

export default IconLink;

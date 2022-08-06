import React from 'react';
import 'components/global/Nav/Nav.scss';
import {ReactComponent as GitHubLogo} from 'svg/github.svg';
import {ReactComponent as LinkedInLogo} from 'svg/linkedin.svg';

function Nav() {
    return (
        <header className="Nav">
            <a
                className="Nav__ProfileLink Nav__LinkedIn"
                href="https://www.linkedin.com/in/quinn-torres/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
            >
                <LinkedInLogo className="App__LinkedInLogo" />
            </a>

            <a
                className="Nav__ProfileLink Nav__GitHub"
                href="https://github.com/QuinnTorres/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
            >
                <GitHubLogo className="App__LinkedInLogo" />
            </a>
        </header>
    );
}

export default Nav;

import React from 'react';
import {ReactComponent as GitHubLogo} from './github.svg';
import {ReactComponent as LinkedInLogo} from './linkedin.svg';
import './App.scss';

function App() {
    return (
        <div className="App">
            <header className="App__Header">
                <a
                    className="App__ProfileLink App__LinkedIn"
                    href="https://www.linkedin.com/in/quinn-torres/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                >
                    <LinkedInLogo className="App__LinkedInLogo" />
                </a>

                <a
                    className="App__ProfileLink App__GitHub"
                    href="https://github.com/QuinnTorres/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <GitHubLogo className="App__LinkedInLogo" />
                </a>
            </header>
        </div>
    );
}

export default App;

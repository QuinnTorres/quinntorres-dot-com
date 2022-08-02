import React from 'react';
import githubLogo from './github.svg';
import linkedinLogo from './linkedin.svg';
import './App.css';

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
                    <img src={linkedinLogo} className="App__LinkedInLogo" alt="LinkedIn" />
                </a>

                <a
                    className="App__ProfileLink App__GitHub"
                    href="https://github.com/QuinnTorres/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                >
                    <img src={githubLogo} className="App__GitHubLogo" alt="GitHub" />
                </a>
            </header>
        </div>
    );
}

export default App;

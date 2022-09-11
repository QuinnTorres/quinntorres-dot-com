import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import 'components/App.scss';

import GlobalNav from 'components/global/GlobalNav/GlobalNav';
import AboutMe from 'components/sections/AboutMe/AboutMe';
import MyExperience from 'components/sections/MyExperience/MyExperience';
import ProjectList from 'components/sections/ProjectList/ProjectList';
import MySkills from 'components/sections/MySkills/MySkills';
import SocialLinksEnd from 'components/navigation/SocialLinks/SocialLinksEnd/SocialLinksEnd';
import BackToTop from 'components/global/BackToTop/BackToTop';

export const TOP_OF_PAGE_CUTOFF = 200;
export const SCROLL_THROTTLE = 50;

smoothscroll.polyfill();

function App() {
  return (
    <div className="App">
      <GlobalNav />

      <main className="App__Content">
        <AboutMe />
        <MyExperience />
        <ProjectList />
        <MySkills />

        <div className="App__End">
          <span className="App__EndText">
            🥳 The End!
          </span>

          <span className="App__SignatureText">
            - Quinn Torres
          </span>

          <SocialLinksEnd />
        </div>
      </main>

      <BackToTop />
    </div>
  );
}

export default App;

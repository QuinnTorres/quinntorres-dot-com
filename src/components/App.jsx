import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import 'components/App.scss';

import GlobalNav from 'components/global/GlobalNav/GlobalNav';
import AboutMe from 'components/sections/AboutMe/AboutMe';
import MyExperience from 'components/sections/MyExperience/MyExperience';
import ProjectList from 'components/sections/ProjectList/ProjectList';
import MySkills from 'components/sections/MySkills/MySkills';
import BackToTop from 'components/global/BackToTop/BackToTop';

export const TOP_OF_PAGE_CUTOFF = 200;
export const SCROLL_THROTTLE = 50;

smoothscroll.polyfill();

function App() {
  return (
    <div className="App">
      <GlobalNav />

      <main className="Content">
        <AboutMe />
        <MyExperience />
        <ProjectList />
        <MySkills />
      </main>

      <BackToTop />
    </div>
  );
}

export default App;

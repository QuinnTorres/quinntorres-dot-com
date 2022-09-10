import {React, useState} from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import 'components/App.scss';

import GlobalNav from 'components/global/GlobalNav/GlobalNav';
import AboutMe from 'components/sections/AboutMe/AboutMe';
import MyExperience from 'components/sections/MyExperience/MyExperience';
import ProjectList from 'components/sections/ProjectList/ProjectList';
import BackToTop from 'components/global/BackToTop/BackToTop';

export const TOP_OF_PAGE_CUTOFF = 200;
export const SCROLL_THROTTLE = 50;

smoothscroll.polyfill();

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const body = document.querySelector('body');

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
    body.classList.toggle('NoScroll')
  }

  return (
    <div className="App">
      <GlobalNav menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />

      <main className="Content" onClick={toggleMenu}>
        <AboutMe />
        <MyExperience />
        <ProjectList />
      </main>

      <BackToTop />
    </div>
  );
}

export default App;

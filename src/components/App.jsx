import {React, useState} from 'react';
import 'components/App.scss';

import GlobalNav from 'components/global/GlobalNav/GlobalNav';
import AboutMe from 'components/sections/AboutMe/AboutMe';

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
      </main>
    </div>
  );
}

export default App;

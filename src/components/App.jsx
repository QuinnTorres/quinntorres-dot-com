import {React, useState} from 'react';
import 'components/App.scss';

import Nav from './global/Nav/Nav';
import About from './sections/About/About';

function App() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const body = document.querySelector('body');

  function toggleMenu() {
    setMenuIsOpen(!menuIsOpen);
    body.classList.toggle('NoScroll')
  }

  return (
    <div className="App">
      <Nav menuIsOpen={menuIsOpen} toggleMenu={toggleMenu} />
      <main className="Content" onClick={toggleMenu}>
        <About />
      </main>
    </div>
  );
}

export default App;

import React from 'react';
import 'components/App.scss';

import Nav from './global/Nav/Nav';
import About from './sections/About/About';

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="Content">
        <About />
      </div>
    </div>
  );
}

export default App;

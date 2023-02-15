import React from 'react';
import './App.scss';

import Nav from './components/nav/nav';
import Main from './pages/main';

function App() {
  return (
    <div className="App">
      <Nav />
      <Main />
    </div>
  );
}

export default App;

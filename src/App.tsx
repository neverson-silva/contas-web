import React from 'react';
import { Route } from 'react-router-dom';

import Home from './pages/home';
import Login from './pages/login';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      {/* <Home/> */}
      <Routes/>
      <Login/>
    </div>
  );
}

export default App;

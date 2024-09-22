import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Favorites from './pages/Favorites';
import History from './pages/History';

const App = () => {
  return (<Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/favorites' element={<Favorites />} />
      <Route path='/history' element={<History />} />
    </Routes>
  </Router>
  );
}

export default App;

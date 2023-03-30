import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import RoutePaths from './utils/RoutePaths';

function App() {
  return (
    <Routes>
      <Route path={RoutePaths.HOME} element={<Home />} />
      <Route path={RoutePaths.LOGIN} element={<Login />} />
      <Route path={RoutePaths.REGISTER} element={<Register />} />
    </Routes>
  );
}

export default App;

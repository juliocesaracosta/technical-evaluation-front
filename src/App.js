import React, { useState, useEffect } from 'react';
import Nav from './Components/Nav';
import Profile from './Profile';
import Administration from "./pages/Administration/Administration";
import Themes from './pages/Themes/Themes';
import ProtectedRoute from './Utils/ProtectedRoute';
import Login from './pages/Login/Login';
import { Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';

function App() {
  return (
    <>
      <ProtectedRoute>
        <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/administration" element={<Administration />} />
              <Route path="/administration/themes" element={<Themes />} />
            </Route>
          </Routes>
      </ProtectedRoute>
          
    </>
  );
}

export default App;

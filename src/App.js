import React, { useState, useEffect } from 'react';
import Administration from "./pages/Administration/Administration";
import Themes from './pages/Themes/Themes';
import ProtectedRoute from './Utils/ProtectedRoute';
import Login from './pages/Login/Login';
import { Routes, Route , BrowserRouter} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Register from './pages/Login/Register';

function App() {
  return (
    <>
      <BrowserRouter>
        <ProtectedRoute>
          <Routes>
              <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/administration" element={<Administration />} />
                  <Route path="/administration/themes" element={<Themes />} />
              </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
        </ProtectedRoute>
      </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Profile from './Profile';
import Administration from "./pages/Administration/Administration";
import Themes from './pages/Themes/Themes';
import ProtectedRoute from './Utils/ProtectedRoute';

function App() {
  return (
    <>
      <Nav></Nav>
      <div className='lg:flex'>
        <div className=''>
        </div>
        <div className="overflow-x-auto w-full pt-5">
          <ProtectedRoute>
            <Routes>
                <Route exact path="/profile" element={<Profile/>}></Route>
                <Route exact path="/administration" element={<Administration/>}></Route>
                <Route exact path="/administration/themes" element={<Themes/>}></Route>
            </Routes>
          </ProtectedRoute>
        </div>
      </div>
    </>
  );
}

export default App;

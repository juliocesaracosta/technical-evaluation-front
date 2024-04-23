import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav';
import Profile from './Profile';
import Sidebar from './Components/Side/Sidebar';
import Administration from "./pages/Administration/Administration";;

function App() {
  return (
    <>
      <Nav></Nav>
      <Routes>
        <Route exact path="/profile" element={<Profile/>}></Route>
        <Route exact path="/administration" element={<Administration/>}></Route>
      </Routes>
    </>
  );
}

export default App;

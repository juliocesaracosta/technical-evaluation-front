import React, { useState, useEffect } from 'react';
import Side from '../../Components/Side';
import { Table } from "flowbite-react";
import Themes from '../Themes/Themes';
import { Routes, Route } from 'react-router-dom';


function Administration(props) {
  return (
    <div className='lg:flex'>
      <div className=''>
      <Side></Side>
      </div>
      <div className="overflow-x-auto w-full pt-5">
      </div>
    </div>
  );
}

export default Administration;
import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Components/Nav';
import Side from './Components/Side';

function Layout() {
  return (
    <div>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <div className='lg:flex'>
            <div className=''>
            <Side></Side>
            </div>
            <div className="overflow-x-auto w-full pt-5">
                <Outlet />
            </div>
        </div>
      </main>
    </div>
  );
}

export default Layout;
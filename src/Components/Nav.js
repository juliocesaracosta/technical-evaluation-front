import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Dropdown, Navbar } from "flowbite-react";


function Nav() {
  const [haveRol, setRol] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tpmuser = sessionStorage.getItem('user');
    if (tpmuser) {
      setUser(JSON.parse(tpmuser));
    }
  }, []);
  useEffect(() => {
    if (user) {
        setRol([2,3].includes(user.role.id) ?
         true: false)
    }
  }, [user]);
  return (
    <Navbar fluid className='nav-important'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Content</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        {user ? '' :
        <Navbar.Collapse>
          <Navbar.Link href=""><Link to="/login">Ingresar</Link></Navbar.Link>

        </Navbar.Collapse>}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href=""><Link to="/">Home</Link></Navbar.Link>
        <Navbar.Link href="#"><Link to="/profile">Profile</Link></Navbar.Link>
        {haveRol ? <Navbar.Link href="#"><Link to="/administration">Administration</Link></Navbar.Link> : ''}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
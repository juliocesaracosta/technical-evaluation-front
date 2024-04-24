import React, { useState, useEffect } from 'react';
import { Link, useNavigate} from 'react-router-dom';
import { Avatar, Dropdown, Navbar } from "flowbite-react";


function Nav() {
  const [haveRol, setRol] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

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

  const logOut = () => {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    navigate("/login");
    console.log('Logout')
  } 


  return (
    <Navbar fluid className='nav-important'>
      <div className="flex md:order-2">
        { user ?
          <Navbar.Collapse>
            <Navbar.Link href="" className="text-red-600"><Link to="">Bienvenido {user.name}</Link></Navbar.Link>
            <Navbar.Link href=""><Link to="" onClick={logOut}>Cerrar Sesion</Link></Navbar.Link>
          </Navbar.Collapse>
        :

        <Navbar.Collapse>
          <Navbar.Link href=""><Link to="/login">Ingresar</Link></Navbar.Link>
        </Navbar.Collapse>}
      </div>

      <Navbar.Collapse>
        <Navbar.Link href=""><Link to="/">Inicio</Link></Navbar.Link>
        <Navbar.Link href="#"><Link to="/profile">Mi cuenta</Link></Navbar.Link>
        {haveRol ? <Navbar.Link href="#"><Link to="/administration">Administration</Link></Navbar.Link> : ''}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nav;
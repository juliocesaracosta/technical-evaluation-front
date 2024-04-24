import React, { useState, useEffect } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { HiHome } from "react-icons/hi";
import { Button } from "flowbite-react";


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
        setRol([2,3].includes(user.rol.id) ?
         true: false)
    }
  }, [user]);

  const logOut = () => {
  }

  return (
    <Navbar fluid className='nav-important'>
      <Navbar.Collapse>
        <Navbar.Link href="">
          <Link to="/">
            <div className="flex flex-wrap gap-2">
              <Button>
              <HiHome className="h-6 w-6"/>
              </Button>
            </div>
          </Link>
        </Navbar.Link>
      </Navbar.Collapse>
      <div>
        <Dropdown
          arrowIcon={true}
          label={
            "Selecciona lo que veras hoy"
          }
        >
          <Dropdown.Item>Videos</Dropdown.Item>
          <Dropdown.Item>Imagenes</Dropdown.Item>
          <Dropdown.Item>Contenido</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <div className="flex md:order-2">
        { user ?
          <Navbar.Collapse>
            <Navbar.Link href="" className="text-red-600"><Link to="">Bienvenido {user.name}</Link></Navbar.Link>
            <Navbar.Link href=""><Link to="/login" onClick={logOut}>Cerrar Sesion</Link></Navbar.Link>
          </Navbar.Collapse>
        : 
          <div>
            <Navbar.Collapse>
              <Navbar.Link href=""><Link to="/register">Registrarse</Link></Navbar.Link>
              <Navbar.Link href=""><Link to="/login">Ingresar</Link></Navbar.Link>
            </Navbar.Collapse>
          </div>
        }
      </div>
    </Navbar>
  );
}

export default Nav;
import React, { useState, useEffect } from 'react';
import { Sidebar, Button } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Side(props) {

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
        setRol([2,3].includes(user.rol.id) ?
         true: false)
    }
  }, [user]);

  return (
    <div>
      {
        !haveRol ? '' :
        <div>
          <Sidebar aria-label="Default sidebar example">
            <Sidebar.Items>
                <Sidebar.ItemGroup>
                <Sidebar.Item icon={HiChartPie}>
                  <Link to="/administration/themes">Themes</Link>
                </Sidebar.Item>
                <Sidebar.Item icon={HiViewBoards}>
                    Categories
                </Sidebar.Item>
                <Sidebar.Item icon={HiUser}>
                    Users
                </Sidebar.Item>
                </Sidebar.ItemGroup>
            </Sidebar.Items>
          </Sidebar>
        </div>
      }
    </div>
  );
}

export default Side;
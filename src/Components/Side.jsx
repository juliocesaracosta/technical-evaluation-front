import React from 'react';
import { Sidebar, Button } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import { Link } from 'react-router-dom';

function Side(props) {
  return (
    <div>
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            <Sidebar.Item href="" icon={HiChartPie}>
              <Link to="/administration/themes">Tematicas</Link>
            </Sidebar.Item>
            <Sidebar.Item href="" icon={HiViewBoards}>
                Categorías
            </Sidebar.Item>
            <Sidebar.Item href="" icon={HiUser}>
                Usuarios
            </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default Side;
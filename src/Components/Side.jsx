import React from 'react';
import { Sidebar, Button } from "flowbite-react";
import { HiArrowSmRight, HiChartPie, HiInbox, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";

function Side(props) {
  return (
    <div>
      <Sidebar aria-label="Default sidebar example">
        <Sidebar.Items>
            <Sidebar.ItemGroup>
            <Sidebar.Item href="#" icon={HiChartPie}>
                Themes
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiViewBoards}>
                Categories
            </Sidebar.Item>
            <Sidebar.Item href="#" icon={HiUser}>
                Users
            </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar.Items>
      </Sidebar>
    </div>
  );
}

export default Side;
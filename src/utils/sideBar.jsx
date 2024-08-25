import { useState } from 'react';
import {
  HomeIcon,
  UserIcon,
  CogIcon,
  CalendarIcon,
  LogoutIcon,
  MenuIcon,
} from '@heroicons/react/outline';
import '../styles/sideBar.css';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`  bg-white bg-opacity-50 h-[93.67vh] rounded-lg m-4 ${
        isOpen ? 'w-[30.67vh]' : 'w-16 '
      } transition-width duration-300 ${
        isOpen ? 'block' : 'hidden'
      } md:block fixed md:static z-20`}
      id='dash-menu'
    >
      <div className="flex items-center justify-between rounded-t-lg p-2 bg-green-900" id='menu-top'>
        {isOpen && <h2 className="text-white ml-2 text-lg">Doeet.</h2>}
        <button
          onClick={toggleSidebar}
          className="bg-transparent border-none outline-none"
          style={{ outline: 'none' }}
        >
          <MenuIcon className="menu-icon h-4 cursor-pointer outline-none border-none" />
        </button>
      </div>
      <nav className="flex flex-col p-4 space-y-4">
        <a
          href="#"
          className="flex items-center space-x-3 text-green-800"
          style={{ marginTop: '3rem' }}
          id="menubar"
        >
          <HomeIcon className="h-6 w-6 text-green-800" />
          {isOpen && <span>Home</span>}
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 text-green-800"
          style={{ marginTop: '1rem' }}
          id="menubar"
        >
          <UserIcon className="h-6 w-6 text-green-800" />
          {isOpen && <span>Profile</span>}
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 text-green-800"
          style={{ marginTop: '1rem' }}
          id="menubar"
        >
          <CogIcon className="h-6 w-6 text-green-800" />
          {isOpen && <span>Settings</span>}
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 text-green-800"
          style={{ marginTop: 'rem' }}
          id="menubar"
        >
          <CalendarIcon className="h-6 w-6 text-green-800" />
          {isOpen && <span>Schedule</span>}
        </a>
        <a
          href="#"
          className="flex items-center space-x-3 text-red-500"
          id="menubar"
        >
          <LogoutIcon className="h-6 w-6  text-red-500" />
          {isOpen && <span>Log Out</span>}
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;

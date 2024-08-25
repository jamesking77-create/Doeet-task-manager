import { BellIcon, SearchIcon, MenuIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import '../styles/topnav.css'

const TopNav = ({ toggleSidebar }) => {
  return (
    <div className="bg-white mt-4 mr-4 bg-opacity-80 rounded-lg shadow-md p-4 flex justify-between items-center"id='topnavv'>
      <div className="flex items-center">
        <button
          className="md:hidden mr-2" 
          id='menubutton'
          onClick={toggleSidebar}
          
        >
          <MenuIcon className="h-6 w-6 text-green-900 " />
        </button>
        <SearchIcon className="h-6 w-8 text-green-900" id='search icon' />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 p-2 w-94 bg-white bg-opacity-60 rounded-md focus:outline-none"
          id='searchspace'
        />
      </div>
      <div className="flex items-center space-x-4">
        <BellIcon className="h-6 w-6 text-green-900" />
        <div className="w-10 h-10 bg-gray-300 rounded-full"></div> {/* Placeholder for profile picture */}
      </div>
    </div>
  );
};

export default TopNav;

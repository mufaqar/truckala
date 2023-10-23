"use client"
import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img src="logo.svg" alt="Logo" className="w-[160px]" />
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-blue-300">Products</a>
          <a href="#" className="text-white hover:text-blue-300">Industries</a>
          <a href="#" className="text-white hover:text-blue-300">Load Market</a>
          <a href="#" className="text-white hover:text-blue-300">About</a>
          <button className="bg-white text-blue-800 px-6 py-1">Sign up</button>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden  w-full">
          <a href="#" className="block text-white py-2 hover:bg-blue-600">Products</a>
          <a href="#" className="block text-white py-2 hover:bg-blue-600">Industries</a>
          <a href="#" className="block text-white py-2 hover:bg-blue-600">Load Market</a>
          <a href="#" className="block text-white py-2 hover:bg-blue-600">About</a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

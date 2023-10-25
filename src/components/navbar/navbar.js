"use client"
import Image from 'next/image';
import Link from 'next/link';
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
          <Link href="/">
            <Image src="logo.svg" alt="Logo" width={240} height={50} />
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#products" className="text-white hover:text-blue-300">Products</Link>
          <Link href="#industries" className="text-white hover:text-blue-300">Industries</Link>
          <Link href="/load-market" className="text-white hover:text-blue-300">Load Market</Link>
          <Link href="#company" className="text-white hover:text-blue-300">About</Link>
          <Link href="/contact-us" className="text-base font-semibold  bg-white text-[#1D36E4] px-6 py-3 rounded-[3px]">
          Get In Touch
          </Link>
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
        <div className="md:hidden w-full absolute top-28 left-0 right-0 bg-[#1D36E4] py-10 px-4">
          <Link href="#products" className="block text-white py-2 hover:opacity-70">Products</Link>
          <Link href="#industries" className="block text-white py-2 hover:opacity-70">Industries</Link>
          <Link href="load-market" className="block text-white py-2 hover:opacity-70">Load Market</Link>
          <Link href="#company" className="block text-white py-2 hover:opacity-70">About</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

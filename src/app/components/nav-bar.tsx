// components/NavBar.tsx

import React, { useState } from 'react';
import Link from 'next/link';

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-white p-4 fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-end items-center">
        {/* Logo or title can go here */}
        {/* <div className="text-lg font-bold">
          <Link href="/">Logo</Link>
        </div> */}

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="hover:text-violet-400">Home</Link>
          <Link href="/work" className="hover:text-violet-400">Work</Link>
          <Link href="/contact" className="hover:text-violet-400">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-16 right-0 bg-blue-500 text-white w-48 rounded-lg shadow-lg ${isOpen ? 'block' : 'hidden'}`}
        >
          <div className="p-4 space-y-2">
            <Link href="/" className="block hover:text-violet-400">Home</Link>
            <Link href="/work" className="block hover:text-violet-400">Work</Link>
            <Link href="/contact" className="block hover:text-violet-400">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

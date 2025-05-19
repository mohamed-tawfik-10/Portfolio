// components/Navbar.js
"use client"
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="flex justify-between items-center px-6 py-4">
        <div className="text-3xl font-bold">
          <span className="text-orange-500">Dev</span> Mohamed
        </div>

        {/* Toggle button for mobile */}
        <div className="md:hidden text-2xl cursor-pointer z-50" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex space-x-6 text-xl font-bold">
          <li><Link href="/" className="hover:text-orange-500 transition">HOME</Link></li>
          <li><Link href="/About" className="hover:text-orange-500 transition">ABOUT</Link></li>
          <li><Link href="/Projects" className="hover:text-orange-500 transition">PROJECTS</Link></li>
          <li><Link href="/Contact" className="hover:text-orange-500 transition">CONTACT</Link></li>
        </ul>
      </div>

      {/* Mobile sidebar menu with transparent background */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-black/80 backdrop-blur-sm transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <ul className="flex flex-col items-start p-6 space-y-6 text-xl font-bold">
          <li><Link href="/" onClick={toggleMenu} className="hover:text-orange-500">HOME</Link></li>
          <li><Link href="/About" onClick={toggleMenu} className="hover:text-orange-500">ABOUT</Link></li>
          <li><Link href="/Projects" onClick={toggleMenu} className="hover:text-orange-500">PROJECTS</Link></li>
          <li><Link href="/Contact" onClick={toggleMenu} className="hover:text-orange-500">CONTACT</Link></li>
        </ul>
      </div>
    </nav>
  );
}

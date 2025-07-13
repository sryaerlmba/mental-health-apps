"use client";

import { useState } from "react";
import Button from "./Button";
import { FaUser } from "react-icons/fa";
import { FaTimes, FaBars } from "react-icons/fa";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 fixed top-0 right-0 left-0 shadow-lg z-50">
      <div className="mx-auto container">
        <div className="flex justify-between xl:py-5 xl:px-20 px-5 py-4 items-center">
          <div>
            <h1 className="font-semibold text-gray-800 ">LOGO APPS</h1>
          </div>

          <div className="md:flex hidden">
            <ul className="flex gap-2 items-center">
              <li className="cursor-pointer hover:text-purple-800 text-purple-600 bg-white py-2 px-3 rounded-md  transition-colors duration-300">
                Beranda
              </li>
              <li className="cursor-pointer hover:text-purple-600 py-2 px-4 hover:rounded-md transition-colors duration-300 text-gray-800">
                Journaling
              </li>
              <li className="cursor-pointer hover:text-purple-600 py-2 px-4 hover:rounded-md transition-colors duration-300 text-gray-800">
                Mood
              </li>
              <li className="cursor-pointer hover:text-purple-600 py-2 px-4 hover:rounded-md transition-colors duration-300 text-gray-800">
                Ai Chat
              </li>
              <li className="cursor-pointer hover:text-purple-600 py-2 px-4 hover:rounded-md transition-colors duration-300 text-gray-800">
                Article
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li className="">
                <Button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition duration-300">
                  <p>Login</p>
                </Button>
              </li>
            </ul>
          </div>

          {/* Hamburger (Mobile Only) */}
          <div className="md:hidden text-gray-600 border border-gray-600 p-1 flex rounded-sm">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-5 py-4">
          <ul className="flex flex-col gap-3">
            <li className="hover:bg-purple-100 p-2 rounded-md">Features</li>
            <li className="hover:bg-purple-100 p-2 rounded-md">Journaling</li>
            <li className="hover:bg-purple-100 p-2 rounded-md">Articles</li>
            <li>
              <Button className="bg-purple-200 w-full text-gray-800 flex items-center justify-center shadow-xl">
                <FaUser className="me-2" />
                Login
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

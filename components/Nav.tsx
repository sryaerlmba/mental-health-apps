  "use client";
  import logo from "../public/img/logo.png";

  import { useEffect, useRef, useState } from "react";
  import Button from "./Button";
  import { FaTimes, FaBars } from "react-icons/fa";
  import Link from "next/link";
  import Image from "next/image";

  export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }

      if (isOpen) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isOpen]);
    

    return (
      <nav className="w-full bg-gradient-to-r from-blue-100 via-purple-100 to-green-100 fixed top-0 right-0 left-0 shadow-lg z-50">
        <div className="mx-auto container">
          <div className="flex justify-between xl:py-5 xl:px-20 px-5 py-4 items-center">
            <div>
              <Link href="/">
                <Image
                  src={logo}
                  alt="InnerCare Ai Logo"
                  width={100}
                  height={0}
                />
              </Link>
            </div>

            <div className="md:flex hidden">
              <ul className="flex gap-2 items-center">
                <li className="cursor-pointer hover:text-purple-800 text-purple-600 bg-white py-2 px-3 rounded-md  transition-colors duration-300">
                  <Link href="/">Beranda</Link>
                </li>
                <li className="cursor-pointer hover:text-purple-600 py-2 px-4 hover:rounded-md transition-colors duration-300 text-gray-800">
                  <Link href="/jurnaling">Journaling</Link>
                </li>
                <li className="cursor-pointer hover:text-purple-600 py-2 px-4 hover:rounded-md transition-colors duration-300 text-gray-800">
                  <Link href="/tracking-mood">Mood</Link>
                </li>
                <li className="cursor-pointer hover:text-purple-600 py-2 px-4 hover:rounded-md transition-colors duration-300 text-gray-800">
                  <Link href="/ai-chat">Ai Chat</Link>
                </li>
                <li className="cursor-pointer hover:text-purple-600 py-2 px-4 hover:rounded-md transition-colors duration-300 text-gray-800">
                  <Link href="/artikel">Article</Link>
                </li>
              </ul>
            </div>

            <div className="md:flex hidden">
              <ul>
                <li className="">
                  <Link href="/login">
                    <Button className="bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition duration-300">
                      <p>Login</p>
                    </Button>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Hamburger (Mobile Only) */}
            <div className="md:hidden text-purple-300 border border-purple-300 p-1 flex rounded-sm">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div
            className="md:hidden bg-white border-t border-gray-200 px-5 py-4"
            ref={navRef}
          >
            <ul className="flex flex-col gap-3">
              <li className="cursor-pointer hover:text-purple-800 text-purple-600 bg-white py-2 px-3 rounded-md  transition-colors duration-300">
                <Link href="/">Beranda</Link>
              </li>
              <li className="cursor-pointer hover:text-purple-600 py-2 px-4 hover:rounded-md transition-colors duration-300 text-gray-800">
                <Link href="/jurnaling">Journaling</Link>
              </li>
              <li className="cursor-pointer hover:text-purple-600 py-2 px-4 hover:rounded-md transition-colors duration-300 text-gray-800">
                <Link href="/tracking-mood">Mood</Link>
              </li>
              <li className="cursor-pointer hover:text-purple-600 py-2 px-4 hover:rounded-md transition-colors duration-300 text-gray-800">
                <Link href="/ai-chat">Ai Chat</Link>
              </li>
              <li className="cursor-pointer hover:text-purple-600 py-2 px-4 hover:rounded-md transition-colors duration-300 text-gray-800">
                <Link href="/artikel">Article</Link>
              </li>

              <li>
                <Link href="/login">
                  <Button className="w-full bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:opacity-90 transition duration-300">
                    <p>Login</p>
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    );
  }

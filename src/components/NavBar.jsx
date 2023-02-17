import { useState, useEffect } from "react";
import { logo, close, open } from "../imageList";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <nav className="flex max-w-6xl items-center justify-between text-lg font-bold pb-6 md:p-0">
        <div className="flex items-center flex-shrink-0">
          <a href="#">
            <img className="w-16" src={logo} alt="Brand Logo" />
          </a>
        </div>

        {/* DESKTOP NAV */}
        <div
          className={`hidden md:flex md:items-center w-full text-neutral-blue-300 md:w-auto `}
        >
          <div className="text-sm">
            <a href="#" className="block mt-4 md:inline md:mt-0 mr-6">
              Home
            </a>

            <a href="#" className="block mt-4 md:inline md:mt-0 mr-6">
              New
            </a>

            <a href="#" className="block mt-4 md:inline md:mt-0 mr-6">
              Popular
            </a>

            <a href="#" className="block mt-4 md:inline md:mt-0 mr-6">
              Trending
            </a>

            <a href="#" className="block mt-4 md:inline md:mt-0">
              Categories
            </a>
          </div>
        </div>

        {/* MOBILE NAV */}
        <div className="block md:hidden">
          <button
            className={`flex items-center fixed top-7 right-0 z-50 py-2 ${
              isOpen ? "px-6" : "px-4"
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            <img
              src={isOpen ? close : open}
              alt="Toggle menu"
              className={`${isOpen ? "w-8" : "w-10"}`}
            />
          </button>
        </div>

        {/* side menu starts here */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-off-white fixed top-0 right-0 h-screen w-2/3 z-40`}
        >
          <div className="mt-36 pl-6 text-neutral-blue-700 space-y-6">
            <a href="#" className="block">
              Home
            </a>
            <a href="#" className="block">
              New
            </a>
            <a href="#" className="block">
              Popular
            </a>
            <a href="#" className="block">
              Trending
            </a>
            <a href="#" className="block ">
              Categories
            </a>
          </div>
          <div className="w-1/3 h-screen bg-neutral-blue-700/50 fixed top-0 right-0 inset-y-0 left-0 "></div>
        </div>
      </nav>
    </>
  );
}

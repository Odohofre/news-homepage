import { useState, useEffect } from "react";
import { logo, close, open } from "../imageList";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".side-menu")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <nav className="flex items-center justify-between pb-6 md:p-0">
        <div className="flex items-center flex-shrink-0">
          <a href="#">
            <img className="w-16" src={logo} alt="Brand Logo" />
          </a>
        </div>

        {/* DESKTOP NAV */}
        <div className={`${isOpen ? "block" : "hidden"} hidden md:flex md:items-center w-full text-neutral-blue-300 md:w-auto `}>
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
            className="flex items-center px-3 py-2"
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
          } fixed top-0 right-0 h-full w-64 z-40 side-menu`}
        >
          <div className="p-4 text-neutral-blue-700 space-y-6">
            <a href="#" className="block mr-6">
              Home
            </a>
            <a href="#" className="block mr-6">
              New
            </a>
            <a href="#" className="block mr-6">
              Popular
            </a>
            <a href="#" className="block mr-6">
              Trending
            </a>
            <a href="#" className="block ">
              Categories
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

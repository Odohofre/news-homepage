import { useState, useEffect, useRef, Fragment } from "react";
import { logo, close, open } from "../imageList";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  const menuRef = useRef();

  const handleLinkClick = () => {
    setOpen(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      handleLinkClick();
    }
  };

  useEffect(() => {
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  return (
    <header className="col-span-3 row-span-1">
      <nav className="flex md:w-full items-center justify-between text-lg font-bold pb-6 md:p-0">
        <div className="flex items-center flex-shrink-0">
          <a href="#">
            <img className="w-16" src={logo} alt="Brand Logo" />
          </a>
        </div>

        {/* DESKTOP NAV */}
        <div
          className={`hidden md:flex md:items-center md:justify-between w-full text-neutral-blue-300 md:w-auto `}
        >
          <div className="text-sm space-x-8">
            <a
              href="#"
              className="block mt-4 md:inline md:mt-0 hover:text-primary-soft-red"
            >
              Home
            </a>

            <a
              href="#"
              className="block mt-4 md:inline md:mt-0 hover:text-primary-soft-red"
            >
              New
            </a>

            <a
              href="#"
              className="block mt-4 md:inline md:mt-0 hover:text-primary-soft-red"
            >
              Popular
            </a>

            <a
              href="#"
              className="block mt-4 md:inline md:mt-0 hover:text-primary-soft-red"
            >
              Trending
            </a>

            <a
              href="#"
              className="block mt-4 md:inline md:mt-0 hover:text-primary-soft-red"
            >
              Categories
            </a>
          </div>
        </div>

        <div className="block md:hidden">
          <button
            className={`flex items-center absolute top-7 right-0 z-50 py-2 ${
              isOpen ? "px-6" : "px-4"
            }`}
            onClick={() => setOpen(!isOpen)}
          >
            <img
              src={isOpen ? close : open}
              ref={menuRef}
              alt="Toggle menu"
              className={`${isOpen ? "w-8" : "w-10"}`}
            />
          </button>
        </div>

        {/* MOBILE NAV */}
        {/* side menu starts here */}

        <div
          className={`${
            isOpen ? "block" : "hidden"
          } bg-off-white fixed top-0 right-0 h-screen w-2/3 z-40`}
        >
          <div className="mt-36 pl-6 text-neutral-blue-700 space-y-6">
            <a href="#" className="block" onClick={handleLinkClick}>
              Home
            </a>
            <a href="#" className="block" onClick={handleLinkClick}>
              New
            </a>
            <a href="#" className="block" onClick={handleLinkClick}>
              Popular
            </a>
            <a href="#" className="block" onClick={handleLinkClick}>
              Trending
            </a>
            <a href="#" className="block " onClick={handleLinkClick}>
              Categories
            </a>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full h-screen bg-neutral-blue-700/50 fixed top-0 right-0 inset-y-0 left-0`}
        ></div>
      </nav>
    </header>
  );
}

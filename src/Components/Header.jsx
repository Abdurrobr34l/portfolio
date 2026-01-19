import React, { useState, useEffect } from "react";
import Container from "./Container";
import logo from "../assets/logo.png";
import { Link } from "react-router";

const Header = ({ darkMode, setDarkMode }) => {
  const [activeLink, setActiveLink] = useState(""); // Track clicked link
  // const [darkMode, setDarkMode] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const navigationLinks = [
    { id: 1, path: "#about", name: "About Me" },
    { id: 2, path: "#skills", name: "Skills" },
    { id: 3, path: "#projects", name: "Projects" },
    { id: 4, path: "#contact", name: "Contact Me" },
  ];

  // Sticky navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setIsSticky(true);
      else setIsSticky(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Dark/light theme toggle
  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute("data-theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <header
     
      className={`pt-6 transition-all duration-500 ease-linear relative z-50 ${
        isSticky
          ? "sticky top-0 py-2! shadow-md bg-base-100/20! dark:bg-base-100 backdrop-blur-xl"
          : ""
      }`}
    >
      <Container>
        <div data-aos="fade-up" className="navbar p-0">
          {/* Dropdown Menu & Logo */}
          <div className="navbar-start flex items-center gap-4">
            {/* Logo/Home */}
            <a href="/" onClick={() => setActiveLink("")}>
              <img
                src={logo}
                alt="It is the author image"
                className="size-14 rounded-full lg:size-16"
              />
            </a>

            {/* Mobile Dropdown */}
            <div className="dropdown rounded-box">
              <div tabIndex={0} className="btn btn-ghost lg:hidden ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>

              <ul
                tabIndex={-1}
                className="menu menu-sm dropdown-content bg-base-100! rounded-box z-40! mt-5 w-52 p-2 shadow outline-2 outline-indigo-800"
              >
                {navigationLinks.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.path}
                      onClick={() => setActiveLink(link.path)}
                      className={`relative block px-3 py-2 transition-all duration-300
      ${activeLink === link.path ? "text-white" : "text-base-content/70"}`}
                    >
                      {link.name}
                      <span
                        className={`absolute left-0 bottom-0 h-0.5 bg-white transition-all duration-300
        ${activeLink === link.path ? "w-full" : "w-0 hover:w-full"}`}
                      ></span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Menus */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-10">
              {navigationLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.path}
                    onClick={() => setActiveLink(link.path)}
                    className={`relative px-0 py-2 text-md font-bold transition-all duration-300 hover:bg-transparent
                  ${
                    activeLink === link.path
                      ? "text-primary"
                      : "text-white hover:text-white"
                  }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-primary transition-all duration-300
                    ${
                      activeLink === link.path
                        ? "w-full bg-primary"
                        : "w-0 hover:w-full bg-primary"
                    }`}
                    ></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Theme Toggler */}
          <div className="navbar-end gap-5">
            <label className="swap swap-rotate">
              {/* hidden checkbox */}
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />

              {/* Sun Icon */}
              <svg
                className="swap-off h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* Moon Icon */}
              <svg
                className="swap-on h-6 w-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>

            {/* <button className="common-btn resume-btn">Resume</button> */}
            <Link to={"https://drive.google.com/file/d/17s7ITyvCnnofVp-S8kXOA5X5cPEdn8Zg/view"} target="_blank" className="common-btn resume-btn">Resume</Link>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

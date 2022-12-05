import React from "react";
import logo from "../../assets/img/landingPage/Logo142.png";

import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation(); 
  return (
    <div className="bg-transparent bg-bgtertiary">
    <nav className="lg:bg-white lg:w-screen lg:h-14 shadow-sm lg:px-16 lg:py-3 flex justify-items-center items-center  w-full border-none">
      <img
        src={logo}
        alt="logo"
        className="lg:h-10 lg:pr-3 h-10 pr-4 pl-2 mt-2"
      />
      <h1 className="font-poppins font-medium text-sm lg:text-xl mt-2 mb-2">
        <Link to="/">Healthcare Management System</Link>
      </h1>
      <ul className="flex ml-auto lg:w-60 justify-evenly  font-lato font-normal w-64 ">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About us</Link>
        </li>
        <li>
          <Link to="/contact">Contact us</Link>
        </li>
      </ul>

      <button className="bg-bgtertiary lg:py-2 lg:px-3 rounded font-normal font-poppins shadow-sm hover:bg-bgsecondary py-1 px-2 mr-2">
        {location.pathname === "/register" ? (
          <Link to="/">Login</Link>
        ) : (
          <Link to="/register">Register</Link>
        )}
      </button>
    </nav>
    </div>
  );
}

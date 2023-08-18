import React, { useState } from "react";
import { Link } from "react-scroll";
import { v4 as uuid } from "uuid";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const links = [
  {
    id: uuid(),
    link: "home",
  },
  {
    id: uuid(),
    link: "about",
  },
  {
    id: uuid(),
    link: "portfolio",
  },
  {
    id: uuid(),
    link: "technologies",
  },
  {
    id: uuid(),
    link: "blogs",
  },
  {
    id: uuid(),
    link: "contact",
  },
];
export const Navbar = () => {
  const [nav, setNav] = useState(true);
  return (
    <div className="z-[9999] flex justify-between items-center w-full h-20 fixed px-4 bg-primaryMobile text md:bg-primaryDesktopNavbar text-textPrimaryMobile md:text-textPrimaryDesktop ">
      <div className="font-heading text-3xl md:text-5xl ">
        <h1>Nikhil</h1>
      </div>
      <ul className="hidden md:flex md:text-xl">
        {links.map(({ id, link }) => {
          return (
            <li key={id} className="px-5 cursor-pointer uppercase font-bolder ">
              <Link to={link} smooth="true" duration={800}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>

      <div
        className="cursor-pointer text-textPrimaryMobile  z-[100] md:hidden"
        onClick={() => setNav(!nav)}
      >
        {nav ? <FaBars size={25} /> : <FaTimes size={25} />}
      </div>

      {!nav && (
        <ul className="bg-transparent backdrop-blur-xl   text-textPrimaryMobile  flex flex-col justify-center absolute top-0 left-0 w-full h-screen">
          {links.map(({ id, link }) => {
            return (
              <li
                key={id}
                className="py-5 cursor-pointer capitalize text-2xl tracking-wider   "
              >
                <Link
                  to={link}
                  smooth="true"
                  duration={500}
                  onClick={() => setNav(!nav)}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

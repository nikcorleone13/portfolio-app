import React from "react";
import { v4 as uuid } from "uuid";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { SiSolidity } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiNginx, SiJest } from "react-icons/si";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

// tech array
const tech = [
  {
    id: uuid(),
    src: FaHtml5,
    title: "HTML",
    color: "text-htmlOrange",
    style: "shadow-orange-500",
  },
  {
    id: uuid(),
    src: FaCss3Alt,
    title: "CSS",
    color: "text-cssBlue",
    style: "shadow-blue-500",
  },
  {
    id: uuid(),
    src: IoLogoJavascript,
    title: "JavaScript",
    color: "text-jsYellow",
    style: "shadow-yellow-500",
  },
  {
    id: uuid(),
    src: FaReact,
    title: "React JS",
    color: "text-reactBlue",
    style: "shadow-cyan-500",
  },

  {
    id: uuid(),
    src: SiTailwindcss,
    title: "Tailwind CSS",
    color: "text-tailwindBlue",
    style: "shadow-blue-400",
  },
  {
    id: uuid(),
    src: FaNodeJs,
    title: "Node JS",
    color: "text-nodeGreen",
    style: "shadow-lime-600",
  },
  {
    id: uuid(),
    src: SiMui,
    title: "Material UI",
    color: "text-muiBlue",
    style: "shadow-blue-500",
  },

  {
    id: uuid(),
    src: SiMongodb,
    title: "Mongo DB",
    color: "text-mongoGreen",
    style: "shadow-green-500",
  },
  {
    id: uuid(),
    src: SiJest,
    title: "Jest",
    color: "text-jestPink",
    style: "shadow-pink-900",
  },
  {
    id: uuid(),
    src: SiSolidity,
    title: "Solidity",
    color: "text-whitesmoke",
    style: "shadow-slate-600",
  },
  {
    id: uuid(),
    src: SiPostman,
    title: "Postman",
    color: "text-postmanOrange",
    style: "shadow-amber-600",
  },
  {
    id: uuid(),
    src: SiNginx,
    title: "Nginx",
    color: "text-nginxGreen",
    style: "shadow-green-700",
  },
];
function Technologies() {
  return (
    <div
      name="technologies"
      className="w-full h-full pt-20 bg-primaryMobile md:bg-gradient-to-b md:from-primaryDesktop1  md:to-primaryDesktopNavbar  text-textPrimaryMobile  md:text-textPrimaryDesktop  "
    >
      <div className="bg-primaryMobile md:bg-gradient-to-b md:from-primaryDesktop1  md:to-primaryDesktopNavbar  text-textPrimaryMobile  md:text-textPrimaryDesktop  max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl md:text-5xl font-extrabold p-2 inline  border-b-4 border-gray-500  md:border-textPrimaryDesktopHover ">
            Technologies
          </p>
          <p
            data-aos="fade-in"
            data-aos-duration="2500"
            className="py-8 md:py-12 text-l md:text-xl"
          >
            These are some of the technologies that I have worked on previosly.
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="2500"
          className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
        >
          {tech.map(({ id, src: Icon, title, color, style }) => {
            return (
              <div
                key={id}
                className={` flex flex-col justify-center items-center shadow-md md:hover:scale-105 md:hover:bg-primaryDesktop2  duration-300 py-2 rounded-lg ${style}  `}
              >
                <Icon size={50} className={`${color}`} />
                <p className="py-5">{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Technologies;

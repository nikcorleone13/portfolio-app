import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";
import { FaTwitter } from "react-icons/fa";

import { v4 as uuid } from "uuid";

const links = [
  {
    id: uuid(),
    child: (
      <>
        LinkedIn
        <FaLinkedin size={30} />
      </>
    ),
    href: "https://www.linkedin.com/in/nikhil-kumar-4b484b198",
    style: "rounded-tr-md",
  },
  {
    id: uuid(),
    child: (
      <>
        Github
        <FaGithub size={30} />
      </>
    ),
    href: "https://github.com/nikcorleone13",
    style: "rounded-tr-md",
  },
  {
    id: uuid(),
    child: (
      <>
        Hashnode
        <SiHashnode size={30} />
      </>
    ),
    href: "https://hashnode.com/@kinikhil",
    style: "rounded-tr-md",
  },
  // {
  //   id: uuid(),
  //   child: (
  //     <>
  //       Twitter
  //       <FaTwitter size={30} />
  //     </>
  //   ),
  //   href: "https://twitter.com/kinikhil_k",
  //   style: "rounded-tr-md",
  // },
  {
    id: uuid(),
    child: (
      <>
        Mail
        <HiOutlineMail size={30} />
      </>
    ),
    href: "mailto:nikhilkumarsingh166@gmail.com",
    style: "rounded-tr-md",
  },
  {
    id: uuid(),
    child: (
      <>
        Resume
        <BsFillPersonLinesFill size={30} />
      </>
    ),
    href: "/resume.Nikhil_Kumar_CV.pdf",
    style: "rounded-br-md",
    download: true,
  },
];
function SocialLinks() {
  return (
    <div
      className="hidden lg:flex flex-col top-[25%] left-0 fixed"
      data-aos="fade-right"
      data-aos-duration="1500"
    >
      <ul>
        {links.map(({ id, child, href, style, download }) => {
          return (
            <li
              key={id}
              className="flex justify-between items-center w-40 h-16 px-3 bg-zinc-900 text-textPrimaryDesktop ml-[-110px] hover:rounded-md duration-300 hover:ml-[-10px] text-lg"
            >
              <a
                className="flex justify-between items-center w-full "
                href={href}
                download={download}
                target="_blank"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SocialLinks;

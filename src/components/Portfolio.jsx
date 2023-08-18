import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import footwork from "../images/projects/footwork.png";
import mail from "../images/projects/mail.png";
import yoda from "../images/projects/yoda.png";
import footworkVideo from "../images/videos/footwork-video.mp4";
import mailVideo from "../images/videos/mail-app.mp4"

const works = [
  {
    id: uuid(),
    name: "Footwork E-Comm",
    link: "https://footwork.vercel.app/",
    source: "https://github.com/nikcorleone13/footwork-ecomm",
    pic: footwork,
    video: footworkVideo,
  },
  {
    id: uuid(),
    name: "Email App",
    link: "https://mymail-app.netlify.app/",
    source: "https://github.com/nikcorleone13/React-Mail-App",
    pic: mail,
    video: mailVideo,
  },
];
const Portfolio = () => {
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const handleMouseEnter = (id) => {
    setHoveredVideo(id);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };

  return (
    <div
      name="portfolio"
      className="pt-16  w-full h-full bg-primaryMobile md:bg-gradient-to-b md:from-primaryDesktopNavbar  md:to-primaryDesktop1  text-textPrimaryMobile  md:text-textPrimaryDesktop   "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl md:text-5xl font-extrabold inline border-b-4 border-gray-500  md:border-textPrimaryDesktopHover ">
            Portfolio
          </p>
          <p className="py-8 md:py-12 text-l  md:text-xl">
            Check out some of my projects that I have done
          </p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-2 gap-16 md:gap-12 px-12 md:px-16 sm:px-0"
          data-aos="fade-right"
          data-aos-duration="2500"
        >
          {works.map(({ id, name, link, source, pic, video }) => {
            return (
              <div
                key={id}
                className="flex flex-col items-center justify-between shadow-md  shadow-gray-600 rounded-md "
                onMouseEnter={() => handleMouseEnter(id)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="hidden md:block">
                  {hoveredVideo === id ? (
                    <video
                      className=" md:hover:scale-125  md:duration-200  md:ease-in-out"
                      loop
                      autoPlay
                      muted
                      playbackRate={2}
                    >
                      <source src={video} type="video/mp4" />
                    </video>
                  ) : (
                    <img
                      className="video-poster"
                      src={pic}
                      alt={`${name} Poster`}
                    />
                  )}
                </div>
                <img src={pic} className="rounded-t-md duration-200 md:hidden" />{" "}
                <p className=" font-semibold">{name}</p>
                <div className="h-[20%] mt-[-15px] flex items-center justify-evenly w-[100%]">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    <button className="text-yellow-400 md:text-base w-1/3 px-6 py-1 m-1 duration-200 md:hover:underline underline-offset-2">
                      Live
                    </button>
                  </a>
                  <a href={source} target="_blank" rel="noopener noreferrer">
                    <button className="text-yellow-400 md:text-base w-1/2 px-6 py-3 m-4 duration-200 text-lg md:hover:underline underline-offset-2">
                      Source
                    </button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

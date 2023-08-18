import React from "react";
import { Link } from "react-scroll";
import { MdKeyboardArrowRight } from "react-icons/md";
import "./Home.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Typed from "react-typed";
// ..
AOS.init();

export const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-primaryLight pt-16 md:py-0
    bg-primaryMobile md:bg-gradient-to-b from-primaryDesktopNavbar  to-primaryDesktop1  "
    >
      <div
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-evenly h-full px-4 md:flex-row"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <div className="flex flex-col justify-center h-full text-left pt-8 md:none">
          <h2 className="text-6xl sm:text-8xl font-bold text-textPrimaryMobile md:text-textPrimaryDesktop ">
            <span className=" bg-gradient-to-r from-blue-300 via-[#80a7f6] to-[rgb(255,143,148)] text-transparent bg-clip-text tracking-tight   ">
              I'm a Frontend Developer{" "}
            </span>
          </h2>
          <p className=" py-6 md:py-10 max-w-md text-textPrimaryMobile md:text-textPrimaryDesktop md:text-[19px] tracking-wider font-extralight ">
            with a bit of love for artistry as well. I try to bring the design
            to life and make it as mesmerizing as I can. I have experience in
            React, Node{" "}
            <Typed
              strings={["and much more"]}
              typeSpeed={120}
              backSpeed={150}
              loop
            />
          </p>

          <div data-aos="flip-up" data-aos-duration="2500">
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-4 py-3 md:my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500  cursor-pointer md:text-lg md:hover:bg-gradient-to-l"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="box w-[65%] h-[70%] md:max-w-[40%] md:h-[50%] mt-6 md:mt-0"></div>
      </div>
    </div>
  );
};

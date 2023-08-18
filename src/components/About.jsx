import React from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init({ once: true });

function About() {
  return (
    <div
      name="about"
      className="md:bg-red-400 w-full h-full  bg-primaryMobile md:bg-gradient-to-b md:from-primaryDesktop1  md:to-primaryDesktopNavbar  text-textPrimaryMobile  md:text-textPrimaryDesktop pt-16  "
    >
      <div className="max-w-screen-lg  mx-auto flex flex-col justify-center w-[90%] pt-16 md:pt-24">
        <div className="pb-6 md:pb-12 ">
          <p className="text-4xl md:text-5xl font-extrabold inline border-b-4 border-gray-500  md:border-textPrimaryDesktopHover ">
            About
          </p>
        </div>

        <p
          className="text-left md:text-[20px] mt-5 tracking-wider font-light"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          I'm Nikhil, a frontend software engineer from Pune, India. I
          specialize in Node and React but always open to using the right
          technologies for each project. In my previous role at EarthiD Tech., I
          had the amazing opportunity to work on Web3 functionalities and
          authentication flows. It was an exciting experience to be at the
          forefront of cutting-edge technologies and contribute to the future of
          web development.
        </p>

        <br />

        <p
          className="text-left  md:text-[20px] my-6 tracking-wider font-light"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Outside of work, I find great joy in indulging in my passions for
          movies, books, and photography. Every Sunday, you can usually find me
          engrossed in captivating films or tinkering with React exploring the
          vast possibilities of web development.
        </p>
        <p
          className="text-left md:text-[20px] my-6 tracking-wider  font-light"
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          Currently, I am diving deep into advacned React and actively seeking
          new opportunities. If you come across any positions that align with my
          interests and skills,I would be thrilled to connect with you and delve
          deeper into the possibilities that lie ahead.
        </p>
      </div>
    </div>
  );
}

export default About;

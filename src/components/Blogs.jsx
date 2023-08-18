import React from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";

import ternary from "../images/ternary.png";
import arrayFunc from "../images/arrayFunc.png";
import { FaArrowRight } from "react-icons/fa";

const blogs = [
  {
    id: uuid(),
    title: "Using Ternary Operator",
    preview:
      "Discussed the one the most used conditional operators as far as JavaScript is concerned,ternary operator",
    image: ternary,
    address:
      "https://techxterized.hashnode.dev/ternary-operator-solutions-shortcut",
  },
  {
    id: uuid(),
    title: "Higher Order Array Methods",
    preview:
      "Explained map,filter and reduce methods and discussed their use-cases with examples.",
    image: arrayFunc,
    address: "https://techxterized.hashnode.dev/higher-order-array-methods",
  },
];

const Blogs = () => {
  return (
    <div
      name="blogs"
      className="h-full w-screen md:w-full flex justify-center bg-primaryMobile md:bg-gradient-to-b md:from-primaryDesktopNavbar  md:to-primaryDesktop1  text-textPrimaryMobile  md:text-textPrimaryDesktop   "
    >
      <div className="w-[90%] md:w-[60%] pt-16 ">
        <div className="pt-16">
          <p className="text-4xl md:text-5xl font-extrabold border-b-4 p-2 inline border-gray-500  md:border-textPrimaryDesktopHover ">
            Blogs
          </p>
          <p className="py-8 md:py-12 text-l  md:text-xl">
            I like to document my journey. Checkout my blogs which I write when
            I'm learning a new concept. I try to simplify it for other people to
            help them understand it quickly.
          </p>
        </div>

        <div className=" p-5 flex flex-col ">
          {blogs.map(({ index, id, title, preview, image, address }) => {
            return (
              <div
                key={id}
                className=" my-12 md:my-16 md:flex flex-row justify-evenly  border-b-2 md:border-b-0 md:border-r-4 md:border-textPrimaryDesktopHover md:hover:border-textPrimaryDesktop  "
              >
                <img
                  src={image}
                  className=" md:w-[50%] rounded-t-xl md:rounded-none md:rounded-l-xl"
                />
                <div className=" md:w-[30%] p-2 md:p-0 md:flex flex-col justify-evenly items-center rounded-b-xl md:rounded-none md:rounded-r-xl">
                  <p className="pt-4 text-xl md:text-3xl font-semibold">
                    {title}
                  </p>
                  <p className="text-md text-center pt-4 md:pt-4 md:text-[18px]">
                    {preview}
                  </p>
                  <Link
                    to={address}
                    target="_blank"
                    className="pt-4 md:pt-4 inline-flex md:text-lg md:text-textPrimaryDesktopHover   md:hover:text-textPrimaryDesktop"
                  >
                    Read More
                    <span className="ml-[3px] mt-[7px]">
                      <FaArrowRight size={12} className="md:h-4 md:w-6" />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blogs;

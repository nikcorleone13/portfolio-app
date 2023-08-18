import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen pt-20 bg-primaryMobile md:bg-gradient-to-b md:from-primaryDesktop1  md:to-primaryDesktopNavbar  text-textPrimaryMobile  md:text-textPrimaryDesktop  "
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl md:text-5xl font-extrabold p-2 inline  border-b-4 border-gray-500  md:border-textPrimaryDesktopHover ">
            Contact
          </p>
          <p className="py-8 md:py-12 text-l md:text-xl">
            Submit the form below to get in touch with me. I would love to hear
            your feedbacks and comments.
          </p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/1e2923ab-05bc-4ea7-9a4a-6157ffe26ca5"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 md:p-3 bg-transparent border-2 rounded-md text-textPrimaryMobile focus:outline-none md:border-2 md:rounded-md md:text-textPrimaryDesktop  md:border-textPrimaryDesktop md:focus:border-textPrimaryDesktopHover md:text-lg"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 md:p-3 bg-transparent border-2 rounded-md text-textPrimaryMobile focus:outline-none md:border-2 md:rounded-md md:text-textPrimaryDesktop  md:border-textPrimaryDesktop md:focus:border-textPrimaryDesktopHover md:text-lg"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="resize-none p-2 md:p-3 bg-transparent border-2 rounded-md text-textPrimaryMobile  focus:outline-none md:border-2 md:rounded-md md:text-textPrimaryDesktop  md:border-textPrimaryDesktop md:focus:border-textPrimaryDesktopHover md:text-lg "
            ></textarea>

            <button className="text-textPrimaryMobile bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300  md:bg-gradient-to-r md:from-[#10b981] md:to-[#1B9C85] cursor-pointer md:text-lg">
              Let's talk :)
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

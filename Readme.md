            // return (
            //   <div
            //     key={id}
            //     className=" my-6 md:my-12 md:flex flex-row justify-evenly md:hover:scale-105 ease-in-out duration-200"
            //   >
            //     <img
            //       src={image}
            //       className="md:w-[55%] rounded-t-xl md:rounded-none md:rounded-l-xl"
            //     />
            //     <div className=" md:w-[35%] p-2 md:p-0 md:flex flex-col justify-evenly items-center rounded-b-xl md:rounded-none md:rounded-r-xl">
            //       <p className="text-xl md:text-3xl font-semibold">{title}</p>
            //       <p className="text-md text-center pt-2 md:pt-4 md:text-[18px]">
            //         {preview}
            //       </p>
            //       <Link className="pt-2 md:pt-4 inline-flex md:text-lg hover:text-yellow-500 mdunderline ">
            //         Read More
            //         <span className="ml-[3px] mt-[7px]">
            //           <FaArrowRight size={12} className="md:h-4 md:w-6" />
            //         </span>
            //       </Link>
            //     </div>
            //   </div>
            // );



        <div className="p-5 flex flex-col">
          {blogs.map(({ id, title, preview, image, address }, index) => {
            console.log("index", index);
            return index % 2 === 0 ? (
              <div
                key={id}
                className="my-6 md:my-12 md:flex flex-row justify-evenly md:hover:scale-105 ease-in-out duration-200"
              >
                <div className="md:w-[35%] p-2 md:p-0 md:flex flex-col justify-evenly items-center rounded-b-xl md:rounded-none md:rounded-r-xl">
                  <p className="text-xl md:text-3xl font-semibold">{title}</p>
                  <p className="text-md text-center pt-2 md:pt-4 md:text-[18px]">
                    {preview}
                  </p>
                  <Link className="pt-2 md:pt-4 inline-flex md:text-lg hover:text-yellow-500 mdunderline">
                    Read More
                    <span className="ml-[3px] mt-[7px]">
                      <FaArrowRight size={12} className="md:h-4 md:w-6" />
                    </span>
                  </Link>
                </div>
                <img
                  src={image}
                  className="md:w-[55%] rounded-t-xl md:rounded-none md:rounded-l-xl"
                />
              </div>
            ) : (
              <div
                key={id}
                className="my-6 md:my-12 md:flex flex-row justify-evenly md:hover:scale-105 ease-in-out duration-200"
              >
                <img
                  src={image}
                  className="md:w-[55%] rounded-t-xl md:rounded-none md:rounded-l-xl"
                />
                <div className="md:w-[35%] p-2 md:p-0 md:flex flex-col justify-evenly items-center rounded-b-xl md:rounded-none md:rounded-r-xl">
                  <p className="text-xl md:text-3xl font-semibold">{title}</p>
                  <p className="text-md text-center pt-2 md:pt-4 md:text-[18px]">
                    {preview}
                  </p>
                  <Link className="pt-2 md:pt-4 inline-flex md:text-lg hover:text-yellow-500 md:underline">
                    Read More
                    <span className="ml-[3px] mt-[7px]">
                      <FaArrowRight size={12} className="md:h-4 md:w-6" />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>#   p o r t f o l i o - a p p  
 
import React from "react";

const Stats = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div className="flex flex-col lg:items-center lg:flex-row">
        <div className="flex items-center mb-6 lg:w-1/2 lg:mb-0">
          <div className="flex items-center justify-center w-16 h-16 mr-5 rounded-full bg-[#1b1b1b] sm:w-24 sm:h-24 xl:mr-10 xl:w-28 xl:h-28">
            <lord-icon
              src="https://cdn.lordicon.com/gqdnbnwt.json"
              trigger="loop"
              delay="300"
              colors="primary:#005eff,secondary:#FA7C0B"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
          </div>
          <h3 className="text-2xl leading-none sm:leading-none font-extrabold text-white sm:text-4xl xl:text-6xl">
            9 312 435
            <br />
            <span className=" text-[20px] m-0 bg-gradient-to-r from-[#9F8CED] from-1% via-[#FA7C0B] via-90% to-[#9DE8EE] to-9% text-transparent bg-clip-text">
              Posts Created
            </span>
          </h3>
        </div>
        <div className="lg:w-1/2">
          <p className="text-[#8a8a8a]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;

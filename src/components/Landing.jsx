import React, { useState } from "react";
import styles from "../styles/homebg.module.css";

const Landing = () => {
  return (
    <>
      <div
        className={`flex flex-col justify-center gap-2 bg-[#110F0F] items-center w-[100vw] h-[100vh]  overflow-hidden ${styles["bg-image"]} relative `}
      >
        <div className="absolute left-[-50px] bottom-[-15px] flex justify-center items-center">
          <div
            className={`w-64 h-64 bg-[#EF9364] rounded-full filter blur-[70px]`}
          ></div>
        </div>
        <div className="absolute right-[-50px] top-[-15px] flex justify-center items-center">
          <div
            className={`w-64 h-64 bg-[#8B7BCF] rounded-full filter blur-[70px]`}
          ></div>
        </div>
        <div className=" text-center sm:text-center w-[90%] font-semibold leading-[8vw] sm:leading-[90px] mt-[40px] text-[8vw] sm:text-[90px] text-[#fff] z-40 mb-[20px] sm:mb-[0px]">
          Create{" "}
          <span className="bg-gradient-to-r from-[#9F8CED] from-1% via-[#FA7C0B] via-90% to-[#9DE8EE] to-9% text-transparent bg-clip-text">
            Stunning{" "}
          </span>
          Tweets <br /> with gradients{" "}
        </div>
        <div className="flex justify-center items-center text-left whitespace-normal z-40">
          <p className="w-[90%] sm:w-[600px] text-[#ffffff] font-thin text-center  whitespace-normal p-2 text-[15px] sm:text-[18px]">
            Risus commodo id odio turpis pharetra elementum. Pulvinar porta
            porta feugiat scelerisque in elit. Morbi rhoncus, tellus, eros{" "}
          </p>
        </div>
        <div className=" flex justify-center sm:justify-start items-center mt-[25px] gap-[10px] sm:gap-8 z-40">
          <a
            href="#_"
            class="relative px-5 py-3 overflow-hidden font-medium text-black bg-[#FFA800] border border-[#FFA800] rounded-lg shadow-inner group"
          >
            <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
            <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
            <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
            <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
              Create Post
            </span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;

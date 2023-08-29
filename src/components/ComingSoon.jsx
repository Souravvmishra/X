import React from "react";
import styles from "../styles/homebg.module.css";

const ComingSoon = () => {
  return (
    <>
      <div
        className={`flex flex-col justify-center bg-[#110F0F] items-center w-[100vw] h-[100vh]  overflow-hidden ${styles["bg-image"]} relative p-[30px] sm:p-[50px]`}
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
        <div className=" z-40 ml-[30px] sm:ml-[50px] lg:ml-[150px] whitespace-normal w-auto sm:w-[500px] font-semibold leading-[90px] mt-[40px] text-[12vw] sm:text-[90px] text-[#fff]">
          <span className="bg-gradient-to-r from-[#9F8CED] from-1% via-[#FA7C0B] via-90% to-[#9DE8EE] to-9% text-transparent bg-clip-text">
            TwePic
          </span>{" "}
          Coming Soon ...{" "}
        </div>
      </div>
    </>
  );
};

export default ComingSoon;

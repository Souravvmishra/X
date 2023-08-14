import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.png";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav className="w-[100vw] h-[84px] fixed bg-[#26262693] backdrop-blur-md z-50 flex justify-between items-center overflow-hidden">
        <div className="flex justify-center items-center content-center w-[180px] ml-10">
          <img src={Logo} className=" object-contain w-10 " />{" "}
          <span className="text-lg text-white font-bold ml-2">
            FakeTweetGen
          </span>
        </div>
        <div className="sm:flex justify-center items-center hidden w-auto gap-7 mr-10">
          <Link
            href={"/"}
            className="text-[16px] font-medium text-white flex justify-center items-center gap-1"
          >
            Home
          </Link>
          <Link className="text-[16px] font-medium text-white" href={"/"}>
            Create
          </Link>
          <Link className="text-[16px] font-medium text-white" href={"/"}>
            About
          </Link>
          <button className="border-[#FFA800] border-[2px] text-[#FFA800] text-[16px] rounded-[100px] px-[16px] py-[10px]">
            Get Started
          </button>
        </div>
        <button
          className="flex sm:hidden flex-col mr-10"
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <div className={"relative group"}>
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all bg-slate-700 ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isActive && "translate-x-10"
                  }`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
                    isActive && "translate-x-10"
                  } delay-75`}
                ></div>
                <div
                  className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
                    isActive && "translate-x-10"
                  } delay-150`}
                ></div>

                <div
                  className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 ${
                    isActive ? "translate-x-0" : "-translate-x-10"
                  }  flex w-0 group-focus:w-12`}
                >
                  <div
                    className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${
                      isActive ? "rotate-45" : " rotate-0"
                    } delay-300`}
                  ></div>
                  <div
                    className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 ${
                      isActive ? "-rotate-45" : "-rotate-0"
                    }  delay-300 `}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </button>
      </nav>
      {isActive && (
        <div className="fixed bg-[#26262693] backdrop-blur-md left-0 top-[84px]  flex justify-center items-center flex-col  z-[2000] w-[100vw] h-[100vh] gap-10 ">
          <Link
            href={"/"}
            className="text-[20px] font-medium text-white flex justify-center items-center gap-1"
          >
            Home
          </Link>
          <Link className="text-[20px] font-medium text-white" href={"/"}>
            Create
          </Link>
          <Link className="text-[20px] font-medium text-white" href={"/"}>
            About
          </Link>
          <Link className="text-[20px] font-medium text-white" href={"/"}>
            Contact
          </Link>
          <button className="border-[#FFA800] border-[2px] text-[#FFA800] text-[20px] rounded-[100px] px-[16px] py-[10px]">
            Get Started
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;

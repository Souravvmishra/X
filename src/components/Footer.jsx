import React from "react";
import Logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <>
      <div className="w-[100vw] bg-black px-[40px] py-[40px] pb-0 flex flex-col justify-center items-center">
        <div className="w-[100%] flex-col-reverse sm:flex-row flex justify-between gap-[30px] sm:gap-[100px] lg:px-[100px]">
          <div className="flex justify-start items-start gap-[50px] flex-wrap">
            <div className="flex flex-col justify-center items-start gap-[10px]">
              <span className=" font-bold text-white">Links</span>
              <span className="text-[#999999]">About us</span>
              <span className="text-[#999999]">Team</span>
              <span className="text-[#999999]">Contact</span>
            </div>
            <div className="flex flex-col justify-center items-start gap-[10px]">
              <span className=" font-bold text-white">Services</span>
              <span className="text-[#999999]">Lorem</span>
              <span className="text-[#999999]">Lorem</span>
              <span className="text-[#999999]">Lorem</span>
              <span className="text-[#999999]">Lorem</span>
            </div>
            <div className="flex flex-col justify-center items-start gap-[10px]">
              <span className=" font-bold text-white">Resources</span>
              <span className="text-[#999999]">Lorem</span>
              <span className="text-[#999999]">Lorem</span>
              <span className="text-[#999999]">Lorem</span>
            </div>
            <div className="flex flex-col justify-center items-start gap-[10px]">
              <span className=" font-bold text-white">Follow us</span>
              <span className="text-[#999999]">Instagram</span>
              <span className="text-[#999999]">Telegram</span>
            </div>
          </div>
          <div className="sm:w-[300px] flex flex-col justify-start items-start gap-[20px]">
            <div className="flex justify-center items-center content-center w-[180px] ml-10">
              <img src={Logo} className=" object-contain w-10 " />
              <span className="text-lg text-white font-bold ml-2">
                FakeTweetGen
              </span>
            </div>
            <span className="text-[#999999]">Get latest updates</span>
            <input
              type="email"
              className="flex self-start rounded-[100px] py-[8px] px-[12px] sm:py-[12px] sm:px-[16px] bg-black border-[#fff] border-[1.5px] w-[100%]"
              placeholder="Email"
            />
          </div>
        </div>
        <div className="w-[100%] text-white bg-black p-[20px] flex justify-center items-center">
          © 2023 by FakeTweetGen
        </div>
      </div>
    </>
  );
};

export default Footer;

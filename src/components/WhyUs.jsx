import React from "react";
import whyus from "../assets/whyus.png";

const WhyUs = () => {
  return (
    <>
      <div className="flex w-[100vw] justify-evenly flex-col sm:flex-row items-center h-auto px-[15px] py-[40px] sm:px-[30px] sm:py-[80px] overflow-hidden bg-transparent">
        <div className="flex w-[100vw] sm:w-[40%] justify-center items-center overflow-hidden">
          <img src={whyus} className="object-cover" />
        </div>
        <div className="w-[80%] sm:w-[40%] flex flex-col justify-center items-start gap-[20px]">
          <h1 className="font-bold text-[36px] sm:text-[40px]">
            Why Choose Us
          </h1>
          <p className=" whitespace-normal text-[15px] sm:text-[18px]">
            Commodo diam vulputate dui proin quis enim nibh. Non integer ac
            libero facilisis hendrerit a at. Nisi sem ut sed sed faucibus at eu
            elit. Morbi aliquam porttitor mattis consequat neque, tellus
            blandit.
          </p>
          <button className="px-[14px] py-[8px] sm:px-[16px] sm:py-[8px] rounded-[100px] text-[#FFA800] border-[#FFA800] border-[1.5px]">
            Let’s connect
          </button>
        </div>
      </div>
    </>
  );
};

export default WhyUs;

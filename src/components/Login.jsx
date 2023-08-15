import React from "react";
import successfulAnimation from "../animation/successful.json";
import login from "../animation/login.json";
import Lottie from "lottie-react";

const Login = () => {
  return (
    <>
      <div class="flex h-screen w-screen flex-col items-center justify-center ">
        <div class="flex justify-center flex-col items-center ">
          <h1 class="text-4xl sm:text-6xl sm:leading-[5rem] font-bold  bg-gradient-to-r from-[#9F8CED] from-1% via-[#FA7C0B] via-90% to-[#9DE8EE] to-9% text-transparent bg-clip-text">
            Sign in{" "}
          </h1>
          <p class="text-gray-300 mt-2 text-center">
            Sign in with your Twitter account to get started
          </p>
        </div>
        <div className="w-[200px] sm:w-[400px] h-auto">
          <Lottie
            animationData={login}
            loop={true}
            autoplay={true}
            rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          />
        </div>
        <div class="group relative cursor-pointer border-2 border-[#FFA800] px-10 py-4 rounded-full transition ease-in-out duration-500 hover:border-[#00acee] hover:scale-110">
          <div class="uppercase text-2xl sm:text-4xl flex items-center relative">
            {"login with twitter".split("").map((letter, index) => (
              <div
                class="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0 text-[#FFA800]"
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                {letter !== " " ? letter : "\u00A0"}{" "}
                {/* Use &nbsp; for empty space */}
              </div>
            ))}
            <div class="uppercase text-2xl sm:text-4xl absolute bottom-0 left-0 flex items-center">
              {"login with twitter".split("").map((letter, index) => (
                <div
                  class="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100 text-[#00acee]"
                  style={{ transitionDelay: `${index * 20}ms` }}
                >
                  {letter !== " " ? letter : "\u00A0"}{" "}
                  {/* Use &nbsp; for empty space */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/*  <div className="absolute top-0 left-0 w-full h-full">
      <Lottie
          animationData={successfulAnimation}
          loop={false}
          autoplay={true}
          rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
          className="-translate-y-[30%]"
        />
      </div> */}
    </>
  );
};

export default Login;

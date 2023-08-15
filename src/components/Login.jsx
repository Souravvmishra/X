import React from "react";

const Login = () => {
  return (
    <>
      <div class="flex h-screen w-screen items-center justify-center">
        <div class="group relative cursor-pointer border border-gray-700 p-12 rounded-full transition ease-in-out duration-500 hover:border-gray-100 hover:scale-110">
          <div class="uppercase text-2xl sm:text-6xl flex items-center relative">
            {"login with twitter".split("").map((letter, index) => (
              <div
                class="origin-top transition-transform duration-300 ease-in-out group-hover:scale-y-0"
                style={{ transitionDelay: `${index * 20}ms` }}
              >
                {letter !== " " ? letter : "\u00A0"}{" "}
                {/* Use &nbsp; for empty space */}
              </div>
            ))}
            <div class="uppercase text-2xl sm:text-6xl absolute bottom-0 left-0 flex items-center">
              {"login with twitter".split("").map((letter, index) => (
                <div
                  class="origin-bottom transition-transform duration-300 ease-in-out scale-y-0 group-hover:scale-y-100"
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
    </>
  );
};

export default Login;

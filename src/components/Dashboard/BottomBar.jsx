import React, { useState } from "react";

const BottomBar = () => {
  const [isHover, setIsHover] = useState(false);
  const [showColorOptions, setShowColorOptions] = useState(false); // Track visibility of color options

  const handlePicker = () => {
    setIsHover(!isHover);
  };

  const handleColorOptionsMouseEnter = () => {
    setShowColorOptions(true);
  };

  const handleColorOptionsMouseLeave = () => {
    setShowColorOptions(false);
  };
  const containerStyle = {
    backgroundImage:
      "linear-gradient(310deg, rgb(214, 233, 255), rgb(214, 229, 255), rgb(209, 214, 255), rgb(221, 209, 255), rgb(243, 209, 255), rgb(255, 204, 245), rgb(255, 204, 223), rgb(255, 200, 199), rgb(255, 216, 199), rgb(255, 221, 199))",
    boxShadow:
      "rgba(255, 255, 255, 0.7) 0px 0px 0px 2px, rgba(0, 0, 0, 0.5) 0px 3px 6px",
  };
  return (
    <>
      <div className="fixed left-0 right-0 bottom-16 flex justify-center z-20 pointer-events-none">
        <div
          className="w-[45vw] h-[5rem] rounded-xl border-[1px] border-[#b3b3b33b] bg-gradient-to-r from-purple-900 to-teal-600 transition-colors flex justify-between dark:text-gray-150 py-0.5 pl-1 pr-0.5"
          style={{
            backgroundImage: "linear-gradient(300deg, #251d35, #14303d 80%)",
          }}
        >
          <div
            className={`pointer-events-auto m-1/8 inline-flex flex-col items-center justify-center rounded-md pt-1/4 pb-5/8 h-16 cursor-pointer select-none transition duration-150 relative ${
              showColorOptions && isHover ? "hovered" : ""
            }`}
            onMouseEnter={() => {
              handlePicker();
              handleColorOptionsMouseEnter();
            }}
            onMouseLeave={() => {
              handlePicker();
              handleColorOptionsMouseLeave();
            }}
          >
            <div
              className="rounded-full overflow-hidden w-6 h-6 my-0.5"
              style={containerStyle}
              onMouseEnter={handleColorOptionsMouseEnter}
              onMouseLeave={handleColorOptionsMouseLeave}
            ></div>
            <p className="pt-1.5 transition-colors duration-100">Color</p>
            {showColorOptions && isHover && (
              <>
                <div
                  className="absolute -left-2 top-0 transform pb-2 ease-in-out z-2"
                  onMouseEnter={handleColorOptionsMouseEnter}
                  style={{
                    //   opacity: 0,
                    pointerEvents: "none",
                    transform: "rotateX(25deg) translateY(-100%)",
                    transformOrigin: "50% 0px",
                    willChange: "transform, opacity",
                    transitionProperty: "transform, opacity",
                    transitionDuration: "150ms",
                  }}
                >
                  <div
                    className="p-2 rounded-xl grid"
                    style={{
                      backgroundColor: "#34364b",
                      border: "1px solid #b3b3b33b",
                      gridTemplateColumns: "1fr 1fr 1fr 1fr",
                      gap: "10px",
                    }}
                  >
                    <div className="dark:hover:ring-4 dark:hover:ring-white dark:hover:ring-opacity-30 hover:ring-2 hover:ring-gray-200 rounded-md inline-flex flex-col items-center justify-center flex-auto active:scale-95 transition">
                      <div
                        className="rounded-md w-10 h-10 shadow-md ring-2 ring-black ring-opacity-5 ring-inset ring-offset-0 dark:shadow-lg dark:ring-2 dark:ring-white dark:ring-opacity-50 dark:ring-inset dark:ring-offset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(310deg, rgb(214, 233, 255), rgb(214, 229, 255), rgb(209, 214, 255), rgb(221, 209, 255), rgb(243, 209, 255), rgb(255, 204, 245), rgb(255, 204, 223), rgb(255, 200, 199), rgb(255, 216, 199), rgb(255, 221, 199))",
                        }}
                      ></div>
                    </div>
                    <div className="dark:hover:ring-4 dark:hover:ring-white dark:hover:ring-opacity-30 hover:ring-2 hover:ring-gray-200 rounded-md inline-flex flex-col items-center justify-center flex-auto active:scale-95 transition">
                      <div
                        className="rounded-md w-10 h-10 shadow-md ring-2 ring-black ring-opacity-5 ring-inset ring-offset-0 dark:shadow-lg dark:ring-2 dark:ring-white dark:ring-opacity-50 dark:ring-inset dark:ring-offset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(310deg, rgb(214, 233, 255), rgb(214, 229, 255), rgb(209, 214, 255), rgb(221, 209, 255), rgb(243, 209, 255), rgb(255, 204, 245), rgb(255, 204, 223), rgb(255, 200, 199), rgb(255, 216, 199), rgb(255, 221, 199))",
                        }}
                      ></div>
                    </div>
                    <div className="dark:hover:ring-4 dark:hover:ring-white dark:hover:ring-opacity-30 hover:ring-2 hover:ring-gray-200 rounded-md inline-flex flex-col items-center justify-center flex-auto active:scale-95 transition">
                      <div
                        className="rounded-md w-10 h-10 shadow-md ring-2 ring-black ring-opacity-5 ring-inset ring-offset-0 dark:shadow-lg dark:ring-2 dark:ring-white dark:ring-opacity-50 dark:ring-inset dark:ring-offset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(310deg, rgb(214, 233, 255), rgb(214, 229, 255), rgb(209, 214, 255), rgb(221, 209, 255), rgb(243, 209, 255), rgb(255, 204, 245), rgb(255, 204, 223), rgb(255, 200, 199), rgb(255, 216, 199), rgb(255, 221, 199))",
                        }}
                      ></div>
                    </div>
                    <div className="dark:hover:ring-4 dark:hover:ring-white dark:hover:ring-opacity-30 hover:ring-2 hover:ring-gray-200 rounded-md inline-flex flex-col items-center justify-center flex-auto active:scale-95 transition">
                      <div
                        className="rounded-md w-10 h-10 shadow-md ring-2 ring-black ring-opacity-5 ring-inset ring-offset-0 dark:shadow-lg dark:ring-2 dark:ring-white dark:ring-opacity-50 dark:ring-inset dark:ring-offset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(310deg, rgb(214, 233, 255), rgb(214, 229, 255), rgb(209, 214, 255), rgb(221, 209, 255), rgb(243, 209, 255), rgb(255, 204, 245), rgb(255, 204, 223), rgb(255, 200, 199), rgb(255, 216, 199), rgb(255, 221, 199))",
                        }}
                      ></div>
                    </div>
                    <div className="dark:hover:ring-4 dark:hover:ring-white dark:hover:ring-opacity-30 hover:ring-2 hover:ring-gray-200 rounded-md inline-flex flex-col items-center justify-center flex-auto active:scale-95 transition">
                      <div
                        className="rounded-md w-10 h-10 shadow-md ring-2 ring-black ring-opacity-5 ring-inset ring-offset-0 dark:shadow-lg dark:ring-2 dark:ring-white dark:ring-opacity-50 dark:ring-inset dark:ring-offset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(310deg, rgb(214, 233, 255), rgb(214, 229, 255), rgb(209, 214, 255), rgb(221, 209, 255), rgb(243, 209, 255), rgb(255, 204, 245), rgb(255, 204, 223), rgb(255, 200, 199), rgb(255, 216, 199), rgb(255, 221, 199))",
                        }}
                      ></div>
                    </div>
                    <div className="dark:hover:ring-4 dark:hover:ring-white dark:hover:ring-opacity-30 hover:ring-2 hover:ring-gray-200 rounded-md inline-flex flex-col items-center justify-center flex-auto active:scale-95 transition">
                      <div
                        className="rounded-md w-10 h-10 shadow-md ring-2 ring-black ring-opacity-5 ring-inset ring-offset-0 dark:shadow-lg dark:ring-2 dark:ring-white dark:ring-opacity-50 dark:ring-inset dark:ring-offset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(310deg, rgb(214, 233, 255), rgb(214, 229, 255), rgb(209, 214, 255), rgb(221, 209, 255), rgb(243, 209, 255), rgb(255, 204, 245), rgb(255, 204, 223), rgb(255, 200, 199), rgb(255, 216, 199), rgb(255, 221, 199))",
                        }}
                      ></div>
                    </div>
                    <div className="dark:hover:ring-4 dark:hover:ring-white dark:hover:ring-opacity-30 hover:ring-2 hover:ring-gray-200 rounded-md inline-flex flex-col items-center justify-center flex-auto active:scale-95 transition">
                      <div
                        className="rounded-md w-10 h-10 shadow-md ring-2 ring-black ring-opacity-5 ring-inset ring-offset-0 dark:shadow-lg dark:ring-2 dark:ring-white dark:ring-opacity-50 dark:ring-inset dark:ring-offset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(310deg, rgb(214, 233, 255), rgb(214, 229, 255), rgb(209, 214, 255), rgb(221, 209, 255), rgb(243, 209, 255), rgb(255, 204, 245), rgb(255, 204, 223), rgb(255, 200, 199), rgb(255, 216, 199), rgb(255, 221, 199))",
                        }}
                      ></div>
                    </div>
                    <div className="dark:hover:ring-4 dark:hover:ring-white dark:hover:ring-opacity-30 hover:ring-2 hover:ring-gray-200 rounded-md inline-flex flex-col items-center justify-center flex-auto active:scale-95 transition">
                      <div
                        className="rounded-md w-10 h-10 shadow-md ring-2 ring-black ring-opacity-5 ring-inset ring-offset-0 dark:shadow-lg dark:ring-2 dark:ring-white dark:ring-opacity-50 dark:ring-inset dark:ring-offset-0"
                        style={{
                          backgroundImage:
                            "linear-gradient(310deg, rgb(214, 233, 255), rgb(214, 229, 255), rgb(209, 214, 255), rgb(221, 209, 255), rgb(243, 209, 255), rgb(255, 204, 245), rgb(255, 204, 223), rgb(255, 200, 199), rgb(255, 216, 199), rgb(255, 221, 199))",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <div className="text-white">edkjd</div>
          <div className="text-white">edkjd</div>
          <div className="mx-3 my-1 w-px bg-black dark:bg-gray-300 dark:bg-opacity-20 bg-opacity-10 mobile-hidden-option"></div>
          <div className="text-white">edkjd</div>
        </div>
      </div>
    </>
  );
};

export default BottomBar;

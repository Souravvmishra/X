import React, { useEffect, useState } from "react";
import BottomBar from "./BottomBar";

const Dashboard = () => {
  return (
    <>
      <div className={`relative w-[100vw]  h-[100vh]  overflow-hidden`}>
        <BottomBar />
      </div>
    </>
  );
};

export default Dashboard;

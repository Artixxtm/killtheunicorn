"use client";

import Header from "./components/Header";
import Menu from "./components/Menu";

const Var1 = () => {
  return (
    <div className="w-screen h-screen overflow-hidden relative flex flex-col">
      <Menu />

      <Header />

      <div className="w-full h-full absolute flex justify-between items-center inset-0 z-2 pointer-events-none mix-blend-difference">
        <div className="w-full h-full flex justify-end items-center">
          <div className="w-px h-full bg-white/10" />
        </div>
        <div className="w-full h-full" />
        <div className="w-full h-full flex justify-start items-center">
          <div className="w-px h-full bg-white/10" />
        </div>
      </div>

      <div className="w-full h-full absolute flex flex-col justify-between items-center inset-0 z-1 pointer-events-none mix-blend-difference">
        <div className="w-full h-full flex justify-center items-end">
          <div className="w-full h-px bg-white/10" />
        </div>
        <div className="w-full h-full" />
        <div className="w-full h-full flex justify-center items-start">
          <div className="w-full h-px bg-white/10" />
        </div>
      </div>
    </div>
  );
};

export default Var1;

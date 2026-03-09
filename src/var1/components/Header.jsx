"use client";

import React from "react";
import Lanyard from "./Lanyard";
import StrechedText from "./StrechedText";
import Image from "next/image";

const Header = () => {
  return (
    <div className="w-full h-screen flex items-end relative">
      <Lanyard position={[0, 0, 15]} gravity={[0, -40, 0]} />

      <div className="w-full h-auto flex flex-col px-5 relative z-3">
        <div className="w-full h-auto flex justify-between items-center font-secondary text-5xl leading-[100%] relative top-4">
          <h2>FIRST & BEST</h2>
          <h2>
            IN <span className="font-medium text-[#ffea00]">RADOM</span>
          </h2>
        </div>
        <StrechedText
          words={[
            "S",
            "T",
            "A",
            "R",
            "T",
            "U",
            "P",
            " ",
            "C",
            "O",
            "N",
            "F",
            "E",
            "R",
            "E",
            "N",
            "C",
            "E",
          ]}
          className={
            "w-full 2xl:h-[200px] h-[130px] overflow-hidden relative mix-blend-difference z-2"
          }
          baseView={"0.449 -3.097 170.246 18.564"}
        />
      </div>

      <div className="w-full h-full absolute inset-0 -bottom-px z-2 bg-linear-to-t from-black to-40% to-transparent pointer-events-none"></div>
      <div className="w-full h-full absolute inset-0 -bottom-px z-2 bg-linear-to-b from-black to-40% to-transparent pointer-events-none"></div>
      <div className="vignette"></div>

      <Image
        src={"/bg-2.avif"}
        width={0}
        height={0}
        sizes="100vw"
        alt="bg"
        className="w-full h-full object-cover absolute inset-0 -z-1 opacity-65"
      />
    </div>
  );
};

export default Header;

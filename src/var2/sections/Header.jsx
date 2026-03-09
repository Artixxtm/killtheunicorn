"use client";

import Image from "next/image";
import React from "react";
import ParallaxImage from "../components/ParallaxImage";
import Border from "../components/Border";

const Header = () => {
  return (
    <div className="w-full h-screen overflow-hidden relative flex flex-col justify-center items-center p-5 isolate">
      <ParallaxImage
        src={"/bg.jpg"}
        width={0}
        height={0}
        sizes="100vw"
        alt="bg"
        className="w-full h-full object-cover absolute inset-0 z-0 contrast-110"
      />

      <div className="w-fit h-auto flex flex-col gap-2 items-start justify-start relative -top-5">
        <div className="w-fit h-auto flex flex-col items-center relative z-1">
          <div className="w-full flex justify-between items-center gap-5 h-auto text-black x:text-3xl md:text-xl text-lg mb-4 tracking-wide">
            <h3 className="font-secondary font-medium">
              30<span className="font-main">.</span>05
              <span className="font-main">.</span>2026
            </h3>
            <div className="w-full h-0.5 bg-black opacity-10"></div>
            <h3 className="font-secondary font-medium uppercase">Warszaw</h3>
          </div>
          <h1
            aria-label="Real Startup Conference"
            className="w-fit h-auto leading-[90%] xl:text-[7rem] md:text-7xl text-5xl text-center uppercase text-black"
          >
            <span className="font-main">R</span>
            <span className="font-secondary font-bold">e</span>
            <span className="font-main">a</span>
            <span className="font-secondary font-bold">l</span>{" "}
            <span className="font-secondary font-bold">S</span>
            <span className="font-main">t</span>
            <span className="font-secondary font-bold">art</span>
            <span className="font-main">u</span>
            <span className="font-secondary font-bold">p</span>
            <br />
            <span className="font-main">C</span>
            <span className="font-secondary font-bold">on</span>
            <span className="font-main">f</span>
            <span className="font-secondary font-bold">er</span>
            <span className="font-main">e</span>
            <span className="font-secondary font-bold">nce</span>
          </h1>

          <p className="w-fit font-secondary uppercase font-normal opacity-75 xl:text-base md:text-sm text-xs text-black text-center mt-6">
            A community of young entrepreneurs, creatives and <br />
            builders. No bullshit. No unicorn myths. Just{" "}
            <br className="md:hidden block" />
            people building <br className="md:block hidden" />
            real things.
          </p>
        </div>
      </div>
      <Image
        src={"/emblem.png"}
        alt="emblem"
        width={0}
        height={0}
        sizes="100vw"
        loading="eager"
        className="w-full xl:max-w-247.5 max-w-170 h-auto object-contain absolute left-1/2 top-1/2 -translate-x-1/2 md:-translate-y-[calc(50%-50px)] -translate-y-[calc(50%-25px)] customMix md:opacity-60 opacity-85"
      />

      <Border />
    </div>
  );
};

export default Header;

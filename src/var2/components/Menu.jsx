"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { useWindowScroll } from "react-use";
import gsap from "gsap";
import { AiFillInstagram } from "react-icons/ai";

const Menu = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const { y: currentScrollY } = useWindowScroll();

  const navContainerRef = useRef(null);

  useEffect(() => {
    if (currentScrollY <= 70) {
      setIsNavVisible(true);
      navContainerRef.current.classList.remove("floating-nav");
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false);
      navContainerRef.current.classList.add("floating-nav");
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true);
      navContainerRef.current.classList.add("floating-nav");
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY]);

  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -100,
      opacity: isNavVisible ? 1 : 0,
      duration: 0.2,
    });
  }, [isNavVisible]);

  return (
    <nav
      ref={navContainerRef}
      className="top-7.5 fixed left-1/2 -translate-x-1/2 h-20 w-fit z-10"
    >
      <div className="h-full relative navContainer backdrop-blur-none rounded-lg transition-all duration-350 isolate">
        <div className="w-full h-full absolute inset-0 navBg bg-white/0 transition-all duration-250" />

        <div className="inline-flex h-full md:px-10 px-6 py-2.5 relative items-center md:gap-34 gap-14 justify-between">
          <div className="flex items-center gap-4 w-fit h-auto text-black">
            <FaLinkedinIn
              size={22}
              className="hover:opacity-100 opacity-50 transition-opacity duration-250 cursor-pointer"
            />
            <AiFillInstagram
              size={22}
              className="hover:opacity-100 opacity-50 transition-opacity duration-250 cursor-pointer"
            />
          </div>

          <div className="w-25.5 h-full">
            <Image
              src={"/logo-c.png"}
              width={102}
              height={60}
              alt="logo"
              draggable={false}
              loading="eager"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="md:w-12 w-10 h-4.5 shrink-0 flex flex-col justify-between items-center cursor-pointer hover:opacity-100 opacity-50 transition-opacity duration-250 group">
            <div className="w-full h-0.5 bg-black group-hover:w-[60%] transition-all duration-250 ml-auto" />
            <div className="w-full h-0.5 bg-black" />
            <div className="w-full h-0.5 bg-black group-hover:w-[60%] transition-all duration-250 mr-auto" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Menu;

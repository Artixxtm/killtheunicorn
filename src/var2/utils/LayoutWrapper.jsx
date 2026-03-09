"use client";

import { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

import "lenis/dist/lenis.css";

const Menu = dynamic(() => import("../components/Menu"), {
  ssr: false,
});

export default function LayoutWrapper({ children }) {
  const lenisRef = useRef(null);
  const pathname = usePathname();
  const hideMenu = ["/privacy", "/terms"].includes(pathname);

  useEffect(() => {
    let rafId;

    function raf(time) {
      lenisRef.current?.lenis?.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    lenisRef.current?.lenis?.on("scroll", ScrollTrigger.update);

    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      {!hideMenu && <Menu />}
      <ReactLenis
        root
        ref={lenisRef}
        options={{
          duration: 2,
          easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
          lerp: 0.1,
          direction: "vertical",
          gestureDirection: "vertical",
          smooth: true,
          smoothTouch: true,
          touchMultiplier: 2,
          autoRaf: false,
          prevent: (node) => node.id === "modalScroll",
        }}
      >
        {children}
      </ReactLenis>
    </>
  );
}

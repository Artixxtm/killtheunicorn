import Image from "next/image";
import React from "react";

const Border = ({fullscreen = false}) => {
  return (
    <div className={`w-full ${fullscreen ? 'h-screen' : 'h-full'} absolute inset-0 pointer-events-none`}>
      <Image
        src="/border/left.png"
        alt="left side"
        sizes="100vw"
        width={0}
        height={0}
        loading="eager"
        className="absolute h-full w-10 -left-2 top-0 md:block hidden object-cover"
      />
      <Image
        src="/border/right.png"
        alt="right side"
        sizes="100vw"
        width={0}
        height={0}
        loading="eager"
        className="absolute h-full w-10 -right-2 top-0 md:block hidden object-cover"
      />
      <Image
        src="/border/top.png"
        alt="upper side"
        sizes="100vw"
        width={0}
        height={0}
        loading="eager"
        className="absolute h-10 w-full left-0 -top-2 object-cover"
      />
      <Image
        src="/border/bottom.png"
        alt="under side"
        sizes="100vw"
        width={0}
        height={0}
        loading="eager"
        className="absolute h-10 w-full left-0 -bottom-2 object-cover"
      />
    </div>
  );
};

export default Border;

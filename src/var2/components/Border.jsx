import Image from "next/image";
import React from "react";

const Border = () => {
  return (
    <div className="w-full h-screen absolute inset-0 pointer-events-none">
      <Image
        src="/border/left.png"
        alt="left side"
        sizes="100vw"
        width={0}
        height={0}
        loading="eager"
        className="absolute h-full w-10 md:left-0 -left-1 top-0 object-cover"
      />
      <Image
        src="/border/right.png"
        alt="right side"
        sizes="100vw"
        width={0}
        height={0}
        loading="eager"
        className="absolute h-full w-10 md:right-0 -right-1 top-0 object-cover"
      />
      <Image
        src="/border/top.png"
        alt="upper side"
        sizes="100vw"
        width={0}
        height={0}
        loading="eager"
        className="absolute h-10 w-full left-0 md:top-0 -top-1 object-cover"
      />
      <Image
        src="/border/bottom.png"
        alt="under side"
        sizes="100vw"
        width={0}
        height={0}
        loading="eager"
        className="absolute h-10 w-full left-0 md:bottom-0 -bottom-1 object-cover"
      />
    </div>
  );
};

export default Border;

import React from "react";

const Menu = () => {
  return (
    <nav className="w-full p-5 flex justify-between items-start h-fit absolute inset-0 z-5">
      <div className="w-auto h-auto flex flex-col gap-8">
        <p className="font-secondary w-full max-w-122.5 text-lg uppercase">
          We are <span className="opacity-75">about</span> top entrepreneurs
          community{" "}
          <span className="opacity-75">of young creatives & builders</span>. No
          bullshit. No unicorn myths. Just real builders.
        </p>

        <button className="px-6 bg-[#ffea00] w-fit text-black py-2 rounded-md font-secondary font-medium cursor-pointer">
          Get Your Ticket
        </button>
      </div>

      <div className="w-fit h-auto flex flex-col gap-8 items-end">
        <div className="w-auto h-auto flex gap-4 relative cursor-pointer">
          <span className="font-secondary opacity-75">MENU</span>
          <div className="flex flex-col gap-2 w-12">
            <div className="w-full h-0.75 bg-white"></div>
            <div className="w-full h-0.75 bg-white"></div>
            <div className="w-full h-0.75 bg-white"></div>
          </div>
        </div>

        <h4 className="font-main text-5xl opacity-90">30.05.2026</h4>
      </div>
    </nav>
  );
};

export default Menu;

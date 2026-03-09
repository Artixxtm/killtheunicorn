'use client'

import { IoTicketSharp } from "react-icons/io5";

import "./GetButton.css";

const GetButton = () => {
  return (
    <button className="xl:w-78 w-68 xl:h-16 h-14 fixed md:bottom-12.5 bottom-8 left-1/2 -translate-x-1/2 drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] z-10 ">
      <div className="w-full h-full relative xl:customClipHexaWide customClipHexaMobile cursor-pointer group hover:-translate-y-1.5 transition-transform duration-250">
        <div className="w-full h-full absolute inset-0 bg-[#ffea00] group-hover:bg-[#ffffff] transition-colors duration-250" />
        <div className="w-full h-full flex items-center justify-between px-2 relative z-1">
          <div className="xl:h-12.5 h-11 w-full xl:max-w-12.5 max-w-11 bg-black text-white group-hover:bg-[#ffea00] group-hover:text-black transition-colors duration-250 flex items-center justify-center customClipHexa">
            <IoTicketSharp size={24} />
          </div>
          <div className="w-full h-full text-black font-secondary uppercase font-medium xl:text-2xl text-lg flex justify-center items-center text-center">
            Get Your Ticket
          </div>
        </div>
      </div>
    </button>
  );
};

export default GetButton;

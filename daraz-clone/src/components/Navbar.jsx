import React from "react";
import { CiSearch } from "react-icons/ci";
import {
  PiShoppingCartSimple,
  PiShoppingCartSimpleLight,
} from "react-icons/pi";

const Navbar = () => {
  return (
    <div className="w-[100%] h-[118.4px] bg-[#f85606] flex flex-col">
      <div className="flex w-full h-[25px] text-white list-none gap-10 text-[12px] justify-end relative right-44 top-1 font-[Roboto-Regular, Helvetica] font-semibold">
        <li>SAVE MORE ON APP</li>
        <li>BECOME A SELLER</li>
        <li>HELP & SUPPORT</li>
        <li>LOGIN</li>
        <li>SIGN UP</li>
        <li>Language</li>
      </div>

      {/* logo, search-bar, cart-icon */}
      <div className="flex justify-start items-center relative left-40">
        <div className="flex justify-start w-[200px]">
          <img
            className="h-[40px] w-[127px]"
            src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png"
            alt="daraz-logo"
          />
        </div>

        <div className="relative h-[75px] flex items-center">
          <input
            className="border-none w-[688px] h-[45px] outline-none bg-[#fff] rounded-[2px] py-[13px] px-[19px]"
            type="search"
            name=""
            id=""
            placeholder="Search in Daraz"
          />
          <button className="search-button font-semibold absolute right-0 w-[45px] h-[45px] flex items-center justify-center bg-[#ffe1d2] text-[#f85606] text-[25px] rounded-[2px]">
            <CiSearch />
          </button>

          <button className="search-button absolute -right-20 bottom-2 w-[45px] h-[45px] text-[#fff] text-[30px] rounded-[2px]">
            <PiShoppingCartSimple />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

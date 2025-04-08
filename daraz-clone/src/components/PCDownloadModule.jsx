import React from "react";
import { MdOutlineStar } from "react-icons/md";

const PCDownloadModule = () => {
  return (
    <div className="relative w-[194px] h-[344px] p-[6px] bg-[linear-gradient(90deg,_#fff,_hsla(0,0%,100%,0)),linear-gradient(179.27deg,_#ffedd6_.83%,_#ffc3e3_46.78%,_#fff_99.57%),linear-gradient(0deg,_#fff,_#fff)] drop-shadow-sm">
      <div className="module-title w-[182px] h-[42px] flex items-center">
        <div className="h-[42px] w-[42px] flex justify-center">
          <img
            src="https://img.lazcdn.com/us/domino/1ee015d6a5c62fd0339c88c657c1c183.jpg_120x120q80.jpg"
            alt="daraz-module-logo"
            className="w-[24.5px] h-[42px]"
          />
        </div>
        <span className="font-[NotoSans-Regular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Tahoma, Arial, PingFang SC, Microsoft YaHei, sans-serif !important] font-medium text-[#6c1d00] ml-[6px] text-[14px]">
          Download the App
        </span>
      </div>
      <div className="relative font-[NotoSans-Regular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Tahoma, Arial, PingFang SC, Microsoft YaHei, sans-serif !important] text-white">
        <img
          src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01tceZus1IewufOY1tZ_!!6000000000919-2-tps-364-316.png"
          alt=""
          className="mt-[6px] overflow-hidden"
        />
        <span className="flex items-center leading-[14px] font-medium text-[12px] absolute top-2 left-1.5">
          <MdOutlineStar />
          4.8 Rated
        </span>
        <span className="flex items-center leading-[14px] font-medium text-[13px] absolute top-6 left-1/4">
          Download App
        </span>
        <div className="absolute w-full top-15 flex flex-col justify-center items-center gap-1">
          <div className="flex items-center gap-2 max-w-34">
            <span>
              <img
                src="https://img.lazcdn.com/g/tps/imgextra/i2/O1CN01n3PMa828kJZVuCbPp_!!6000000007970-2-tps-72-72.png_150x150q80.png"
                alt=""
                className="h-9 w-9"
              />
            </span>
            <span className="text-[16px] font-semibold leading-4 cursor-auto">
              Free Delivery
            </span>
          </div>
          <div className="flex items-center gap-2 max-w-34">
            <span>
              <img
                src="https://img.lazcdn.com/g/tps/imgextra/i3/O1CN01J03SMW1lebTE7xkaN_!!6000000004844-2-tps-72-72.png_150x150q80.png"
                alt=""
                className="h-9 w-9"
              />
            </span>
            <span className="text-[16px] font-semibold leading-4 cursor-auto">
              Limited Time
            </span>
          </div>
        </div>
      </div>
      <div className="qr-code mt-2 flex items-center gap-1.5">
        <img
          src="https://img.drz.lazcdn.com/g/tps/imgextra/i2/O1CN01da6D0K1Khogk708ZP_!!6000000001196-0-tps-150-150.jpg_360x360q80.jpg"
          alt=""
          className="h-[90px] w-[90px]"
        />
        <div className="flex flex-col gap-3.5">
          <button className="cursor-pointer">
            <img
              src="https://img.lazcdn.com/g/tps/imgextra/i4/O1CN01uAl8kB1wEv2DNjdhB_!!6000000006277-2-tps-125-36.png"
              alt=""
              className="w-[83px] h-[24px]"
            />
          </button>
          <button className="cursor-pointer">
            <img
              src="https://img.lazcdn.com/g/tps/imgextra/i1/O1CN01QJGFfc1S0mKngu4rQ_!!6000000002185-2-tps-125-36.png"
              alt=""
              className="w-[83px] h-[24px]"
            />
          </button>
        </div>
      </div>
      <span className="text-[10px] font-medium">Download the App Now!</span>
    </div>
  );
};

export default PCDownloadModule;

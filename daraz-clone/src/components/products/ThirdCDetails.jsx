import React from "react";
import { CiMobile2 } from "react-icons/ci";
import { GiReturnArrow } from "react-icons/gi";
import { HiCash } from "react-icons/hi";
import { IoMdChatbubbles } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { SiBitwarden } from "react-icons/si";
import { TbTruckDelivery } from "react-icons/tb";
import { Link } from "react-router-dom";

const ThirdCDetails = () => {
  return (
    <div className="w-full h-full px-2">
      <div className="mt-2.5">
        <p className="text-gray-500 font-medium text-[12px]">
          Delivery Options
        </p>
      </div>
      <div className="mt-2 flex items-center justify-center gap-2 border-b-1 border-gray-200 py-4 text-[#212121]">
        <div className="w-[5%]">
          <IoLocationOutline size={"24px"} className="text-gray-400" />
        </div>
        <div className="w-[70%] pl-4">
          <p className="leading-4 text-[16px]">
            Bagmati Province, Bhaktapur, Biruwa Buspark Area
          </p>
        </div>
        <div className="w-[25%] flex justify-end">
          <Link>
            <button className="uppercase hover:cursor-pointer text-[#136CFF] text-[14px]">
              change
            </button>
          </Link>
        </div>
      </div>

      <div className="border-b-1 border-gray-200 flex flex-col pb-4 text-[14px] text-[#212121">
        <div className="flex gap-2 py-4">
          <div className="w-[5%]">
            <TbTruckDelivery size={"24px"} className="text-gray-400" />
          </div>
          <div className="w-[70%] pl-4">
            <p>Standard Delivery</p>
            <p className="text-[12px] text-gray-500">Guaranteed by 8-13 Apr</p>
          </div>
          <div className="w-[25%] flex justify-end font-semibold">
            <p>Rs. 135</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-[5%]">
            <HiCash size={"24px"} className="text-gray-400" />
          </div>

          <div className="w-[70%] pl-4">
            <p>Cash on Delivery Available</p>
          </div>
        </div>
      </div>

      <div className="border-b-1 border-gray-200 flex flex-col pb-4 text-[14px] text-[#212121]">
        <div className="mt-2.5">
          <p className="text-gray-500 font-medium text-[12px]">
            Return & Warranty
          </p>
        </div>
        <div className="flex gap-2 py-4">
          <div className="w-[5%]">
            <GiReturnArrow size={"24px"} className="text-gray-400" />
          </div>
          <div className="w-[70%] pl-4">
            <p>14 Days Free Returns</p>
          </div>
        </div>

        <div className="flex gap-2">
          <div className="w-[5%]">
            <SiBitwarden size={"24px"} className="text-gray-400" />
          </div>

          <div className="w-[70%] pl-4">
            <p>Warranty not available</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex mb-4">
          {/* QR Code and App Download Section */}
          <div className="flex-shrink-0 mr-4">
            <img
              src="https://imgs.search.brave.com/Xpx9mtEJwnnNZ1cMnJXAanzHLizWurLQotK05BD3J1Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZHJ6LmxhemNkbi5j/b20vc3RhdGljL3Br/L3AvOTdiMzRiNjM4/Nzc0ZTc2ZWJmNGQx/NDI1NTk5NzgyZDEu/anBnXzcyMHg3MjBx/ODAuanBn"
              alt="QR Code"
              className="w-28 h-28"
            />
            <div className="flex items-center mt-1]">
              <CiMobile2 size={"20px"}/>
              <span className="text-gray-800 text-[12px">Scan with mobile</span>
            </div>
          </div>

          {/* App Download Card */}
          <div className="bg-white rounded-md shadow p-3 flex flex-col justify-start mt-2 max-h-[100px]">
            <div className="rounded-md">
              <img
                src="https://img.drz.lazcdn.com/g/tps/imgextra/i1/O1CN01XrNYQP1paGCVispyM_!!6000000005376-2-tps-82-82.png"
                alt=""
                className="w-[43px] h-[43px]"
              />
            </div>
            <p className="text-gray-500 text-[12px]">
              Download app to enjoy exclusive discounts!
            </p>
          </div>
        </div>

        {/* Seller Information */}
        <div className="mb-2">
          <div>
            <p className="text-gray-600 text-[12px]">Sold by</p>
          </div>
          <div className="flex items-start">
            <h3 className="text-black text-[16px] w-[55%] leading-4">
              Ambe Laxmi General Stores
            </h3>
            <div className="w-[45%] flex justify-end">
              <Link>
                <button className="flex items-center text-blue-500 font-medium">
                  <IoMdChatbubbles className="w-5 h-5 mr-1" />
                  Chat
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Seller Metrics */}
        <div className="grid grid-cols-3 border-t border-gray-200 pt-3">
          <div className="border-r border-gray-200">
            <p className="text-gray-600 text-xs mb-1 max-w-[103px]">
              Positive Seller Ratings
            </p>
            <p className="font-semibold text-2xl">75%</p>
          </div>
          <div className="border-r border-gray-200 flex flex-col mx-1">
            <p className="text-gray-600 text-xs mb-1 max-w-[103px] py-2">Ship on Time</p>
            <p className="text-gray-800 font-semibold text-2xl">100%</p>
          </div>
          <div className="mx-1">
            <p className="text-gray-600 text-xs mb-1 max-w-[103px]">Chat Response Rate</p>
            <p className="text-gray-400 text-[12px]">Not enough data</p>
          </div>
        </div>

        {/* Store Button */}
        <div className="mt-4">
          <Link>
          <button className="w-full text-blue-600 py-2 rounded-md font-medium">
            GO TO STORE
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThirdCDetails;

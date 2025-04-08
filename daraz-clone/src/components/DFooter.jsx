import React from "react";
import { Link } from "react-router-dom";

const DFooter = () => {
  return (
    <div className="w-full bg-[#f4f4f6] mt-5 py-6">
      {/* 1st row */}
      <div className="flex mx-32 w-[100%]">
        {/* customer care column */}
        <div className="pl-22 w-[40%]">
          <h3 className="text-indigo-900 font-medium mb-4">Customer Care</h3>
          <ul className="text-sm">
            <li>
              <Link className="text-indigo-800 hover:underline">
                Help Center
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                How to Buy
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Returns & Refunds
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Daraz Column */}
        <div className="w-[50%] pl-22">
          <h3 className="text-indigo-900 font-medium mb-4">Daraz</h3>
          <ul className="text-sm">
            <li>
              <Link className="text-indigo-800 hover:underline">
                About Daraz
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">Careers</Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Daraz Blog
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Digital Payments
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Daraz Customer University
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Daraz Affiliate Program
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Review & Win
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Meet the winners
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Daraz University
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Sell on Daraz
              </Link>
            </li>
            <li>
              <Link className="text-indigo-800 hover:underline">
                Code of Conduct
              </Link>
            </li>
          </ul>
        </div>

        {/* App Download Column */}
        <div className="w-full flex">
          <div className="flex gap-3.5 w-[80%]">
            <img
              src="https://img.lazcdn.com/us/domino/da7668ef-2724-447a-951a-558dafdfb265_NP-60-60.png"
              alt=""
              className="w-[43px] h-[43px]"
            />
            <div className="w-[30%]">
              <h3 className="text-[16px] text-[#f36f36]">Happy Shopping</h3>
              <h2 className="-mt-1 text-[#0f136d]">Download App</h2>
            </div>
            <div className="grid grid-cols-2 max-h-24 gap-1 w-[70%]">
              <div className="w-full">
                <Link>
                  <img
                    src="https://img.lazcdn.com/us/domino/afd80417-f3df-464e-bc1a-78d790033ae6_NP-126-42.png"
                    alt="App Store"
                  />
                </Link>
              </div>
              <div className="w-full -ml-12">
                <Link>
                  <img
                    src="https://img.lazcdn.com/us/domino/130438e4-2c46-4620-adee-5d6e33b011cb_NP-126-42.png"
                    alt="Google Play"
                  />
                </Link>
              </div>
              <div className="w-full">
                <Link>
                  <img
                    src="https://img.lazcdn.com/us/domino/b57e9929-aff3-47d4-b5ec-c0954f271088_NP-126-42.png"
                    alt="App Gallery"
                  />
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DFooter;

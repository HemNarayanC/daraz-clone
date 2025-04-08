import React from 'react'
import { IoMdChatboxes } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-gray-100 pt-8 pb-4 text-sm w-full">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-3 justify-items-center place-items-center">
          {/* Customer Care Column */}
          <div>
            <h3 className="text-indigo-900 font-medium mb-4">Customer Care</h3>
            <ul className="">
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Help Center
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  How to Buy
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Daraz Column */}
          <div>
            <h3 className="text-indigo-900 font-medium mb-4">Daraz</h3>
            <ul className="">
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  About Daraz
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Careers
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Daraz Blog
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Digital Payments
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Daraz Customer University
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Daraz Affiliate Program
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Review & Win
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Meet the winners
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Daraz University
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Sell on Daraz
                </Link>
              </li>
              <li>
                <Link  className="text-indigo-800 hover:underline">
                  Code of Conduct
                </Link>
              </li>
            </ul>
          </div>

          {/* App Download Column */}
          <div className="flex gap-2">
            <div className="flex items-center mb-4 ">
              <div className="bg-cyan-100 p-2 rounded-md mr-3">
                <img src="https://img.lazcdn.com/us/domino/da7668ef-2724-447a-951a-558dafdfb265_NP-60-60.png" alt="" className='w-[43px] h-[43px]'/>
              </div>
              <div>
                <p className="text-orange-500 font-medium">Happy Shopping</p>
                <p className="text-indigo-900">Download App</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-1.5 place-items-center">
              <Link>
                <img src="https://img.lazcdn.com/us/domino/afd80417-f3df-464e-bc1a-78d790033ae6_NP-126-42.png" alt="App Store" />
              </Link>
              <Link>
                <img src="https://img.lazcdn.com/us/domino/130438e4-2c46-4620-adee-5d6e33b011cb_NP-126-42.png" alt="Google Play" />
              </Link>
              <Link>
                <img src="https://img.lazcdn.com/us/domino/b57e9929-aff3-47d4-b5ec-c0954f271088_NP-126-42.png" alt="App Gallery" />
              </Link>
            </div>
          </div>
        </div>

        {/* Payment Methods Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center justify-items-center h-36 bg-white w-[100%]">
          <div>
            <h3 className="text-gray-700 font-medium mb-4">Payment Methods</h3>
            <div className="flex flex-wrap gap-4">
              <img src="https://img.lazcdn.com/us/domino/c2458806-20cd-491a-a688-b401834ea19c_NP-139-84.png" alt="Cash on Delivery" className="h-8" />
              <img src="https://img.lazcdn.com/us/domino/a6e969c7-243f-4323-8ad1-64599aeb52af_NP-117-70.png" alt="Visa" className="h-8" />
              <img src="https://img.lazcdn.com/us/domino/9ec5c353-cd15-400b-b2b4-8b7182fe76e7_NP-63-48.png" alt="Mastercard" className="h-8" />
              <img src="https://img.lazcdn.com/us/domino/9a39944c-1987-458d-8199-3a6c821bcdec_NP-144-84.png" alt="eSewa" className="h-8" />
              <img src="https://img.lazcdn.com/us/domino/22cfe7c1-f299-4f7b-b91a-49e29fc78fc0_NP-144-84.png" alt="IME Pay" className="h-8" />
            </div>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium mb-4">Verified by</h3>
            <img src="https://img.drz.lazcdn.com/g/tps/imgextra/i4/O1CN01ZaMORP1I3qlBom0V2_!!6000000000838-2-tps-73-41.png" alt="PCI DSS" className="h-10" />
          </div>
        </div>

        {/* International & Social Media Section */}
        <div className="grid grid-cols-2 place-items-center justify-items-center">
          <div>
            <h3 className="text-gray-700 font-medium mb-4">Daraz International</h3>
            <div className="flex flex-wrap gap-4">
            <Link  className="flex items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-red-500">
                  <img src="https://img.lazcdn.com/us/domino/e18dc75b-c2f1-4f27-8df2-ea98af38369c_NP-84-84.png" alt="" />
                </div>
                <span className="text-gray-600">Bangladesh</span>
              </Link>
              <Link  className="flex items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-red-500">
                  <img src="https://img.lazcdn.com/us/domino/99549a48-8903-40cf-946e-c717069f2826_NP-84-84.png" alt="" />
                </div>
                <span className="text-gray-600">Bangladesh</span>
              </Link>
              <Link  className="flex items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-yellow-500">
                  <img src="http://img.lazcdn.com/us/domino/502c6171-a00f-4f86-9155-bb0d673bf613_NP-84-84.png" alt="" />
                </div>
                <span className="text-gray-600">Sri Lanka</span>
              </Link>
              <Link  className="flex items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-yellow-400">
                  <img src="https://img.lazcdn.com/us/domino/175d06e3-1efe-436b-bc3e-9631ae37768d_NP-84-84.png" alt="Myanmar_flag" />
                </div>
                <span className="text-gray-600">Myanmar</span>
              </Link>
              <Link  className="flex items-center gap-1">
                <div className="w-6 h-6 rounded-full bg-red-700">
                  <img src="https://img.lazcdn.com/us/domino/0a1acdf4-47e1-41d6-9247-6d67b0025826_NP-86-86.png" alt="Nepal_flag" />
                </div>
                <span className="text-gray-600">Nepal</span>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-gray-700 font-medium mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <Link  className="text-blue-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </Link>
              <Link  className="text-pink-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153.509.5.902 1.105 1.153 1.772.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 01-1.153 1.772c-.5.508-1.105.902-1.772 1.153-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 01-1.772-1.153 4.904 4.904 0 01-1.153-1.772c-.247-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 011.153-1.772A4.897 4.897 0 015.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.04 0 2.67.01 2.986.058 4.04.045.976.207 1.505.344 1.858.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.04.058 2.67 0 2.987-.01 4.04-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.04 0-2.67-.01-2.986-.058-4.04-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.054-.048-1.37-.058-4.04-.058z" />
                  <path d="M12 6.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.338-9.87a1.2 1.2 0 100 2.4 1.2 1.2 0 000-2.4z" />
                </svg>
              </Link>
              <Link  className="text-red-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </Link>
              <Link  className="text-orange-500">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="text-right">
            <p className="text-gray-600">© Daraz 2025</p>
          </div>
        </div>
      </div>

      {/* Messages Button */}
      <div className="fixed bottom-4 right-4">
        <button className="bg-white border border-gray-300 rounded-lg py-2 px-4 flex items-center shadow-md">
          <IoMdChatboxes className="text-blue-800 mr-2" size={20} />
          <span className="text-blue-800 font-medium">Messages</span>
        </button>
      </div>
    </footer>
  )
}

export default Footer
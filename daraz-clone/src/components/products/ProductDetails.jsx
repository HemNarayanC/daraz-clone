import React from "react";
import { Link, useParams } from "react-router-dom";
import JustForYouData from "./JustForYouData";
import { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { IoShareSocial } from "react-icons/io5";
import {
  FaMinus,
  FaPlus,
  FaRegStar,
  FaStar,
  FaStarHalfAlt,
} from "react-icons/fa";
import CountDownSale from "../CountDownSale";
import Button from "./Button";
import ThirdCDetails from "./ThirdCDetails";

const ProductDetails = () => {
  let [loading, setLoading] = useState(false);
  let [product, setProduct] = useState(null);

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    let productData = null;
    for (let i = 0; i < JustForYouData.length; i++) {
      if (JustForYouData[i].id === parseInt(params.id)) {
        productData = JustForYouData[i];
        break;
      }
    }

    if (productData) {
      setProduct(productData);
    } else {
      setProduct(null);
    }

    setLoading(false);
  }, [params.id]);

  const [productCount, setProductCount] = useState(1);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <button
          disabled
          type="button"
          className="text-white bg-blue-700 font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 inline-flex items-center justify-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 me-3 text-white animate-spin"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="#E5E7EB"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentColor"
            />
          </svg>
          Loading...
        </button>
      </div>
    );

  if (!product) return <p>Product not found.</p>;

  const { rate, count } = product.rating || {};
  const validRate =
    typeof rate === "number" && rate >= 0 && rate <= 5 ? rate : 0;

  const fullStars = Math.floor(validRate);
  const halfStars = rate % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStars;

  return (
    <>
      <div className="w-[1188px] h-[725px] mx-auto flex mt-5">
        {/* First Column */}
        <div className="w-[338px] h-[410px]">
          <div>
            <img
              src={product.image}
              alt=""
              className="w-[330px] h-[330px] object-contain"
            />
          </div>
        </div>
        {/* Second Column */}
        <div className="w-[520px] h-[511px] px-4 text-[22px] leading-6.5 relative">
          <h2 className="py-3">{product.title}</h2>
          {/* share and heart icon */}
          <div className="flex justify-end">
            <IoShareSocial size={"22px"} className="text-gray-400 text-xl" />
            <CiHeart size={"22px"} className="text-gray-400 text-xl" />
          </div>

          {/* Rating */}
          {rate && (
            <div className="flex gap-0.5 mt-1 items-center relative bottom-3">
              {[...Array(fullStars)].map((_, i) => (
                <FaStar
                  key={`full-${i}`}
                  size={"12px"}
                  className="text-yellow-500"
                />
              ))}
              {halfStars > 0 && (
                <FaStarHalfAlt size={"12px"} className="text-yellow-500" />
              )}
              {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar
                  key={`empty-${i}`}
                  size={"12px"}
                  className="text-gray-300"
                />
              ))}
              <Link>
                <div className="flex gap-2.5 text-blue-600 items-center text-[14px] ml-2">
                  <p>Ratings</p>
                  <span>{count}</span>
                </div>
              </Link>
            </div>
          )}

          <Link>
            <div className="flex gap-2.5 mt-2">
              <span className="text-gray-400 text-[14px]">Brand:</span>
              <span className="text-blue-600 items-center text-[14px]">
                {product.category}
              </span>
            </div>
          </Link>
          {/* <CountDownSale /> */}
          <div className="border-y-1 py-3 mt-5 border-gray-200">
            <div className="flex gap-4 text-3xl font-semibold text-[#f85606]">
              <span>{product.currency}</span>
              <span>{product.price}</span>
            </div>
            <div className="flex gap-2.5 text-[16px]">
              <div className="text-gray-400 line-through font-extralight flex gap-2.5">
                <span>
                  {product.currency}
                  <span>1500</span>
                </span>
              </div>
              <span>-{product.itemDiscount}</span>
            </div>
          </div>
          <div className="flex gap-2 text-[14px] mt-2">
            <div className="flex flex-col text-gray-500 font-medium">
              Color Family
            </div>
            <div className="flex flex-col items-end">
              <p>White</p>
              <div className="p-2 border-1 border-[#f85606]">
                {/* image */}
                <img
                  src={product.image}
                  alt=""
                  className="h-[30px] w-[30px] object-contain"
                />
              </div>
            </div>
          </div>

          <div className="flex gap-3.5 mt-2 text-[16px]">
            <span className="text-gray-500">Quantity</span>
            <div className="flex gap-4 text-2xl">
              <button
                onClick={() =>
                  productCount > 1 && setProductCount(productCount - 1)
                }
                className={`w-8 h-8 flex justify-center items-center text-gray-500 ${
                  productCount <= 1
                    ? "bg-gray-100 cursor-not-allowed"
                    : "bg-gray-200"
                } ${productCount > 1 && "hover:bg-gray-400 hover:text-white"}`}
              >
                <FaMinus size={"12px"} />
              </button>
              <span>{productCount}</span>
              <button
                onClick={() => setProductCount(productCount + 1)}
                className="bg-gray-200 w-8 h-8 flex justify-center items-center text-gray-500 hover:bg-gray-400 hover:text-white"
              >
                <FaPlus size={"12px"} />
              </button>
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <Button color="#2ABBE8" label="Buy Now" />
            <Button color="#f57224" label="Add to Cart" />
          </div>
        </div>

        {/* third column */}
        <div className="w-[330px] h-auto bg-gray-50">
          <ThirdCDetails />
        </div>
      </div>
      <div className="w-[1188px] h-80 mx-auto flex flex-col mt-5">
        <h2 className="text-lg text-gray-700 mb-6">Product Details of {product.title}</h2>
        <p className="max-w-2xl">{product.description}</p>
      </div>
    </>
  );
};

export default ProductDetails;

import React from "react";
import Products from "./products/Products";
import { Link } from "react-router-dom";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ products }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 bg-[#fff]">
      {products.map((product, index) => {
        const { rate, count } = product.rating || {};
        const validRate =
          typeof rate === "number" && rate >= 0 && rate <= 5 ? rate : 0;

        const fullStars = Math.floor(validRate);
        const halfStars = rate % 1 >= 0.5 ? 1 : 0;
        const emptyStars = 5 - fullStars - halfStars;
        return (
          <Link to={`/${product.id}`}>
            <div
              key={index}
              className="flex flex-col w-[188px] h-[290px] hover:shadow-[1px_1px_6px_rgba(0,0,0,0.2)] font-[ NotoSans-Regular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, Helvetica, Tahoma, Arial, PingFang SC, Microsoft YaHei, sans-serif !important] px-1 my-2"
            >
              <div className="">
                <img
                  src={product.image}
                  alt=""
                  className="h-[188px] w-[188px] object-contain"
                />
              </div>
              <p className="text-ellipsis overflow-hidden h-[30px] w-[172px] text-[14px] font-medium leading-4 line-clamp-2">
                {product.title}
              </p>
              <span className="pt-2 text-[#f57224] font-semibold text-[18px]">
                {`${product.currency}${product.price}`}
              </span>
              <div className="flex gap-1.5 items-center">
                <span className="line-through text-gray-500 text-[12px] font-medium">
                  Rs. 499
                </span>
                <span className="text-[12px] font-medium">
                  -{product.itemDiscount}
                </span>
              </div>
              {/* Rating Stars */}
              <div className="flex items-center gap-0.5">
              {rate && (
                  <div className="flex gap-0.5 mt-1">
                    {[...Array(fullStars)].map((_, i) => (
                      <FaStar key={`full-${i}`} size={"10px"} className="text-yellow-500" />
                    ))}
                    {halfStars > 0 && (
                      <FaStarHalfAlt size={"10px"} className="text-yellow-500" />
                    )}
                    {[...Array(emptyStars)].map((_, i) => (
                      <FaRegStar key={`empty-${i}`} size={"10px"} className="text-gray-300" />
                    ))}
                </div>)}
                {count && (
                    <span className="text-gray-400 text-[12px] flex items-center">
                      {`(${count})`}
                    </span>
                  )}
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductCard;

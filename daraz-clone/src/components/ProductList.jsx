import React from "react";
import ProductCard from "./ProductCard";
import Title from "./Title";
import Categories from "./products/Categories";
import JustForYouData from "./products/JustForYouData";
import Products from "./products/Products";

const ProductList = () => {
  return (
    <div className="bg-[#f5f5f5] h-auto">
      <Title label="Flash Sale" />
      <div className="w-[1188px] mx-auto">
        <div className="w-full h-[60px] flex justify-between items-center border-b-1 border-[#d5d5d5]">
          <span className="text-[#f57224] flex justify-center px-3 font-medium">
            On Sale Now
          </span>
          <button className="text-[#f57224] font-semibold border-[#f57224] border-1 uppercase box-border w-[176px] h-[35px] px-1 cursor-pointer">
            Shop All Products
          </button>
        </div>
        <div className="product-cards mb-6">
          <ProductCard products={Products} />
        </div>
      </div>
      <Title label="Categories" />
      <div className="w-[1188px] mx-auto mb-6">
        <Categories />
      </div>

      <Title label="Just For You" />
      <div className="w-[1188px] mx-auto">
        <div className="product-cards">
          <ProductCard products={JustForYouData} />
        </div>
      </div>
    </div>
  );
};

export default ProductList;

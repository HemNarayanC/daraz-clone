import React from "react";
import CategoriesData from "./CategoriesData.js";

const Categories = () => {
  return (
    <div className="grid grid-cols-8 bg-[#fff]">
      {CategoriesData.map((category, index) => {
        const isLastColumn = (index + 1) % 8 == 0;
        const isLastRow = index >= CategoriesData.length - 8;

        return (
          <div
            key={index}
            className={`w-[147.7px] h-[147.7px] flex flex-col items-center justify-center gap-2 border-r-1 border-gray-300 $ ${
              isLastColumn ? "border-r-0" : "border-r border-gray-300"
            } 
              ${isLastRow ? "border-b-0" : "border-b border-gray-300"}`}
          >
            <div>
              <img
                src={category.imgSrc}
                alt="category-image"
                className="w-[80px] h-[80px]"
              />
            </div>
            {/* description */}
            <p className="leading-4.5 text-center">{category.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;

import React, { useEffect } from "react";
import { useState } from "react";
import { CiSquareChevLeft, CiSquareChevRight } from "react-icons/ci";
import bannerImages from "./banners/bannerImages";
import PCDownloadModule from "./PCDownloadModule";

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const autoSlide = setTimeout(() => {
      setCurrent((prev) => (prev === bannerImages.length - 1 ? 0 : prev + 1));
    }, 7000);

    return () => clearTimeout(autoSlide); // Cleanup to prevent memory leaks
  }, [current]);

  const previousSlide = () => {
    setCurrent(current === 0 ? bannerImages.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === bannerImages.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative mx-auto w-full flex justify-center items-center gap-2">
      {/* Carousel container */}
      <div className="relative h-[344px] w-[1000px]">
        {/* Images */}
        {bannerImages.map((image, index) => (
          <div
            key={image.bannerTitle}
            className={`ob absolute w-full h-full transition-opacity duration-1000 ease-linear ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.bannerImg}
              alt={image.bannerTitle}
              className="h-full w-full object-cover"
            />
          </div>
        ))}

        {/* Navigation buttons */}
        <button
          onClick={previousSlide}
          className="absolute left-2 top-2/5 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        >
          <CiSquareChevLeft className="h-5 w-5" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-2 top-2/5 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
        >
          <CiSquareChevRight className="h-5 w-5" />
        </button>
      </div>

      {/* Simple indicators */}
      <div className="absolute bottom-4 flex justify-center space-x-2">
        {bannerImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-[10px] w-[10px] rounded-full ${
              index === current ? "bg-white" : "bg-gray-200 opacity-15"
            } cursor-pointer`}
          />
        ))}
      </div>
      <PCDownloadModule />
    </div>
  );
};

export default ImageCarousel;

import React from "react";
import readyToShopImg1 from "../../../../src/assets/ReadyToShop/ReadyToShop-Img-1.png";
import readyToShopImg2 from "../../../../src/assets/ReadyToShop/ReadyToShop-Img-2.png";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";

const ReadyToShop = () => {

  const images = [
    { id: 1, src: readyToShopImg1, alt: "Perfume 1" },
    { id: 2, src: readyToShopImg2, alt: "Perfume 2" },
  ];

  return (
    <div className="bg-base-200 py-10 px-3 @min-[400px]:px-4 @min-[600px]:px-5 @min-[700px]:px-7 @min-[900px]:px-8 @min-[1500px]:px-0">
      <div className="max-w-[1444px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
        {/* slider section */}
        <div className="flex gap-6 w-full">
          <div className="relative">
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="rounded-lg shadow-lg"
            />
            <button className="rounded-full p-[15px] cursor-pointer absolute top-1/2 left-0  transform -translate-y-1/2 bg-white shadow">
              <HiOutlineArrowNarrowLeft size={20} className="text-2xl font-bold" />
            </button>
          </div>

          <div className="relative">
            <img
              src={images[1].src}
              alt={images[1].alt}
              className="rounded-lg shadow-lg"
            />
            
            <button className="rounded-full p-[15px] cursor-pointer absolute top-1/2 right-0 transform -translate-y-1/2 bg-white shadow">
              <HiOutlineArrowNarrowRight size={20} className="text-2xl font-bold" />
            </button>
          </div>
        </div>

        {/* Text Section */}
        <div className="bg-[#27282C] text-white rounded-lg p-8 h-full flex flex-col justify-center">
          <p className="text-[#FF9D65] uppercase leading-[30px] text-xl">
            Ready to Shop
          </p>
          <h2 className="text-3xl font-semibold md:text-[40px] leading-[60px] mt-2 mb-6">
            Revolutionizing Your Skins <br /> Journey to Radiance
          </h2>
          <button className=" btn w-fit bg-white text-base-content items-center">
            SHOP NOW <HiOutlineArrowNarrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReadyToShop;

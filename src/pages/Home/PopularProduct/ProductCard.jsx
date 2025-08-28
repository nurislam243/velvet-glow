import React from "react";

const ProductCard = ({ image, title, subtitle, price, discount }) => {
  return (
    <div className="">
        {/* top-section */}
        <div className="bg-base-300 py-[60px] px-[30px] rounded shadow relative">
            {/* Discount badge */}
            {discount && (
                <span className="absolute top-2 left-2 bg-red-600 text-white text-sm font-bold px-2 py-1 rounded">
                {discount}
                </span>
            )}

            {/* Product Image */}
            <div className="flex justify-center">
                <img
                src={image}
                alt={title}
                className="h-[310px] object-contain"
                />
            </div>
        </div>

        {/* bottom section */}
        <div className="">
            <p className="mt-[18px] mb-2 text-[#535151] text-sm sm:text-base leading-6 dm-sans-font">{subtitle}</p>
            <h3 className="text-lg sm:text-xl leading-[36px] text-base-content font-bold">{title}</h3>
            <p className="text-[#ED0F0F] mt-1 leading-6 text-base dm-sans-font font-semibold">Price: ${price}</p>
        </div>
    </div>
  );
};

export default ProductCard;

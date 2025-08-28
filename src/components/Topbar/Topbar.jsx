import React from 'react';

const Topbar = () => {
    return (
        <div className='hidden lg:flex h-[48px] bg-[#1C1C1C] justify-center items-center mb-[6px] px-3 @min-[400px]:px-4 @min-[600px]:px-5 @min-[700px]:px-7 @min-[900px]:px-8 @min-[1500px]:px-0'>
            <h4 className='font-medium xl:font-bold text-base text-white'>30% OFF ALL ITEMS & FREE SHIPPING WITH CODE 'SPRING30" 1096 STORE CREDIT ON FIRST ORDER</h4>
        </div>
    );
};

export default Topbar;
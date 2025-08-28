import React from 'react';
import ProductCard from './ProductCard';

const PopularProduct = () => {
    return (
        <div className="bg-base-100">
            <div className='max-w-[1444px] mx-auto'>
                <h2 className='font-semibold text-[40px] leading-[60px] text-base-content text-center'>Our Popular Product</h2>

                {/* content section */}
                <div className="grid gap-6 grid-cols-4">
                    <ProductCard
                        image="../../../../src/assets/PopularProduct/popular-product-1.png"
                        title="Lipstick"
                        subtitle="Better Wood and Home"
                        price={110}
                        discount="50%"
                    />
                    <ProductCard
                        image="../../../../src/assets/PopularProduct/popular-product-2.png"
                        title="Lip Balm"
                        subtitle="Keeps lips soft and smooth"
                        price={150}
                    />
                    <ProductCard
                        image="../../../../src/assets/PopularProduct/popular-product-3.png"
                        title="Blush"
                        subtitle="Gives natural soft matte finish"
                        price={120}
                    />
                    <ProductCard
                        image="../../../../src/assets/PopularProduct/popular-product-4.png"
                        title="Eye Shadow"
                        subtitle="Soft finish with natural depth"
                        price={100}
                        discount="30%"
                    />
                    <ProductCard
                        image="../../../../src/assets/PopularProduct/popular-product-5.png"
                        title="Maskara"
                        subtitle="Gives fuller and thicker lashes"
                        price={130}
                        discount="25%"
                    />
                    <ProductCard
                        image="../../../../src/assets/PopularProduct/popular-product-6.png"
                        title="Foundation"
                        subtitle="Gives glowing and radiant skin"
                        price={125}
                    />
                    <ProductCard
                        image="../../../../src/assets/PopularProduct/popular-product-7.png"
                        title="Jel"
                        subtitle="Strong hold with natural shine"
                        price={120}
                    />
                    <ProductCard
                        image="../../../../src/assets/PopularProduct/popular-product-8.png"
                        title="Cream"
                        subtitle="Keeps skin soft and smooth"
                        price={138}
                    />
                    
                </div>
            </div>
        </div>
    );
};

export default PopularProduct;
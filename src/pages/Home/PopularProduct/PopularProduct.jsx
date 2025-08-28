import React from 'react';
import product1 from "../../../../src/assets/PopularProduct/popular-product-1.png";
import product2 from "../../../../src/assets/PopularProduct/popular-product-2.png";
import product3 from "../../../../src/assets/PopularProduct/popular-product-3.png";
import product4 from "../../../../src/assets/PopularProduct/popular-product-4.png";
import product5 from "../../../../src/assets/PopularProduct/popular-product-5.png";
import product6 from "../../../../src/assets/PopularProduct/popular-product-6.png";
import product7 from "../../../../src/assets/PopularProduct/popular-product-7.png";
import product8 from "../../../../src/assets/PopularProduct/popular-product-8.png";
import ProductCard from './ProductCard';
import Title from '../../../components/Title/Title';

const PopularProduct = () => {
    return (
        <div className="bg-base-100 pt-[100px] pb-[90px] px-3 @min-[400px]:px-4 @min-[600px]:px-5 @min-[700px]:px-7 @min-[900px]:px-8 @min-[1500px]:px-0">
            <div className='max-w-[1444px] mx-auto'>
                <Title Text={"Our Popular Product"} ></Title>

                {/* content section */}
                <div className="grid gap-6 @min-[600px]:grid-cols-2 @min-[960px]:grid-cols-3  @min-[1280px]:grid-cols-4">
                    <ProductCard
                        image={product1}
                        title="Lipstick"
                        subtitle="Better Wood and Home"
                        price={110}
                        discount="50%"
                    />
                    <ProductCard
                        image={product2}
                        title="Lip Balm"
                        subtitle="Keeps lips soft and smooth"
                        price={150}
                    />
                    <ProductCard
                        image={product3}
                        title="Blush"
                        subtitle="Gives natural soft matte finish"
                        price={120}
                    />
                    <ProductCard
                        image={product4}
                        title="Eye Shadow"
                        subtitle="Soft finish with natural depth"
                        price={100}
                        discount="30%"
                    />
                    <ProductCard
                        image={product5}
                        title="Maskara"
                        subtitle="Gives fuller and thicker lashes"
                        price={130}
                        discount="25%"
                    />
                    <ProductCard
                        image={product6}
                        title="Foundation"
                        subtitle="Gives glowing and radiant skin"
                        price={125}
                    />
                    <ProductCard
                        image={product7}
                        title="Jel"
                        subtitle="Strong hold with natural shine"
                        price={120}
                    />
                    <ProductCard
                        image={product8}
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
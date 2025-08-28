import React from 'react';
import Banner from './Banner/Banner';
import Collection from './Collection/Collection';
import ReadyToShop from './ReadyToShop/ReadyToShop';
import PopularProduct from './PopularProduct/PopularProduct';
import Testimonial from './Testimonial/Testimonial';
import LatestNews from './LatestNews/LatestNews';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Collection></Collection>
            <ReadyToShop></ReadyToShop>
            <PopularProduct></PopularProduct>
            <Testimonial></Testimonial>
            <LatestNews></LatestNews>
        </div>
    );
};

export default Home;
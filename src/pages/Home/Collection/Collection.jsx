import React from 'react';
import CollectionCard from './CollectionCard';

const Collection = () => {
    return (
        <div className='bg-base-100'>
            <div className="max-w-[1000px] mx-auto mt-[100px]">
                <h1 className='font-semibold text-[40px] leading-[60px] text-base-content text-center mb-[36px'>Browse by Collection</h1>

                {/* content */}
                <div className="grid grid-cols-4 gap-12 mb-[100px]">
                    <CollectionCard imgPath={"../../../../src/assets/Collection/Collection-img-1.png"} name={"Oil Cleansers"} unit={"4"}></CollectionCard>
                    <CollectionCard imgPath={"../../../../src/assets/Collection/Collection-img-2.png"} name={"Hand Cream"} unit={"7"}></CollectionCard>
                    <CollectionCard imgPath={"../../../../src/assets/Collection/Collection-img-3.png"} name={"Toners Skin"} unit={"6"}></CollectionCard>
                    <CollectionCard imgPath={"../../../../src/assets/Collection/Collection-img-4.png"} name={"Face Mask"} unit={"5"}></CollectionCard>
                </div>
            </div>
        </div>
    );
};

export default Collection;
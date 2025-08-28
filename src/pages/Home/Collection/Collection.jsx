import React from 'react';
import CollectionCard from './CollectionCard';
import Title from '../../../components/Title/Title';
import img1 from '../../../../src/assets/Collection/Collection-img-1.png';
import img2 from '../../../../src/assets/Collection/Collection-img-2.png';
import img3 from '../../../../src/assets/Collection/Collection-img-3.png';
import img4 from '../../../../src/assets/Collection/Collection-img-4.png';

const Collection = () => {
    return (
        <div className='bg-base-100 px-3 @min-[400px]:px-4 @min-[600px]:px-5 @min-[700px]:px-7 @min-[900px]:px-8 @min-[1500px]:px-0'>
            <div className="max-w-[1000px] mx-auto mt-[100px]">
                <Title Text={"Browse by Collection"}></Title>

                {/* content */}
                <div className="grid @min-[290px]:grid-cols-2 @min-[790px]:grid-cols-4 gap-12 mb-[100px]">
                    <CollectionCard imgPath={img1} name={"Oil Cleansers"} unit={"4"}></CollectionCard>
                    <CollectionCard imgPath={img2} name={"Hand Cream"} unit={"7"}></CollectionCard>
                    <CollectionCard imgPath={img3} name={"Toners Skin"} unit={"6"}></CollectionCard>
                    <CollectionCard imgPath={img4} name={"Face Mask"} unit={"5"}></CollectionCard>
                </div>
            </div>
        </div>
    );
};

export default Collection;
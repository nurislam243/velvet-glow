import React from 'react';

const CollectionCard = ({ imgPath, name, unit }) => {
    return (
        <div className='text-center'>
            <img src={ imgPath } alt="" />
            <h3 className='font-semibold text-[24px] leading-[36px] text-base-content mt-4 mb-2'>{ name }</h3>
            <p className='text-base text-primary leading-6'>{ unit } Items</p>
        </div>
    );
};

export default CollectionCard;
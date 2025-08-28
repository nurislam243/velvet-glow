import React from 'react';

const Title = ({Text}) => {
    return (
        <div className='mb-[36px] text-center'>
            <h2 className='font-semibold text-[25px] @min-[420px]:text-3xl @min-[1250px]:text-[40px] leading-[60px] text-base-content'>{Text}</h2>
        </div>
    );
};

export default Title;
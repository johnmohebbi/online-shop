import React from 'react';

const Cart = ({image,productData}) => {
    // console.log(image);
    return (
        <>
            <div className=' py-3 px-1.5  border-b-2 mx-1 rounded-md border-gray-600 shadow-lg mb-3 hover:shadow-xl'>
                <img className='' src={require(`../${image}`)} alt="25" />
                <h2 className='text-base font-medium md:text-lg md:mt-2 truncate'>{productData.name}</h2>
                <p className='text-xs pb-2 md:text-base'>Lorem ipsum dolor sit amet, ipsum</p>
                <h2 className='font-semibold md:text-lg'>$ {productData.price}</h2>
            </div>
        </>
    );
};

export default React.memo(Cart);
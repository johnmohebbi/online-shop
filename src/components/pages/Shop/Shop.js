import React from 'react';


import FilterNav from './FilterNav';
import Products from './Products';

const Shop = () => {
    return (
        <div className='mx-6'>
            <FilterNav />
            <Products />
        </div>
    );
};

export default Shop;
import React, { useEffect } from 'react';
import TitlePage from '../../../Shared/TitlePage';


import FilterNav from './FilterNav';
import Products from './Products';

const Shop = () => {
    
    useEffect(()=>{
        TitlePage('Shop')
    },[])
    return (
        <div className='mx-6'>
            <FilterNav />
            <Products />
        </div>
    );
};

export default Shop;
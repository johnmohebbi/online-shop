import React from "react";
import Slider from "react-slick";

//redux
import { useSelector } from "react-redux";

// import { ProductsData } from "../Shared/ProductsData";
import Cart from "../Shared/Cart";
const ProductsSlider = () => {
  const {ProductsData} = useSelector(state=>state.products);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad:true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
  };
  return (
    <>
      <h2 className="text-2xl mt-4 mb-5 underline underline-offset-4">Products: </h2>
      <Slider {...settings}>
        < >
          <Cart image={`assets/images/${ProductsData[0].imageUrl}/${ProductsData[0].name}${ProductsData[0].imageFormat}`} productData={ProductsData[0]} />
        </>
        <>
          <Cart image={`assets/images/${ProductsData[14].imageUrl}/${ProductsData[14].name}${ProductsData[14].imageFormat}`} productData={ProductsData[14]} />
        </>
        <>
          <Cart image={`assets/images/${ProductsData[20].imageUrl}/${ProductsData[20].name}${ProductsData[20].imageFormat}`} productData={ProductsData[20]} />
        </>
        <>
          <Cart image={`assets/images/${ProductsData[8].imageUrl}/${ProductsData[8].name}${ProductsData[8].imageFormat}`} productData={ProductsData[8]} />
        </>
      </Slider>
      <button  type="button" className="mb-3 text-white bg-[#4285F4] font-medium rounded-sm text-sm px-5 py-1.5 inline-flex items-center">Products</button>
    </>
  );
};

export default ProductsSlider;

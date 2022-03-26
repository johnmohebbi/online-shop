import React from "react";
import Slider from "react-slick";
//redux
import { useSelector } from "react-redux";
import Cart from "../../../Shared/Cart";
import { Link } from "react-router-dom";

const SampleShirt = () => {
  const {ProductsData} = useSelector(state=>state.products);
  const womanProducts  = ProductsData.filter(item=>item.gender === 'woman');
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <>
      <h2 className="text-2xl mt-4 mb-5 underline underline-offset-4">
        Shirt:
      </h2>
      <Slider {...settings}>
        {womanProducts.map((product) => {
          if (product.category === "shirt") {
            return (
              <div key={product.id}>
                <Cart
                  image={`assets/images/${product.imageUrl}/${product.name}${product.imageFormat}`}
                  productData={product}
                />
              </div>
            );
          }
        })}
      </Slider>
      <Link
        to="shop"
        className="mb-3 text-white bg-[#4285F4] font-medium rounded-sm text-sm px-5 py-1.5 inline-flex items-center"
      >
        Products
      </Link>
    </>
  );
};

export default SampleShirt;

import React from "react";
import Product from "./Product";
//redux
import { useSelector, useDispatch } from "react-redux";
import { selectProduct } from "../../../Redux/Products/ActionProducts";
const Products = () => {
  const data = useSelector((state) => state.products);
  const { filterProduct } = data;
  const dispatch = useDispatch();
  const productHandler = (product) => {
    dispatch(selectProduct(product));
  };
  return (
    <div className="flex  md:flex-row flex-wrap md:justify-center  ">
      {filterProduct.map((item) => {
        return (
          <Product clickHandler={productHandler} key={item.id} product={item} />
        );
      })}
    </div>
  );
};

export default Products;

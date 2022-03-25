import React from "react";
import { useSelector } from "react-redux";

const ProductPage = () => {
  const selectedProduct = useSelector((state) => state.products.selectProduct);
  console.log(selectedProduct);
  return (
    <div className="mx-6 my-4">
      <section className="flex flex-col md:flex-row ">
        <div className="md:w-[80%]">
          <img src={selectedProduct.url} alt={selectedProduct.name} />
        </div>
       <section>
       <div className="">
          <h1 className="text-4xl md:text-5xl">{selectedProduct.name}</h1>
          <p className="text-lg md:text-xl text-justify md:mt-4">{selectedProduct.description}</p>
          <p className="text-3xl md:text-4xl md:font-semibold md:mt-4">$ {selectedProduct.price}</p>
        </div>
        <div className=" text-xl font-medium py-2">
            <label>color:</label>
          <input type="radio" className="mx-3 appearance-none w-4 h-4 checked:ring-2 checked:ring-blue-700 bg-blue-500" name="color"/>
          <input type="radio" className="mx-3 appearance-none w-4 h-4 checked:ring-2 checked:ring-red-700 bg-red-500" name="color"/>
          <input type="radio" className="mx-3 appearance-none w-4 h-4 checked:ring-2 checked:ring-gray-700 bg-gray-500" name="color"/>
          <input type="radio" className="mx-3 appearance-none w-4 h-4 checked:ring-2 checked:ring-yellow-500 bg-yellow-300" name="color"/>
        </div>
        <div className=" text-xl font-medium py-2">
            <label>size:</label>
            <select className="px-1 py-2 border border-slate-600 mx-2 text-lg w-1/2 focus:outline-none rounded-sm">
              <option className="" value="S" key="small">small</option>
              <option className="" value="M" key="medium">medium</option>
              <option className="" value="L" key="large">large</option>
              <option className="" value="XL" key="xlarge">xLarge</option>
            </select>
        </div>
        <div className="mt-2 md:mt-4">counter</div>
        <button className="block bg-blue-500 mt-3 py-2 rounded text-xl font-base w-[100%] md:w-[70%] md:mx-auto">add to cart</button>
       </section>
      </section>
    </div>
  );
};

export default ProductPage;

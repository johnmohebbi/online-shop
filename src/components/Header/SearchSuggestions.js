import React from "react";

const SearchSuggestions = ({ product }) => {
  console.log(product);
  return (
    <li className="flex py-1">
        <div className="w-12 h-12">
            <img className="w-full" src={product.url} alt={product.name} />
        </div>
        <div>
            <h3>{product.name}</h3>
        </div>
    </li>
  );
};

export default SearchSuggestions;

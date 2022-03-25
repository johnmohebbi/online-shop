import React from "react";
import { Link } from "react-router-dom";

const SearchSuggestions = (props) => {
  return (
    <li className="hover:bg-indigo-50 cursor-pointer border-b pb-2 border-slate-300">
        <Link
          to={`Shop/${props.product.name}`}
          onClick={() => props.Handler(props.product)}
          className="flex"
        >
      <div className="w-12">
        <img
          className="w-full "
          src={props.product.url}
          alt={props.product.name}
        />
      </div>
        <div className="ml-2">
          <h3 className="font-semibold hover:text-indigo-400">{props.product.name}</h3>
        </div>
      </Link>
    </li>
  );
};

export default SearchSuggestions;

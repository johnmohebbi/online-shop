import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  allProducts,
  filterProduct,
  filterProductGender,
} from "../../../Redux/Products/ActionProducts";
//css
import Styles from '../FilterNav.module.css';

const FilterNav = () => {
  const [isShowFilterNavBar, setIsShowFilterNavBar] = useState(false);
  const dispatch = useDispatch();
  const filterhandler = (event) => {
    const gender = ["man", "woman"];
    if (gender.includes(event.target.dataset.name))
      dispatch(filterProductGender(event.target.dataset.name));
    else if (event.target.dataset.name === "allProducts") {
      dispatch(allProducts(event.target.dataset.name));
    } else {
      dispatch(filterProduct(event.target.dataset.name));
    }
    setIsShowFilterNavBar(false);
  };
  const hoverHandler = (e) =>{
  }
  return (
    <div>
      <nav className="relative md:static flex  flex-col items-start md:flex-row ">
        <button
          onClick={() => setIsShowFilterNavBar((prevState) => !prevState)}
          type="button"
          className=" md:hidden ext-gray-900 tracking-wider bg-white hover:bg-gray-100 font-medium rounded-sm text-sm px-5 py-2 inline-flex items-center text-center  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 pr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
            />
          </svg>
          filter
        </button>
        <section
          className={`px-3 py-2 ${
            isShowFilterNavBar ? "-translate-x-[25px]" : "-translate-x-[800px]"
          } bg-emerald-400/80 rounded shadow-xl transition-transform duration-1000 absolute top-0 left-0 w-[200px] h-auto md:translate-x-0 md:static md:flex md:h-auto md:w-fit md:bg-transparent md:shadow-none`}
        >
          <button
            onClick={filterhandler}
            className="mb-3 md:mb-0 font-semibold hover:text-slate-800 text-xl border-b border-slate-800 md:border-none md:text-lg md:pr-4"
            data-name="allProducts"
          >
            All Products
          </button>

          <ul className={`${Styles.filterContainer}  text-xl md:flex md:text-lg`}>
            <li className="mb-2 md:mb-0 md:pr-4" onMouseEnter={hoverHandler}>
              <button
                onClick={filterhandler}
                className="font-semibold md:font-normal  hover:text-slate-800"
                data-name="man"
              >
                Man
              </button>
            </li>
            <li className="mb-2 md:mb-0 md:pr-4">
              <button
                onClick={filterhandler}
                onMouseEnter={hoverHandler}
                className="font-semibold md:font-normal  hover:text-slate-800"
                data-name="woman"
              >
                Woman
              </button>
            </li>
            <li className="mb-2 md:mb-0 md:pr-4">
              <button
                onClick={filterhandler}
                onMouseEnter={hoverHandler}
                className="font-semibold md:font-normal  hover:text-slate-800"
                data-name="shoes"
              >
                Shoes
              </button>
            </li>
            <li className="mb-2 md:mb-0 md:pr-4">
              <button
                onClick={filterhandler}
                onMouseEnter={hoverHandler}
                className="font-semibold md:font-normal  hover:text-slate-800"
                data-name="watch"
              >
                Watch
              </button>
            </li>
            <li className="mb-2 md:mb-0 md:pr-4">
              <button
                onClick={filterhandler}
                onMouseEnter={hoverHandler}
                className="font-semibold md:font-normal  hover:text-slate-800"
                data-name="shirt"
              >
                Shirt
              </button>
            </li>
            <li className="mb-2 md:mb-0 md:pr-4">
              <button
                onClick={filterhandler}
                onMouseEnter={hoverHandler}
                className="font-semibold md:font-normal  hover:text-slate-800"
                data-name="bag"
              >
                Bag
              </button>
            </li>
          </ul>
        </section>
      </nav>
    </div>
  );
};

export default FilterNav;

import React, { useState, useEffect } from "react";
import Register from "./Register";
import { Link } from "react-router-dom";

//redux
import { useSelector, useDispatch } from "react-redux";
//actions
import {
  searchAction,
  selectProduct,
} from "../../Redux/Products/ActionProducts";
//logo
import Logo from "../../assets/images/logo.png";
import SearchSuggestions from "./SearchSuggestions";
const Header = () => {
  const { searchSuggestions } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [isSuggestion, setIsSuggestion] = useState(false);
  const [sidebarShow, setSidebarShow] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (event) => {
    
    setSearchValue(event.target.value);
  };

  const productHandler = (data) => {
    setIsSuggestion(false);
    setSearchValue("");
    dispatch(selectProduct(data));
  };
  useEffect(() => {
    if (searchValue.trim()) {
      setIsSuggestion(true);
      dispatch(searchAction(searchValue));
    }else {
      setIsSuggestion(false)
    }
  }, [searchValue, dispatch]);
  return (
    <>
      <Register />
      <header className="bg-slate-200 md:flex  md:justify-between py-2">
        <section className="flex px-2 justify-between  items-center md:justify-start">
          <div className="logo w-12">
            <img className="w-full" src={Logo} alt="logo" />
          </div>
          <div className="md:hidden">
            <svg
              onClick={() => setSidebarShow(true)}
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 cursor-pointer"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>

          <nav
            className={`z-[99999] ${
              sidebarShow ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300  fixed top-0 right-0 bg-violet-400/80	 w-1/2 h-screen text-center
            md:h-auto md:static md:translate-x-0 md:bg-transparent
          `}
          >
            <svg
              onClick={() => setSidebarShow(false)}
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden cursor-pointer h-6 w-6 absolute top-2 left-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <ul
              className={` mt-9   text-xl font-light md:flex md:mt-0 md:font-normal  md:text-xl md:flex-1 `}
            >
              <li className="mb-2 transition text-slate-800 md:text-slate-500 hover:text-slate-800 md:mb-0 md:pl-2 cursor-pointer">
                <Link to="/" onClick={() => setSidebarShow(false)}>
                  Home
                </Link>
              </li>
              <li className="mb-2 transition text-slate-800 md:text-slate-500 hover:text-slate-800 md:mb-0 md:pl-2 cursor-pointer">
                <Link to="Shop" onClick={() => setSidebarShow(false)}>
                  Shop
                </Link>
              </li>
              <li className="mb-2 transition text-slate-800 md:text-slate-500 hover:text-slate-800 md:mb-0 md:pl-2 cursor-pointer">
                <Link to="About" onClick={() => setSidebarShow(false)}>
                  About
                </Link>
              </li>
              <li className="mb-2 transition text-slate-800 md:text-slate-500 hover:text-slate-800 md:mb-0 md:pl-2 cursor-pointer">
                <Link to="Contact" onClick={() => setSidebarShow(false)}>
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </section>
        <div className=" px-2 flex justify-between items-center">
          <div className="relative">
            <input
              onChange={searchHandler}
              value={searchValue}
              type="text"
              placeholder="Search"
              className="pl-2 w-56  h-10 outline-none overflow-hidden rounded shadow-md bg-[#f0f0f1] text-gray-600 font-medium placeholder:text-gray-600 placeholder:opacity-70 md:mr-4 md:w-72"
            />
            {searchSuggestions.length ? (
              <ul
                className={`${
                  isSuggestion ? "block" : "hidden"
                } max-h-72 py-1 px-2 bg-slate-50 w-[calc(90vw-26px)] md:w-72 absolute top-12  z-50 rounded-t-sm rounded-b-md shadow-lg overflow-y-auto `}
              >
                {searchSuggestions.map((suggestion) => (
                  <SearchSuggestions
                    key={suggestion.id}
                    product={suggestion}
                    Handler={productHandler}
                  />
                ))}
              </ul>
            ) : null}
          </div>
          <Link to="cart">
            <div className="md:pl-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
          </Link>
        </div>
      </header>
    </>
  );
};

export default Header;

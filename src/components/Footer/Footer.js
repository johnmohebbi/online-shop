import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#272727] ">
      <section className="py-6 px-6 flex flex-col  md:flex-row md:justify-between md:gap-3">
        <div className=" md:w-1/4 ">
          <h1 className="text-white text-2xl font-medium mb-5">online Shop</h1>
          <p className="text-[rgba(255,255,255,.3)] text-justify">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </p>
          <button className="mb-3 text-yellow-600 text-base font-medium">
            <span>read more</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 inline-block ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
        <div className=" md:w-1/4  md:ml-6">
          <h1 className="mb-5 text-xl text-white font-medium">CATEGORIES</h1>
          <ul className="text-white mb-3 ">
            <li className="font-light py-0.5 text-[#ffffffb3]">
              <Link to="/">Home</Link>
            </li>
            <li className="font-light py-0.5 text-[#ffffffb3]">
              <Link to="/">Shop</Link>
            </li>
            <li className="font-light py-0.5 text-[#ffffffb3]">
              <Link to="/">Home</Link>
            </li>
            <li className="font-light py-0.5 text-[#ffffffb3]">
              <Link to="/">Contact</Link>
            </li>
          </ul>
        </div>
        <div className=" md:w-1/4  ">
          <h1 className="mb-5 text-xl text-white font-medium">Tag Clothes</h1>
          <div className="mb-3 ">
            <h4 className="border border-gray-600/75 hover:border-gray-600 cursor-pointer inline-block mr-2.5 mb-2 rounded py-.5 px-2 text-gray-300 font-extralight">
              All Products
            </h4>
            <h4 className="border border-gray-600/75 hover:border-gray-600 cursor-pointer inline-block mr-2.5 mb-2 rounded py-.5 px-2 text-gray-300 font-extralight">
              Man
            </h4>
            <h4 className="border border-gray-600/75 hover:border-gray-600 cursor-pointer inline-block mr-2.5 mb-2 rounded py-.5 px-2 text-gray-300 font-extralight">
              woman
            </h4>
            <h4 className="border border-gray-600/75 hover:border-gray-600 cursor-pointer inline-block mr-2.5 mb-2 rounded py-.5 px-2 text-gray-300 font-extralight">
              Shoes
            </h4>
            <h4 className="border border-gray-600/75 hover:border-gray-600 cursor-pointer inline-block mr-2.5 mb-2 rounded py-.5 px-2 text-gray-300 font-extralight">
              Watch
            </h4>
            <h4 className="border border-gray-600/75 hover:border-gray-600 cursor-pointer inline-block mr-2.5 mb-2 rounded py-.5 px-2 text-gray-300 font-extralight">
              Man
            </h4>
            <h4 className="border border-gray-600/75 hover:border-gray-600 cursor-pointer inline-block mr-2.5 mb-2 rounded py-.5 px-2 text-gray-300 font-extralight">
              Shirt
            </h4>
            <h4 className="border border-gray-600/75 hover:border-gray-600 cursor-pointer inline-block mr-2.5 mb-2 rounded py-.5 px-2 text-gray-300 font-extralight">
              Bag
            </h4>
          </div>
        </div>
        <div className=" md:w-1/4 ">
          <div className="mb-9">
            <h3 className="mb-5 text-xl text-white font-medium">SUBCRIBE</h3>
            <div className="flex">
              <input
                className="w-[90%] h-[48px] text-xl text-zinc-800 placeholder:text-zinc-800/70 bg-neutral-600 pl-2  rounded-l outline-none inline-block "
                type="text"
                placeholder="Enter email address"
              />
              <button className="w-14 h-[48px]   bg-yellow-600 rounded-r">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 mx-auto rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-xl text-white font-medium">FOLLOW US</h3>
            {/* github */}
            <div className="inline-block mr-2 cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 50 50"
                className="w-10 h-10 hover:stroke-2 hover:stroke-green-600 stroke-neutral-200 "
                stroke="currentColor"
              >
                {" "}
                <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z" />
              </svg>
            </div>
            {/* instagram */}
            <div className="inline-block mr-2 cursor-pointer stroke-red-600">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 50 50"
                className="w-10 h-10 hover:stroke-2 stroke-neutral-200 hover:stroke-yellow-500"
                stroke="currentColor"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
              </svg>
            </div>

            {/* linkedin */}
            <div className="inline-block mr-2 cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                className="w-10 h-10 hover:stroke-2 hover:stroke-blue-800 stroke-neutral-200 "
                stroke="currentColor"
              >
                {" "}
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z" />
              </svg>
            </div>
            {/* facebook */}
            <div className="inline-block mr-2 cursor-pointer ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 30 30"
                className="w-10 h-10 hover:stroke-2 hover:stroke-blue-600 stroke-neutral-200 "
                stroke="currentColor"
              >
                {" "}
                <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h10v-9h-3v-3h3v-1.611C16,9.339,17.486,8,20.021,8 c1.214,0,1.856,0.09,2.16,0.131V11h-1.729C19.376,11,19,11.568,19,12.718V14h3.154l-0.428,3H19v9h5c1.105,0,2-0.895,2-2V6 C26,4.895,25.104,4,24,4z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#1b1b1b] py-3.5 px-2 text-center">
        <p className="mb-2 text-[rgba(255,255,255,.3)]">
          Copyright ©2022 All rights reserved | This template is made with by
          john
        </p>
        <p className="text-[#ffffffd8] ">Terms Privacy Compliances</p>
      </div>
    </footer>
  );
};

export default Footer;

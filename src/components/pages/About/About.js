import React, { useEffect } from "react";
import ManSuit from "../../../assets/images/about/manSuit.jpg";
import Beach from "../../../assets/images/about/beach.jpg";
import TitlePage from "../../../Shared/TitlePage";
const About = () => {
  useEffect(() => {
    TitlePage("About");
  }, []);
  return (
    <div className="mx-6">
      <div>
        <h3
          className="relative pt-12 pb-10 font-bold text-4xl text-center before:content-[attr(data-bg)] before:absolute before:top-[48px] before:left-[50%] before:-translate-x-1/2 before:scale-[1.9] md:before:scale-[4] before:opacity-10 before:-z-10"
          data-bg="ABOUT US"
        >
          ABOUT US
        </h3>
        <p className="z-40 mt-8 mb-12 text-center w-[90%] md:1/2 mx-auto text-lg font-light">
          Lorem ipsum dolor sit amet, tempor incididunt ut
          <strong className="font-semibold  ">
            {" "}
            laboreconsectetur adipiscing elit, sed doeiusmod
          </strong>
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco ullamco laboris nisi ut aliquip ex ea commodo
          consequat.aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      {/*  */}
      <section>
        <div className="flex flex-col md:flex-row md:mb-36">
          <div className="mb-14 md:w-[45%]">
            <h1 className="font-semibold text-2xl mb-3 text-neutral-800">
              our product
            </h1>
            <p className="text-justify font-medium text-neutral-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div className="w-full md:w-[45%] md:ml-auto overflow-hidden ">
            <img
              className="w-[85%] mx-auto md:mx-0 rounded"
              src={Beach}
              alt="ManSuit"
              loading="lazy"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:mb-36">
          <div className="w-full md:w-[45%] md:mr-auto overflow-hidden order-2 md:orderorder-1">
            <img
              className="w-[85%] mx-auto md:mx-0 rounded"
              src={ManSuit}
              alt="ManSuit"
              loading="lazy"
            />
          </div>
          <div className="mb-14 md:w-[45%] order-1 md:order-2">
            <h1 className="font-semibold text-2xl mb-3 text-neutral-800 mt-16 md:mt-0">
              our history
            </h1>
            <p className="text-justify font-medium text-neutral-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

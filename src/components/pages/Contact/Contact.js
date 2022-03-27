import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="md:mx-6 ">
      <section className="md:grid md:grid-cols-2 md:gap-x-2 md:pt-24 md:pb-24 ">
        <form>
          <div className=" flex flex-col items-center border shadow-xl">
            <h1 className="text-3xl font-semibold text-gray-600 mb-6 mt-3">
              Contact us for your questions
            </h1>
            <div className="w-[70%] mb-4">
              <input
                className="w-full h-12 pl-3 font-semibold  text-lg border focus:border-2 border-gray-300 outline-none rounded-md"
                type="text"
                placeholder="userName"
              />
            </div>
            <div className="w-[70%] mb-4">
              <input
                className="w-full h-12 pl-3 font-semibold  text-lg border focus:border-2 border-gray-300 outline-none rounded-md"
                type="text"
                placeholder="email"
              />
            </div>
            <div className="w-[70%] mb-4">
              <input
                className="w-full h-12 pl-3 font-semibold  text-lg border focus:border-2 border-gray-300 outline-none rounded-md"
                type="text"
                placeholder="Company"
              />
            </div>
            <div className="w-[70%] mb-4">
              <textarea
                className="resize-none w-full pl-3 font-semibold  text-lg border focus:border-2 border-gray-300 outline-none rounded-md"
                rows="4"
                placeholder="Your message"
              ></textarea>
            </div>
            <button
              onClick={(e) => e.preventDefault()}
              className="text-white w-[70%] bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
            >
              Send
            </button>
          </div>
        </form>
        <div className="py-10 px-5 divide-y-2 ">
          <div className="py-2  font-medium ">
            <h2 className="text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline-block text-neutral-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="ml-1 text-neutral-700">address</span>
            </h2>
            <p className="ml-6 mt-3 text-justify text-neutral-600 ">
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classical Latin literature from 45 BC, making it over 2000 years
              old. Richard McClintock, a Latin professor at Hampden-Sydney
              College in Virginia, looked up one of the more obscure Latin
              words,
            </p>
          </div>
          <div className="py-2 font-medium ">
            <h2 className="text-xl ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block text-neutral-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="ml-1 text-neutral-700">phone</span>
            </h2>
            <p className="inline-block ml-6 mt-3 text-lg text-neutral-600">
              +98 123-456-8509
            </p>
          </div>
          <div className="py-2 font-medium shadow-md shadow-slate-300">
            <h2 className="text-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline-block text-neutral-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="ml-1 text-neutral-700">Sale Support</span>
            </h2>
            <Link
              to="/signup"
              className="inline-block text-lg ml-6 mt-3 text-teal-600 hover:text-cyan-800 transition-colors duration-300"
            >
              john@shoponline.com
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;

import React from "react";

import manStile from "../../../assets/images/banner/manSuit.webp";
import WomanStile from "../../../assets/images/banner/womanSuit.webp";
import Bag from "../../../assets/images/bag-woman/Oak Natural.jpg";
const Bannger1 = () => {
  return (
    <div className="mt-6 md:mt-14 flex flex-col md:flex-row md:gap-x-2">
      <div className="group relative mb-4 border h-64 md:h-72 border-slate-300 rounded-sm shadow-md  md:flex-1 ">
        <img className="w-full h-full" src={manStile} alt="manStile" />
        <div className="absolute top-3 left-3 font-semibold ">
          <h3 className="text-xl md:text-2xl">Man</h3>
          <h5 className="font-normal pl-1 pt-1 ">2020 Clothing </h5>
        </div>
        <span className="absolute bottom-0 inline-block w-full h-1 group-hover:bg-blue-600/80"></span>
      </div>
      <div className="group relative mb-4 border h-64 md:h-72 border-slate-300 rounded-sm shadow-md  md:flex-1 ">
        <img className="w-full h-full" src={WomanStile} alt="manStile" />
        <div className="absolute top-3 left-3 font-semibold ">
          <h3 className="text-xl md:text-2xl">Woman</h3>
          <h5 className="font-normal pl-1 pt-1 ">2020 Clothing </h5>
        </div>
        <span className="absolute bottom-0 inline-block w-full h-1 group-hover:bg-blue-600/80"></span>
      </div>
      <div className="group relative mb-4 border h-64 md:h-72 border-slate-300 rounded-sm shadow-md md:flex-1  ">
        <img className="w-full h-full" src={Bag} alt="manStile" />
        <div className="absolute top-3 left-3 font-semibold ">
          <h3 className="text-xl md:text-2xl">Bag</h3>
          <h5 className="font-normal pl-1 pt-1 ">2020 Clothing </h5>
        </div>
        <span className="absolute bottom-0 inline-block w-full h-1 group-hover:bg-blue-600/80"></span>
      </div>
    </div>
  );
};

export default Bannger1;

import React from "react";
import WomenB from "../../../assets/images/banner/womenBanner.jpg";

const WomenBanner = () => {
  return (
    <div>
      <img className="w-full md:h-[500px] " src={WomenB} alt="WomenBanner" loading="lazy"/>
    </div>
  );
};

export default WomenBanner;

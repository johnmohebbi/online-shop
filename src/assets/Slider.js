import React from "react";
import {Link} from 'react-router-dom'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-skyblue.min.css";
import "./Slider.css";
import SliderMan from "../assets/images/slider/slide-1.png";
import SliderWoman from "../assets/images/slider/slide-2.png";

const Slider = () => {
  return (
    <div >
      <Splide
        options={{
          rewind: true,
          autoplay: true,
          speed: "600",
          rewindSpeed:1500,
        }}
      >
        <SplideSlide>
          <div className="relative">
            <img src={SliderMan} alt="man" loading="lazy"/>
            <div className=" text-center absolute top-7 right-[15%] md:top-28">
              <h2 className="mb-1 font-semibold text-xl md:text-4xl md:mb-9">Collection MAN</h2>
              <Link to='/shop' className=" text-lg font-light underline-offset-4 underline hover:font-normal md:text-xl " >shop Now</Link>
            </div>
          </div>
        </SplideSlide>
        <SplideSlide>
          <div className="relative">
            <img src={SliderWoman} alt="woman" loading="lazy"/>
            <div className="font-semibold text-center absolute top-7 left-[15%] md:top-28">
              <h2 className="mb-1 font-semibold text-xl md:text-4xl md:mb-9">Collection Woman</h2>
              <Link to='/shop' className=" text-lg font-light underline-offset-4 underline hover:font-normal md:text-xl " >shop Now</Link>
            </div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
};

export default Slider;

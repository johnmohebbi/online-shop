import React,{useEffect} from "react";

//slider
import Slider from "../../../assets/Slider";
import Bannger1 from "./Bannger1";
import SampleProducts from "./SampleProducts";
import MenBanner from "./MenBanner";
import WomenBanner from "./WomenBanner";
import SampleShoes from "./SampleShoes";
import SampleShirt from "./SampleShirt";
import TitlePage from "../../../Shared/TitlePage";
const Home = () => {
  useEffect(()=>{
    TitlePage('Shop-online')
},[])
  return (
    <>
      <Slider />
      <section className="mx-6">
        <Bannger1 />
        <SampleProducts />
        <MenBanner />
        <SampleShoes />
        <WomenBanner />
        <SampleShirt />
      </section>
    </>
  );
};

export default Home;

import React from "react";
// eslint-disable-next-line
import { FeaturedProducts, Hero, Services, Contact } from "../components";
import Slider from "./SliderPage";

const HomePage = () => {
  return (
    <main>
      <Slider />
      {/* <Hero /> */}
      <FeaturedProducts />
      <Services />
      <Contact />
    </main>
  );
};

export default HomePage;

import React from "react";

import bgImg from "@/assets/hero/hero.png";

const Hero = () => {
  return (
    <div
      className="min-h-[40rem] bg-right md:bg-center bg-no-repeat bg-cover flex justify-start text-slate-100"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="wrapper w-full flex items-center justify-center md:justify-start">
        {" "}
        <div className="hero__info font-Hammer">
          <div className="hero__info-path font-medium text-base md:text-xl tracking-wide ps-5 md:ps-0">
            <p>/ Start / Categories</p>
            <p>/ Headphones and audio for gaming</p>
          </div>
          <div className="hero__info-heading mt-8">
            <h1 className="text-4xl md:text-5xl text-center md:text-left md:w-[20ch] leading-tight">
              HEADPHONES AND AUDIO FOR GAMING
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

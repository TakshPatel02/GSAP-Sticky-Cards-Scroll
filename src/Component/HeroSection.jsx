import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="w-full h-screen relative flex items-center bg-[#12110e] overflow-hidden">
        <div className="max-w-7xl">
          <h1 className="font-bold text-9xl -mt-35 text-white uppercase tracking-tight pl-12">
            <span className="font-light">The</span> Narrative
          </h1>
          <p className="text-end text-white/91 uppercase">
            An exploration of the Synthetic Era.
          </p>
          <p></p>
        </div>
        <img
          src="2.png"
          alt=""
          className="absolute -top-5 -right-55 scale-90"
        />
      </div>
      <div className="text-start font-normal text-5xl max-w-230 mx-auto text-white mt-40 tracking-wide">
        <p>
          As data conglomerates reveled in the opulence of cognitive wealth, a
          silent underclass manifested, condemned to the digital periphery.
        </p>
      </div>
    </>
  );
};

export default HeroSection;

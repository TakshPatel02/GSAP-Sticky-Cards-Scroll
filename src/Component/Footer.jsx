import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto">
      <h1 className="text-start font-normal text-5xl max-w-230 mx-auto text-white tracking-wide">
        Lost in perpetual dependency, inhabitants of the Synthetic Era found
        solace in cryptic simulations, where pain ebbed and cognitive loads
        momentarily lightened.
      </h1>
      <div className="h-screen w-full flex justify-center items-center bg-[#12110e] mt-4">
        <img src="3.png" alt="" className="size-80 " />
      </div>
      <div className="flex items-center justify-between px-12 py-12 text-white uppercase">
        <div>
            Images by Annas Muslimin on Vecteezy
        </div>
        <div className="flex gap-12">
            <p>Made by @codrops</p>
            <p>Hire us</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

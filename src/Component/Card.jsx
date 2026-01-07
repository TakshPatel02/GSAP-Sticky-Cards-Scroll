import React from "react";

const Card = ({item, index}) => {
  return (
    <div className={`card card${index + 1} sticky top-20 h-[79vh] w-120 bg-[#2f251e] rounded-2xl shadow-lg flex flex-col justify-center items-center p-4 text-white`}>
      <img className="size-40 -mt-12" src={item.imgSrc} alt="" />
      <div className="text-center uppercase tracking-tighter text-6xl mt-4">
        <h1>{item.title1}</h1>
        <h1 className="-mt-2 font-black">{item.title2}</h1>
      </div>
      <p className="text-lg text-center mt-8 max-w-100">{item.description}</p>
    </div>
  );
};

export default Card;

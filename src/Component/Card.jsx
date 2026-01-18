import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Card = ({ item, index }) => {
  const cardRef = useRef(null);

  useGSAP(() => {
    if (cardRef.current) {
      gsap.to(cardRef.current, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80px",
          end: "bottom 80px",
          scrub: 1.3,
        },
      });
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className={`card sticky top-20 h-[79vh] w-120 bg-[#2f251e] rounded-2xl shadow-lg flex flex-col justify-center items-center p-4 text-white`}
    >
      <img className="size-50 -mt-12" src={item.imgSrc} alt="" />
      <div className="text-center uppercase tracking-tighter text-6xl mt-4">
        <h1>{item.title1}</h1>
        <h1 className="-mt-2 font-black">{item.title2}</h1>
      </div>
      <p className="text-lg text-center mt-8 max-w-100">{item.description}</p>
    </div>
  );
};

export default Card;

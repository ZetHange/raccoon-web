import React from "react";

const Hero = () => {
  return (
    <div
      className="z-10 bg-no-repeat absolute w-96 h-96 opacity-5 grayscale bg-[100%]"
      style={{
        animation: "turn 180s linear infinite reverse",
        backgroundImage: "/back.png",
      }}
    ></div>
  );
};

export default Hero;

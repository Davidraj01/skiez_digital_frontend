import React from "react";

const BorderButton = () => {
  return (
    <button
      className="relative inline-flex justify-center items-center whitespace-nowrap rounded-md 
      text-base font-bold transition-transform duration-200 
      ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
      disabled:pointer-events-none disabled:opacity-50 
      group cursor-pointer border-0
      bg-[linear-gradient(#000,#000),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))]
      bg-[length:200%] 
      text-white 
      [background-clip:padding-box,border-box,border-box] [background-origin:border-box] 
      [border:calc(0.08*1rem)_solid_transparent]
      before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 
      before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))]
      dark:bg-[linear-gradient(#000,#000),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] 
      hover:scale-105 active:scale-95 h-14 px-6 py-6 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
    >
      <span className="relative z-10">Why Choose Skiez Digital</span>
    </button>
  );
};

export default BorderButton;

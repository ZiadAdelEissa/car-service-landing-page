import React from "react";
import head from "../img/head.jpg";
export default function Head() {
  return (
    <div className="header flex flex-wrap justify-center items-center w-full h-full   font-['Roboto'] ">
      <div className="header-content flex flex-wrap flex-col justify-center items-center relative  ">
        <img
          src={head}
          alt="headimg"
          className=" object-cover justify-center items-center "
        />
        <div className="header-text absolute flex flex-wrap flex-col justify-center items-center text-4xl mt-9 text-white max-lg:text-2xl text-wrap"> 
        <h1 className=" ">El akssa</h1>
        <p className=" ">Your one-stop shop for art, crafts, and more</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import repair from "../img/repair.png";
import painting from "../img/painting.png";
import plumbing from "../img/plumbing.png";
import hours from "../img/hours.png";
export default function Service() {
  return (
    <div className="service grid grid-cols-4 self-center justify-items-center w-full h-full   gap-2 max-lg:grid max-lg:grid-cols-2 max-lg:gap-1 max-sm:grid max-sm:grid-cols-1 max-sm:gap-6 text-yellow-500 text-2xl p-12 bg-[rgba(233,233,233,0.38)] ">
      <div className="service-card flex flex-wrap flex-col justify-evenly items-center  w-[200px] h-[300px] bg-[rgb(255,255,255)] backdrop-sepia-0 drop-shadow-2xl rounded-2xl hover:scale-[1.1] transition-all ">
        <i>
          <img className="icons w-[55px] h-[55px]" src={repair} alt="repair" />
        </i>
        <h1 className="">Repairs</h1>
      </div>
      <div className="service-card flex flex-wrap flex-col justify-evenly items-center w-[200px] h-[300px] bg-[rgb(255,255,255)] backdrop-sepia-0 drop-shadow-2xl rounded-2xl  hover:scale-[1.1] transition-all ">
        <i>
          <img
            className="icons w-[55px] h-[55px]"
            src={painting}
            alt="repair"
          />
        </i>
        <h1 className="">painting</h1>
      </div>
      <div className="service-card flex flex-wrap flex-col justify-evenly items-center w-[200px] h-[300px] bg-[rgb(255,255,255)] backdrop-sepia-0 drop-shadow-2xl rounded-2xl  hover:scale-[1.1] transition-all ">
        <i>
          <img
            className="icons w-[55px] h-[55px]"
            src={plumbing}
            alt="repair"
          />
        </i>
        <h1 className="">plumbing</h1>
      </div>
      <div className="service-card flex flex-wrap flex-col justify-evenly items-center w-[200px] h-[300px] bg-[rgb(255,255,255)] backdrop-sepia-0 drop-shadow-2xl rounded-2xl  hover:scale-[1.1] transition-all ">
        <i>
          <img className="icons w-[55px] h-[55px]" src={hours} alt="repair" />
        </i>
        <h1 className="">24 Hours</h1>
      </div>
    </div>
  );
}

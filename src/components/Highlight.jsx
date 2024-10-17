import React from "react";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import { highlights } from "../assets";
import { RiEBike2Line } from "react-icons/ri";

function Highlight() {
  return (
    <div className="mt-20 vsm:mt-32">
      <div className="flex flex-col justify-around md:flex-row">
        <h2 className="text-3xl md:text-5xl lg:text-7xl max-md:text-center">
          This Week's Specials!
        </h2>
        <div className="max-md:hidden flex items-center gap-2 bg-yellow-500 rounded-full px-3 lg:px-8 w-38 lg:w-48 max-md:w-24 hover:bg-red-400">
          <IoFastFoodOutline className="w-16 h-20 md:h-10" />
          <Link to="/order-online">Online Menu</Link>
        </div>
      </div>

      <div className="flex justify-around flex-wrap mt-10 md:mt-16 xl:mt-20 gap-2 relative">
        {highlights.map((item, index) => {
          return (
            <div
              key={item.name}
              className="w-full md:w-[30%] bg-slate-300 rounded-3xl 
              shadow-2xl shadow-red-800 h-auto flex flex-col justify-between hover:bg-white"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full rounded-t-3xl shadow-2xl shadow-green-800"
              />
              <div className="flex flex-col p-5 flex-grow">
                <div className="flex justify-between">
                  <h4 className="text-2xl font-bold ">{item.name}</h4>
                  <p className="text-yellow-100 ">$ {item.price}</p>
                </div>
                <p className="mt-8 flex-grow">{item.description}</p>
                <div className="flex gap-2 justify-around items-center w-46 bg-yellow-400 rounded-3xl hover:bg-red-400 h-auto p-4">
                  <Link to="">{item.order} </Link>
                  <RiEBike2Line />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Highlight;
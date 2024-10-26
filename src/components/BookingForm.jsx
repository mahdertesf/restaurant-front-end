import {React,useState} from "react";
import { IoFastFoodOutline } from "react-icons/io5";

function BookingForm({ className,date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, availableTimes,dispatch}) {
  
    

  return (

    
    <form
      className={`border p-4 m-3 shadow-xl shadow-yellow-700 hover:scale-90 ${className}`}
     
    >
      <h1 className="text-center text-yellow-600 text-2xl   lg:text-4xl my-3 w-full">
        Book Here
      </h1>
      <div className="flex flex-wrap flex-col items-center w-full">
        <div className="flex flex-col  gap-3 md:gap-x-8 justify-center my-4 md:my-8 w-full h-full">
          <div className="flex gap-2   justify-between rounded-lg p-2 m-2 shadow-md shadow-yellow-500  items-center max-vsm:flex-col ">
            <label className="text-blue-800 text-[130%] " htmlFor="res-date">
              Choose Date<span className="text-red-600"> *</span>
            </label>
            <input
              type="date"
              name="res-date"
              id="res-date"
              className="text-yellow-500 w-[40%]"
              value={date}
              onChange={(e)=> setDate(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-2   justify-between rounded-lg p-2 m-2 shadow-md shadow-yellow-500  items-center max-vsm:flex-col">
            <label
              className="text-blue-800 text-[130%] w-[40%]"
              htmlFor="res-time"
            >
              Choose Time <span className="text-red-600"> *</span>
            </label>
            <select
              name="res-time"
              id="res-time"
              className="text-yellow-500 w-[40%]"
              value={time}
              onChange={(e) => {
                setTime(e.target.value);
                dispatch({ type: "updateTimes", payload: e.target.value });
              }} 
              required
            >
             {availableTimes.availableTimes.map((time,index)=>{
              return <option key={time+index}>{time}</option>
             })}
            </select>
          </div>
          <div className="flex gap-2   justify-between rounded-lg p-2 m-2 shadow-md shadow-yellow-500  items-center max-vsm:flex-col">
            <label
              className="text-blue-800 text-[130%] w-[40%]"
              htmlFor="guests"
            >
              Number of Guests <span className="text-red-600"> *</span>
            </label>
            <input
              className="text-yellow-500 w-[40%]"
              type="number"
              name="guests"
              id="guests"
              min="1"
              max="10"
              placeholder="1"
              value={guests}
              onChange={(e)=> setGuests(e.target.value)}
              required
            />
          </div>
          <div className="flex gap-2   justify-between rounded-lg p-2 m-2 shadow-md shadow-yellow-500  items-center max-vsm:flex-col">
            <label
              className="text-blue-800 text-[130%] w-[40%]"
              htmlFor="occasion"
            >
              Occasions <span className="text-red-600"> *</span>
            </label>
            <select
              name="occasion"
              id="occasion"
              className="text-yellow-500 w-[40%]"
              value={occasion}
              onChange={(e)=> setOccasion(e.target.value)}
              required
            >
              <option>Anniversary</option>
              <option>Birthday</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 bg-yellow-500 rounded-3xl w-auto p-3 mt-3 hover:bg-red-400 items-center">
          <button className="">
            Reserve a Table
          </button>
          <IoFastFoodOutline className="w-8 h-8" />
        </div>
      </div>
    </form>
    
  );
}

export default BookingForm;

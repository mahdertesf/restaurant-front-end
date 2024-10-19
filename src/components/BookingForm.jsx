import React from "react";
import { IoFastFoodOutline } from "react-icons/io5";

function BookingForm({ className }) {
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
              Choose Date
            </label>
            <input
              type="date"
              name="res-date"
              id="res-date"
              className="text-yellow-500 w-[40%]"
            />
          </div>
          <div className="flex gap-2   justify-between rounded-lg p-2 m-2 shadow-md shadow-yellow-500  items-center max-vsm:flex-col">
            <label
              className="text-blue-800 text-[130%] w-[40%]"
              htmlFor="res-time"
            >
              Choose Time
            </label>
            <select
              name="res-time"
              id="res-time"
              className="text-yellow-500 w-[40%]"
            >
              <option>17:00</option>
              <option>18:00</option>
              <option>19:00</option>
              <option>20:00</option>
              <option>21:00</option>
              <option>22:00</option>
            </select>
          </div>
          <div className="flex gap-2   justify-between rounded-lg p-2 m-2 shadow-md shadow-yellow-500  items-center max-vsm:flex-col">
            <label
              className="text-blue-800 text-[130%] w-[40%]"
              htmlFor="guests"
            >
              Number of Guests
            </label>
            <input
              className="text-yellow-500 w-[40%]"
              type="number"
              name="guests"
              id="guests"
              min="1"
              max="10"
              placeholder="1"
            />
          </div>
          <div className="flex gap-2   justify-between rounded-lg p-2 m-2 shadow-md shadow-yellow-500  items-center max-vsm:flex-col">
            <label
              className="text-blue-800 text-[130%] w-[40%]"
              htmlFor="occasion"
            >
              Occasions
            </label>
            <select
              name="occasion"
              id="occasion"
              className="text-yellow-500 w-[40%]"
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

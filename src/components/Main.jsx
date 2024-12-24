import React, { useState, useReducer, useEffect } from "react";
import BookingForm from "./BookingForm";

const seededRandom = function (seed) {
  var m = 2**35 - 31;
  var a = 185852;
  var s = seed % m;
  return function () {
      return (s = s * a % m) / m;
  };
}

const fetchAPI = function(date) {
  let result = [];
  let random = seededRandom(date.getDate());

  for(let i = 17; i <= 23; i++) {
      if(random() < 0.5) {
          result.push(i + ':00');
      }
      if(random() < 0.5) {
          result.push(i + ':30');
      }
  }
  return result;
};
const submitAPI = function(formData) {
  return true;
};



function Main({
  className,
  date,
  setDate,
  time,
  setTime,
  guests,
  setGuests,
  occasion,
  setOccasion,
}) {

  const initializeTimes=()=>{
    return {
      availableTimes: fetchAPI(new Date())
    }
     
 }


function updateTimes(state, action) {
  switch (action.type) {
    case "updateTimes":
      return {
        availableTimes: state.availableTimes.filter(
          (time) => time !== action.payload
        ),
      };
    case "resetTimes":
      return initializeTimes();
    default:
      return state;
  }
}

  
 
  const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes);

  

  

  return (
    <>
      <BookingForm
        className={className}
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion}
        setOccasion={setOccasion}
        availableTimes={state}
        dispatch={dispatch}
      />
    </>
  );
}

export default Main;

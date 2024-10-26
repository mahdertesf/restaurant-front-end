import React, { useState, useReducer } from "react";
import BookingForm from "./BookingForm";

const initializeTimes = () => {
  return {
    availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
  };
};

function updateTimes(state, action) {
  switch (action.type) {
    case "updateTimes":
      return {
        availableTimes: state.availableTimes.filter(
          (time) => time !== action.payload
        ),
      };
    case "resetTimes":
        return initializeTimes()
    default:
      return state;
  }
}

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
  const [state, dispatch] = useReducer(updateTimes, {}, initializeTimes);
  console.log(state.availableTimes);

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

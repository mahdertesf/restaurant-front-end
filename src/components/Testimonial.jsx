import React, { useState, useEffect } from "react";
import { testimonials } from "/src/assets/index";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

function Testimonial() {
  const totalTestimonials = testimonials.length;
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    setIndex((prevIndex) => (prevIndex === 0 ? totalTestimonials - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setIndex((prevIndex) => (prevIndex === totalTestimonials - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 1600); 

    return () => clearInterval(interval); 
  },[index] );

  

  return (
    <div className="flex flex-col mt-10 lg:mt-20 h-auto">
      <h1 className="text-center text-4xl md:text-8xl text-yellow-500  ">Testimonials</h1>
      <div className="flex items-center justify-center mt-10">
        <button onClick={handlePrevious} className="p-2">
          <GrPrevious />
        </button>
        <div className="flex flex-wrap justify-center w-full md:w-[30%]">
          {testimonials.map((testimonial, i) => {
            return (
              i === index && (
                <div key={testimonial.name} className="w-full text-center">
                  <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-36 h-36 mx-auto mb-4" />
                  <h3 className="text-xl font-bold">{testimonial.name}</h3>
                  <p className="text-neutral-500">{testimonial.description}</p>
                </div>
              )
            );
          })}
        </div>
        <button onClick={handleNext} className="p-2">
          <GrNext />
        </button>
      </div>
    </div>
  );
}

export default Testimonial;
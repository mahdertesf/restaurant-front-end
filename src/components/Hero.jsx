import React from 'react'
import restaurantfood from '/src/assets/icons_assets/restauranfood.jpg'
import {Link} from 'react-router-dom'
import { CiForkAndKnife } from "react-icons/ci";
function Hero() {
  return (
    <div className='shadow-2xl shadow-red-700'>
      <div className=' bg-green-950 text-white px-10 py-24 h-auto'>
      <div className='h-full py-10 md:py-20 '>
        <h1 className='text-yellow-400 text-4xl lg:text-8xl max-sm:text-3xl'>Little Lemon</h1>
        <h3 className='text-lg lg:text-2xl md:text-2xl lg:mt-3'>Chicago</h3>
        <div className='flex flex-col w-1/2 h-full'>
        <p className='mt-2 md:mt-8 max-sm:text-sm lg:text-lg text-neutral-200 '>
          We are a family owned mediterranean restaurant,
          focused on traditional recipes served with a modern
          twist.
        </p>
        <div className=' flex  items-center gap-2 bg-yellow-600 w-auto  
        rounded-full mt-3 lg:w-[30%] lg:h-22 lg:py-2 px-6 hover:bg-red-400'>
        <CiForkAndKnife className='w-10 h-10'/>
        <Link to='/order-online' className=''>Reserve a Table</Link>
        </div>
       
        </div>
        
        
      </div>
      

    </div>
      <img src={restaurantfood} className='w-[40vw]
      shadow-2xl shadow-yellow-600 
      h-[40%] max-sm:h-[30vh] rounded-xl  absolute right-16 max-sm:right-8 -mt-80 max-sm:-mt-44 object-cover '/>
    </div>
    
  )
}

export default Hero
import {useState,React} from 'react'
import BookingForm from '../components/BookingForm'
import Main from '../components/Main'


function Reservations() {

  const [date,setDate]=useState('') 
  const [time,setTime]=useState('')
  const [guests,setGuests]=useState('')
  const [occasion,setOccasion]=useState('Anniversary')
  console.log(`Date: ${date} Time: ${time} Guests: ${guests} Occasion: ${occasion}`)
  return (
    <main className='py-40'>
      <section className=''>
        <Main className='m-10 lg:mx-72' 
        date={date}
        setDate={setDate}
        time={time}
        setTime={setTime}
        guests={guests}
        setGuests={setGuests}
        occasion={occasion} 
        setOccasion={setOccasion}
        />
        
      </section>
    </main>
  );
}

export default Reservations
import React from 'react'
import Hero from "../components/Hero";
import Highlight from "../components/Highlight";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <main>
      <header>
        <Hero/>
      </header>
      <section>
        <Highlight/>
      </section>
      <section>
        <Testimonial/>
      </section>

    </main>
  )
}

export default Home
import * as React from "react"

const Hero = () => {
  return (
    <div class="hero min-h-screen bg-base-200 pt-20 lg:p-10">
      <div class="hero-content grid-cols-3 flex-col md:grid">
        <div class="text-center md:col-span-2 md:text-left">
          <h1 class="mb-7 text-3xl font-bold  md:text-7xl ">
            82% of my SHSAT students got in to a Specialized High School.
          </h1>
          <p class="text-md mb-0 text-base md:py-1 md:text-2xl">
            I'd like to offer you the opportunity to increase your child's
            chances of passing the SHSAT and attending a top tier school.
          </p>
          <button class="btn btn-primary my-10">Free consultation</button>
        </div>
        <img
          src="https://placeimg.com/260/400/arch"
          class="col-1 max-w-sm justify-self-end rounded-lg shadow-2xl"
        />
      </div>
    </div>
  )
}

export default Hero

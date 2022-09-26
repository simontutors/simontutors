import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div class=" min-h-screen bg-primary py-20 md:min-h-0 md:py-0 ">
      <div class="grid-cols-12 flex-col bg-secondary text-secondary-content md:mx-7 md:grid lg:mx-20 lg:px-10 lg:py-20">
        <section class="text-center md:col-span-7 md:text-left ">
          <h1 class="text-3xl font-bold  md:text-5xl lg:text-7xl">
            More than 70% of my SHSAT students have gone on to a Specialized
            High School.
          </h1>
        </section>
        <StaticImage
          src="../../images/simon.jpeg"
          alt="Simon"
          class="rounded-lg shadow-2xl md:col-span-3 md:col-start-9 lg:mt-32"
        />
        <section class="text-center md:col-span-5 md:-mt-36 md:text-left">
          <p class="text-md mb-0 text-base md:text-2xl">
            This is your opportunity to increase your child's chances of passing
            the SHSAT and attending a top tier school.
          </p>
          <a
            class="btn btn-accent my-10 text-accent-content"
            href="#consultation"
          >
            Get Your Free consultation
          </a>
        </section>
      </div>
    </div>
  )
}

export default Hero

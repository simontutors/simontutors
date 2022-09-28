import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div class=" min-h-screen bg-black md:min-h-0  md:py-20 ">
      <div class="flex grid-cols-12 flex-col px-10 text-gray-100 md:mx-7 md:grid lg:mx-10 lg:py-20">
        <section class="text-center md:col-span-7 md:text-left ">
          <h1 class="pt-20 text-3xl font-bold md:pt-0  md:text-5xl lg:text-7xl">
            More than 70% of my SHSAT students have gone on to a Specialized
            High School.
          </h1>
        </section>
        <StaticImage
          src="../../images/simon.jpeg"
          alt="Simon"
          class="rounded-lg shadow-2xl md:col-span-3 md:col-start-9 lg:mt-32"
        />
        <section class="mt-10 text-center md:col-span-5 md:-mt-10 md:pl-20 md:text-left">
          <p class="text-md mb-0 text-base md:text-2xl">
            I am offerring you the opportunity to increase your child's chances
            of passing the SHSAT and attending a top tier school.
          </p>
          <a class="btn-primaryh btn btn-md my-10 " href="#consultation">
            Get Your Free consultation
          </a>
        </section>
      </div>
    </div>
  )
}

export default Hero

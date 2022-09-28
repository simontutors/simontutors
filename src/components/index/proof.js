import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

const Proof = () => {
  return (
    <section class="proof flex grid-cols-12 flex-col gap-20 bg-gray-900/10 py-20 px-5 md:grid md:py-56 md:px-20">
      <div class="col-span-8 col-start-1">
        <StaticImage src="../../images/milancard.jpg" alt="Milan" />
      </div>
      <div class="col-span-4 col-start-8 md:pt-28">
        <StaticImage src="../../images/reesemessage.jpg" alt="Reese" />
      </div>
      <div class="col-span-5 col-start-1 md:-mt-72">
        <StaticImage src="../../images/maggiemessage.jpeg" alt="Maggie" />
      </div>
      <div class="col-span-6 col-start-7 md:mt-96 md:pt-44 ">
        <StaticImage src="../../images/lucasmessage.jpg" alt="Lucas" />
      </div>
      <div class="col-span-4 col-start-2 md:-mt-28">
        <StaticImage src="../../images/jennymessage.jpeg" alt="Jenny" />
      </div>
    </section>
  )
}

export default Proof

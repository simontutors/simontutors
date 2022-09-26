import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

const Proof = () => {
  return (
    <section class="proof grid grid-cols-12 gap-20 bg-accent py-56">
      <div class="col-span-8 col-start-2">
        <StaticImage src="../../images/milancard.jpg" alt="Milan" />
      </div>
      <div class="col-span-4 col-start-8 pt-28">
        <StaticImage src="../../images/reesemessage.jpg" alt="Reese" />
      </div>
      <div class="col-span-5 col-start-2 -mt-72">
        <StaticImage src="../../images/maggiemessage.jpeg" alt="Maggie" />
      </div>
      <div class="col-span-5 col-start-7 mt-96 pt-44 ">
        <StaticImage src="../../images/lucasmessage.jpg" alt="Lucas" />
      </div>
      <div class="col-span-3 col-start-3 -mt-28">
        <StaticImage src="../../images/jennymessage.jpeg" alt="Jenny" />
      </div>
    </section>
  )
}

export default Proof

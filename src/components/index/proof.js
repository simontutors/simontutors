import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

const Proof = () => {
  return (
    <section class="proof columns-3 bg-primary p-10">
      <StaticImage src="../../images/milancard.jpg" alt="A dinosaur" />
      <StaticImage src="../../images/lucasmessage.jpg" alt="A dinosaur" />
      <StaticImage src="../../images/reesemessage.jpg" alt="A dinosaur" />
      <StaticImage src="../../images/maggiemessage.jpeg" alt="A dinosaur" />
      <StaticImage src="../../images/jennymessage.jpeg" alt="A dinosaur" />
    </section>
  )
}

export default Proof

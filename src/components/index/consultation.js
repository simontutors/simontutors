import * as React from "react"
import { Widget } from "@typeform/embed-react"
import { Component } from "react"
import { Script } from "gatsby"

const CTA = () => {
  return <Widget id="nt5EzOXk" style={{ height: "100%" }} className="my-form" />
}

const Consultation = () => {
  return (
    <div id="consultation" class="grid  grid-cols-12 py-36 px-5 lg:px-36">
      <div class="col-span-12 ">
        <div
          data-tf-widget="nt5EzOXk"
          data-tf-hide-headers
          data-tf-iframe-props="title=Simon Tutors Consultation"
          data-tf-medium="snippet"
          data-tf-disable-auto-focus
          className="typeform"
        ></div>
        <Script src="//embed.typeform.com/next/embed.js"></Script>
      </div>
    </div>
  )
}

export default Consultation

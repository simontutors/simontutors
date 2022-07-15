import * as React from "react"
import { Widget } from "@typeform/embed-react"

const CTA = () => {
  return <Widget id="nt5EzOXk" style={{ height: "100%" }} className="my-form" />
}

const Consultation = () => {
  return (
    <div class="grid grid-cols-12 bg-stone-800 p-20 min-h-screen">
      <div class="col-span-12">
        <CTA />
      </div>
    </div>
  )
}

export default Consultation

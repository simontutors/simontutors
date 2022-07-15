import * as React from "react"
import { Widget } from "@typeform/embed-react"
import { Component } from "react"
// import the component
import Mailchimp from "react-mailchimp-form"

const CTA = () => {
  return <Widget id="nt5EzOXk" style={{ height: "100%" }} className="my-form" />
}

const Consultation = () => {
  return (
    <div class="grid min-h-screen grid-cols-12 bg-stone-800 p-20">
      <div class="col-span-8 ">
        <div class="block rounded-lg bg-white p-6 shadow-lg">
          <Mailchimp
            action="https://simontutors.us17.list-manage.com/subscribe/post?u=7cbc691cff7a3c07af7f4c45d&amp;id=bc507d2537"
            //Adding multiple fields:
            fields={[
              {
                name: "FNAME",
                placeholder: "Your name",
                type: "text",
                required: true,
              },
              {
                name: "EMAIL",
                placeholder: "Email",
                type: "email",
                required: true,
              },
              {
                name: "PHONE",
                placeholder: "Phone Number",
                type: "text",
                required: true,
              },
              {
                name: "GRADE",
                placeholder:
                  "Your child's current grade or most recently completed grade",
                type: "text",
                required: true,
              },
            ]}
            // Change predetermined language
            messages={{
              sending: "Sending...",
              success: "I'll be in contact soon!",
              error: "An unexpected internal error has occurred.",
              empty: "Please enter all fields.",
              duplicate: "This email has already been used.",
              button: "Request your consultation!",
            }}
            // Add a personalized class
            className="mailchimpform"
          />
        </div>
      </div>
    </div>
  )
}

export default Consultation

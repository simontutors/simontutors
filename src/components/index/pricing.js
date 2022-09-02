import * as React from "react"
import PriceCard from "./pricecard"

const base = 120
const projectHours = 80
const twoHourDiscountRate = 0.8125
const projecyDiscountRate = 0.8
const summerDiscountRate = 0.8

const oneHour = base
const twoHour = base * 2 * twoHourDiscountRate
const projectBased = twoHour * projectHours * projecyDiscountRate

const oneHourSummer = oneHour * summerDiscountRate
const twoHourSummer = twoHour * summerDiscountRate
const projectBasedSummer = projectBased * summerDiscountRate

const Pricing = () => {
  return (
    <section class="bg-base-200 md:p-20">
      <h1 class="text-4xl">Pricing</h1>
      <div class="grid-cols-3 gap-20 md:grid ">
        <PriceCard
          type="1 hour"
          price={oneHour}
          recommendation="ideal for the beginning of the tutoring process until the student has enough stamina for longer sessions"
        />
        <PriceCard
          type="2 hours"
          price={twoHour}
          recommendation="best when the exam is sooner than 5 months
        and the student can handle longer periods of focus"
        />
        <PriceCard
          type="Project based"
          price={projectBased.toLocaleString()}
          recommendation="best when the exam is not within 5 months and
        the student can meet at least 2-3 times a week, and
        if they are fully committed to put in the work"
        />
      </div>

      <div class="mt-20 bg-base-300 p-12">
        <p class="">
          ** Project based tutoring is effectively an "unlimitted tutoring
          plan". We have sessions as often as possible with time for homework in
          between. The total amount is due upfront. You may also pay in 3
          installments with an additional 5% convenience fee: 20 percent
          upfront, 40% after the first 20 tutoring hours, and the rest after the
          next 20 tutoring hours.
        </p>
        <p>
          If you start with hourly sessions, book less than 30 hours, and later
          switch to Project Based tutoring, you will recieve a pro-rated price.
        </p>
      </div>
    </section>
  )
}

export default Pricing

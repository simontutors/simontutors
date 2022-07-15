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
          recommendation="good for trial sessions and building stamina at the beginning of the tutoring process"
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
          recommendation="best when the exam is not within 5 months,
        the student can meet at least 2-3 times a week, and
        if they are fully committed to put in the work"
        />
      </div>

      <p class="pt-5">
        ** Project based tutoring is effectively an "unlimitted tutoring plan".
        We have sessions as often as possible with time for homework in between.
        The total amount is due upfront. You may also pay in 3 installments with
        an additional 5% convenience fee: 20 percent upfront, 40% after the
        first 20 tutoring hours, and the rest after the next 20 tutoring hours.
      </p>
      <p>
        If you start with hourly sessions, book less than 30 hours, and later
        switch to Project Based tutoring, you will recieve a pro-rated price.
      </p>

      <h2 class="mt-20 mb-8 text-2xl">
        Summer rates <br />
        (July - September 30)
      </h2>
      <table class="table ">
        <thead>
          <tr>
            <th>Tutoring</th>
            <th>Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1 hour</th>
            <td>${oneHourSummer}</td>
          </tr>

          <tr class="active">
            <th>2 hours</th>
            <td>${twoHourSummer}</td>
          </tr>

          <tr>
            <th>Project based</th>
            <td>${projectBasedSummer.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Pricing

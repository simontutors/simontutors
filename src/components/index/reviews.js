import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

const Review = ({
  imgsrc,
  imgalt,
  name,
  relationship,
  school,
  review,
  children,
}) => {
  return (
    <div class="card mb-20 rounded-lg bg-primary p-5 text-primary-content">
      <p>{review}</p>
      <div class="grid grid-cols-12 ">
        <div class="col-span-3">{children}</div>
        <div class="place-center col-span-9 flex flex-col justify-center bg-accent text-accent-content">
          <span class="pl-3">{name}</span>
          <span class="pl-3">{relationship}</span>
          <span class="pl-3">({school})</span>
        </div>
      </div>
    </div>
  )
}

const Reviews = () => {
  return (
    <section class="reviews grid-cols-12 gap-32 bg-base-300 p-5 py-20 md:grid lg:columns-2 lg:px-20 lg:py-36">
      <div class="col-span-7">
        <Review
          name="Jiyoung K."
          relationship="Reese's mom"
          school="HSMSE"
          review="After working with Simon for 2 months, my son increased his SHSAT score by 150 points… enough to get him into his first choice school. Simon is the best SHSAT tutor ever (I’ve had many other tutors previously). When my son first started working with Simon, he could not finish the practice test, despite working with another private tutor and being enrolled in Kaplan. He exceeded all expectations and built my son’s confidence in himself. Simon is extremely knowledgeable, strategic, and focused on getting the highest score possible, and he will get your child there. My son says that Simon is THE reason he will go to his first choice school."
        >
          <StaticImage
            src="../../images/jiyoung.jpg"
            alt="Jiyoung"
            class="bwimg"
          />
        </Review>
      </div>
      <div class="col-span-6 col-start-6">
        <Review
          name="Anja S."
          relationship="Lucas' mom"
          school="HSMSE"
          review="Simon has been tutoring our son Lucas last year for the SHSAT exam. We  were very happy with him and his approach to the test, he gradually prepared Lucas for the test and once he had solid knowledge of the topics they worked on timing which is an important component of the exam. We are still in touch with Simon and from the time to time he is working with Lucas on certain subjects. I would definitely recommend him as a tutor and are happy to answer any questions !"
        >
          <StaticImage src="../../images/anja.jpeg" alt="Anja" />
        </Review>
      </div>
    </section>
  )
}

export default Reviews

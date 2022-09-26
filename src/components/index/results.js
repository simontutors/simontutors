import * as React from "react"

const Result = ({ result, reflection }) => {
  return (
    <details class="mb-4 text-base-content">
      <summary class="my-4 rounded-md bg-base-200 py-2 px-4 font-semibold">
        {result}
      </summary>
      <p class="rounded-md bg-base-100 py-2 px-4 ">{reflection}</p>
    </details>
  )
}

const Results = () => {
  return (
    <section class="bg-base-300 text-gray-700">
      <div class="mx-auto px-5 py-56">
        <div class=" flex flex-wrap sm:mx-auto lg:w-4/5">
          <div class="w-full px-4 lg:w-1/2">
            <Result
              result="2015 Sudat K. Stuyvesant"
              reflection="Sudat was my very first 1-on-1 student for the SHSATs. Very hardworking student whose goal was to get a perfect score from the very start. Thanks to his level of commitment I was able to develop and test a new personal prep strategy. Towards the end Sudat had taken just about every practice test that was available at the time - multiple times."
            />
            <Result
              result="2016 Yusha K. Stuyvesant"
              reflection="Yusha was Sudat's younger brother. Spurred by Sudat's success, Yusha was motivated to apply for Stuyvesant from the very start."
            />
            <Result
              result="2016 Milan H. Brooklyn Tech"
              reflection="I started working with Milan within 2 months of the exam. He was prepping with Kaplan up to that point, and his parents wanted a second opinion. His knowledge of the exam materials was good, but I felt that he needed more experience with a variety of practice tests."
            />
            <Result
              result="2016 Reese KD. HSMSE"
              reflection="I started working with Reese a few months before the exam. His practice tests at Kaplan were alarming, and his self-confidence was basically shot. With only a limited amount of time before the exam, we focused on his strongest section of the exam (math) until he was consistently answering at least 90% of the math questions correctly. When we moved on to working on the English section, his performance on practice tests was much higher, and after explainging how to take advantage of the grading curves, his outlook on the exam was much much better."
            />
          </div>
          <div class="w-full px-4 lg:w-1/2">
            <Result
              result="2017 Mason L. Brooklyn Tech"
              reflection="Mason was one of my favorite students to ever teach. She was extremely competitive and motivated to do better than her peers. There was a month where she had to leave for summer camp. I assigned a bunch of practice questions, and tests, and a schedule. Despite being in an environment where most of her friends were having fun and enjoying summer, Mason completed all of her assigned work, self-graded herself, and knew exactly what she was having trouble with when we resumed our tutoring."
            />
            <Result result="2018 Lucas SV. Brooklyn Tech" reflection="qqq" />
            <Result result="2018 Jullian A. Xavier (HSPT)" reflection="qqq" />
            <Result result="2019 Ethan M. Brooklyn Tech" reflection="qqq" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Results

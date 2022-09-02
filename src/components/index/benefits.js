import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Benefits = () => {
  return (
    <div style={{ display: "grid" }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
      <StaticImage
        className="my-28 ml-20 w-4/6"
        transformOptions={{
          duotone: { shadow: "#002FA7", highlight: "#ffffff" },
        }}
        quality="100"
        style={{
          gridArea: "1/1",
          // You can set a maximum height for the image, if you wish.
        }}
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={1 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt=""
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={"../../images/student.jpg"}
        formats={["auto", "webp", "avif"]}
      />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <div class=" px-10 py-20 pt-20 ">
          <div class="grid-cols-12  lg:grid">
            <div className="col-span-5 col-start-4 mt-36 bg-primary p-10 text-lg text-primary-content">
              <h1 class="text-2xl">Specially customized 1-on-1 tutoring</h1>
              <p>
                My private tutoring allows your child to practice with problem
                solving strategies that are especially suited for them - based
                on 2000+ hours of experience with SHSAT students at tutoring
                centers and private prep. I will expose them to multiple
                strategies, until we find the strategies that they are best
                with.
              </p>
            </div>
          </div>
          <div class="mb-20  grid-cols-12 lg:grid">
            <div className="col-span-5 col-start-8 mt-36 bg-primary p-10 text-lg text-primary-content">
              <h1 class="text-2xl">Old fashioned cram style</h1>
              <p>
                Predictable timeline. First we do a quick review of all the
                subjects on the exam. Then they start working on problems
                slightly harder than the average exam question. After they take
                as many exam level practice tests as possible right up to the
                exam.
              </p>
              {/* <div>
        or the most part, most students are able to prepare for standardized
          exams the exact same way. All we have to do is identify which subjects
          they are having trouble with and then show them different problem
          solving strategies. And then we work on their timing.
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Benefits

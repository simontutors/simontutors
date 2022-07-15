import * as React from "react"

const Review = ({ imgsrc, imgalt, name, relationship, school, review }) => {
  return (
    <div class="my-5 rounded-lg bg-slate-800 p-5 shadow-xl">
      <p>{review}</p>
      <div class="grid grid-cols-12 place-content-center">
        <div class="col-span-3">
          <img src={imgsrc} alt={imgalt} />
        </div>
        <div class="col-span-9 flex flex-col pl-3 ">
          <span class="pl-3">{name}</span>
          <span class="pl-3">{relationship}</span>
          <span class="pl-3">({school})</span>
        </div>
      </div>
    </div>
  )
}

export default Review

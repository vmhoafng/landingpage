import * as React from "react";

import star from "../../assets/img/userRatingStar.svg";
export default function TopReview({ rates }) {
  // Fnt return star based on the rating
  function rating(userRate, index) {
    return Array.from({ length: userRate }, () => (
      <img key={index++} src={star} alt="" className="inline" />
    ));
  }
  return (
    <section className="mt-6 w-11/12 lg:w-3/4 m-auto">
      {rates.map((item, index) => {
        return (
          <div
            key={index}
            className={
              "relative flex items-end justify-end pb-[17rem] gap-10" +
              (index % 2 ? " flex-row-reverse" : "")
            }>
            <img
              alt=""
              src={item.img}
              className={
                index === 0 || !(index % 2)
                  ? "absolute w-[40vw] bottom-72 left-0 lg:left-24"
                  : "absolute w-[40vw] bottom-72 right-0 lg:right-24"
              }
            />
            <div className="w-1/2 h-[30vw] bg-[#2E5E2D]"></div>
            <div className="w-1/2 md:w-[32%]">
              <div>{rating(item.rate, index)}</div>
              <q className="text-xl mt-5">
                {item.comment || "can not load comment"}
              </q>
              <p className="font-bold text-3xl mt-5">{item.name}</p>
              <p className="uppercase text-xl mt-4">{item.country}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
}

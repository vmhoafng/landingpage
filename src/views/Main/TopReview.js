import React, { Component } from "react";
import star from "../../assets/img/userRatingStar.svg";
export default class TopReview extends Component {
  // Fnt return star based on the rating
  rating(userRate, index) {
    return Array.from({ length: userRate }, () => (
      <img key={index++} src={star} alt="" className="inline" />
    ));
  }
  render() {
    return (
      <section className="mt-6 w-11/12 lg:w-3/4 m-auto">
        {this.props.rates.map((item, index) => {
          return index === 0 || !(index % 2) ? (
            <div
              key={index}
              className="relative flex items-end justify-end pb-[17rem] gap-10">
              <img
                alt=""
                src={item.img}
                className="absolute w-[40vw] bottom-72 left-0 lg:left-24"
              />
              <div className="w-1/2 h-[30vw] bg-[#2E5E2D]"></div>
              <div className="w-1/2 md:w-[32%]">
                <div>{this.rating(item.rate, index)}</div>
                <q className="text-xl mt-5">
                  I used to spend hours writing creative copy, but now all I do
                  is tell Rytr what I need and it writes everything for me. It's
                  the ultimate AI content writer, and a must-have tool for
                  bloggers, marketers, & entrepreneurs.
                </q>
                <p className="font-bold text-3xl mt-5">{item.name}</p>
                <p className="uppercase text-xl mt-4">{item.country}</p>
              </div>
            </div>
          ) : (
            <div
              key={index}
              className="relative flex items-end justify-end flex-row-reverse pb-[17rem] gap-10">
              <img
                alt=""
                src={item.img}
                className="absolute w-[40vw] bottom-72 right-0 lg:right-24"
              />
              <div className="w-1/2 h-[30vw] bg-[#2E5E2D]"></div>
              <div className="w-1/2 md:w-[32%]">
                <div>{this.rating(item.rate, index)}</div>
                <p className="text-xl mt-5">
                  <span>"</span>I used to spend hours writing creative copy, but
                  now all I do is tell Rytr what I need and it writes everything
                  for me. It's the ultimate AI content writer, and a must-have
                  tool for bloggers, marketers, & entrepreneurs.<span>"</span>
                </p>
                <p className="font-bold text-3xl mt-5">{item.name}</p>
                <p className="uppercase text-xl mt-4">{item.country}</p>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}

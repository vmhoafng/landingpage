import React, { Component } from "react";
import star from "../../assets/img/userRatingStar.svg";
import user from "../../assets/img/user.png";
export default class TopReview extends Component {
  userReview = [
    {
      id: 1,
      name: "John Lennon",
      rate: 4,
      country: "United States",
      img: user,
    },
    {
      id: 2,
      name: "Paul McCarthy",
      rate: 2,
      country: "United States",
      img: user,
    },
    {
      id: 3,
      name: "Ringo Star",
      rate: 3,
      country: "United States",
      img: user,
    },
  ];
  rating(userRate) {
    for (let i = 0; i < userRate; i++) {
      <img src={star} alt="" className="inline" />;
    }
  }
  render() {
    return (
      <>
        {this.userReview.map((item, index) => {
          return index === 0 || !(index % 2) ? (
            <div
              key={index}
              className="relative flex items-end justify-end pb-[17rem] gap-10">
              <img
                alt=""
                src={item.img}
                className="absolute bottom-72 left-0"
              />
              <div className="w-1/2 h-[507px] bg-[#2E5E2D]"></div>
              <div className="w-[32%]">
                <div>{this.rating(item.rate)}</div>
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
          ) : (
            <div
              key={index}
              className="relative flex items-end justify-end flex-row-reverse pb-[17rem] gap-10">
              <img
                alt=""
                src={item.img}
                className="absolute bottom-72 right-0"
              />
              <div className="w-1/2 h-[507px] bg-[#2E5E2D]"></div>
              <div className="w-[32%]">
                <div>{this.rating(item.rate)}</div>
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
      </>
    );
  }
}

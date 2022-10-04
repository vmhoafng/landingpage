import React, { Component } from "react";
import insImg1 from "../../assets/img/ins1.png";
import insImg2 from "../../assets/img/ins2.png";
import insImg3 from "../../assets/img/ins3.png";
import insImg4 from "../../assets/img/ins4.png";
import insImg5 from "../../assets/img/ins5.png";
import insImg6 from "../../assets/img/ins6.png";
export default class Instagram extends Component {
  InsImg = [
    {
      img: insImg1,
    },
    {
      img: insImg2,
    },
    {
      img: insImg3,
    },
    {
      img: insImg4,
    },
    {
      img: insImg5,
    },
    {
      img: insImg6,
    },
  ];
  render() {
    return (
      <div className="flex flex-wrap items-center justify-center lg:justify-between gap-4">
        {this.InsImg.map((item, index) => {
          return (
            <img
              key={index}
              alt=""
              src={item.img}
              className="w-10/12 lg:w-[32%] "
            />
          );
        })}
      </div>
    );
  }
}

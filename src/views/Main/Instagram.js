import React, { Component } from "react";
import instagram from "../../assets/img/instagram.svg";
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
      <section className="flex flex-col justify-center items-center w-11/12 lg:w-3/4 m-auto bg-black gap-[70px]">
        <div className="relative mt-20">
          <div className="absolute bg-[#DEE1DD] p-3 rounded-[100%] left-1/2 -translate-x-1/2 -translate-y-full lg:transform-none  lg:left-16 ">
            <img alt="" src={instagram} className="" />
          </div>
          <h2 className="text-4xl md:text-6xl text-white font-bold mb-10 text-center">
            #plantgallery
          </h2>
          <p className="text-[#BABABA] text-[25px] text-center">
            Our community has a thing for plant styling. Get inspired.
          </p>
        </div>
        <button className="bg-gradient-to-b from-[#5EEE6D] to-[#2E5E2D] text-white text-[25px] py-[13.75px] px-6 rounded-full">
          @plantgallery
        </button>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {this.InsImg.map((item, index) => {
            return (
              <img
                key={index}
                alt=""
                src={item.img}
                className="w-10/12 md:w-5/12 lg:w-[30%] "
              />
            );
          })}
        </div>
      </section>
    );
  }
}

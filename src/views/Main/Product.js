import React, { Component } from "react";
import star from "../../assets/img/totalRatingStar.svg";
import prod1 from "../../assets/img/prod1.png";
import prod2 from "../../assets/img/prod2.png";
import prod3 from "../../assets/img/prod3.png";
import prod4 from "../../assets/img/prod4.png";
import prod5 from "../../assets/img/prod5.png";
import prod6 from "../../assets/img/prod6.png";
export default class Product extends Component {
  prods = [
    {
      name: "",
      currentPrice: 1500,
      price: 2000,
      sale: 500,
      img: prod1,
    },
    {
      name: "",
      currentPrice: 1500,
      price: 2000,
      sale: 500,
      img: prod2,
    },
    {
      name: "",
      currentPrice: 1500,
      price: 2000,
      sale: 500,
      img: prod3,
    },
    {
      name: "",
      currentPrice: 1500,
      price: 2000,
      sale: 500,
      img: prod4,
    },
    {
      name: "",
      currentPrice: 1500,
      price: 2000,
      sale: 500,
      img: prod5,
    },
    {
      name: "",
      currentPrice: 1500,
      price: 2000,
      sale: 500,
      img: prod6,
    },
  ];
  render() {
    return (
      <>
        {this.prods.map((prod, index) => {
          if (index < 3) {
            return (
              <div
                key={index}
                className="w-[32%] flex flex-col items-center justify-center gap-4">
                <div className="relative w-full">
                  <img alt="" src={prod.img} className="w-full" />
                  <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                    <span className="text-[#096F00] text[18px] font-semibold">
                      5.0
                    </span>
                    <span className="border-[#727272] border-[1px] h-[10px]"></span>
                    <span className="text[18px]">125</span>
                    <img alt="" src={star} />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-[#595858]">
                    {prod.name || "Name of the plant"}
                  </p>
                  <p className="flex items-center gap-1 font-semibold text-2xl">
                    {prod.currentPrice}
                    <span className="line-through text-[14px] text-[#595858]">
                      {prod.price}
                    </span>
                  </p>
                  <p className="italic font-light text-[#F93636] text-[12px]">
                    Rs. {prod.sale} off
                  </p>
                </div>
              </div>
            );
          } else {
            return (
              <div
                key={index}
                className="w-[32%] flex flex-col items-center justify-center mt-20 gap-4">
                <div className="relative w-full">
                  <img alt="" src={prod.img} className="w-full" />
                  <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                    <span className="text-[#096F00] text[18px] font-semibold">
                      5.0
                    </span>
                    <span className="border-[#727272] border-[1px] h-[10px]"></span>
                    <span className="text[18px]">125</span>
                    <img alt="" src={star} />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <p className="text-[#595858]">
                    {prod.name || "Name of the plant"}
                  </p>
                  <p className="flex items-center gap-1 font-semibold text-2xl">
                    {prod.currentPrice}
                    <span className="line-through text-[14px] text-[#595858]">
                      {prod.price}
                    </span>
                  </p>
                  <p className="italic font-light text-[#F93636] text-[12px]">
                    Rs. {prod.sale} off
                  </p>
                </div>
              </div>
            );
          }
        })}
      </>
    );
  }
}

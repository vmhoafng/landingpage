import React, { Component } from "react";
import star from "../../assets/img/totalRatingStar.svg";

export default class Product extends Component {
  render() {
    return (
      <div className="flex items-center justify-center flex-wrap w-11/12 lg:w-3/4 gap-[14px] rounded-[20px]">
        {this.props.prods.map((prod, index) => {
          return (
            <div
              key={index}
              className={
                "w-10/12 md:w-[32%] flex flex-col items-center justify-center gap-4" +
                  index >=
                3
                  ? " mt-20"
                  : ""
              }>
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
        })}
      </div>
    );
  }
}

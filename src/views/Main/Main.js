import React, { Component } from "react";
import floatPlant from "../../assets/img/floatPlant.png";
import floatPlant1 from "../../assets/img/floatPlant1.png";
import floatPlant2 from "../../assets/img/floatPlant2.png";
// import floatPlant3 from "../../assets/img/floatPlant3.png";
import shipping from "../../assets/img/Shipping.png";
import Product from "./Product";
export default class Main extends Component {
  render() {
    return (
      <div>
        <section className="flex items-center justify-center bg-gradient-to-b from-[#ECECEC] via-[#ECECEC] to-[#AEAEAE] py-44">
          <div className="flex items-center justify-start w-3/4">
            <div className="flex flex-col gap-10 w-3/4 z-20">
              <h1 className="font-bold text-[90px] leading-[6rem]">
                <span className="text-[#096F00] ">One-Stop Shop</span>
                <br /> For All Your
                <br /> Garden Needs
              </h1>
              <p className="text-xl font-medium w-[75%]">
                Plant Gallery is committed to providing our customers with
                secure shipping options that ensure their products arrive in
                good condition.
              </p>
              <div className="flex justify-start items-center">
                <button className="text[18px] mr-5 font-semibold text-white bg-gradient-to-b from-[#5EEE6D] to-[#2E5E2D] py-4 px-12 rounded-full">
                  BUY PLANTS
                </button>
                <p className="font-semibold text[18px]">
                  6000 people like <span className="text-[#096F00]">you</span>
                  <br />
                  have sopped at PlantGallery!
                </p>
              </div>
            </div>
            <img src={floatPlant} alt="" className="absolute right-44 w-[37.26vw]" />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center relative w-100% overflow-hidden pt-36">
          <div className="flex items-start justify-center gap-[78px] z-10">
            <div className="flex flex-col items-center justify-center w-[13%] gap-4 text-center">
              <img src={shipping} alt="" className="w-[109px] " />
              <p className="font-semibold text-2xl">Free Shipping</p>
              <p className="">Across West and East from handpicked sellers </p>
            </div>{" "}
            <div className="flex flex-col items-center justify-center w-[13%] gap-4 text-center">
              <img src={shipping} alt="" className="w-[109px] " />
              <p className="font-semibold text-2xl">100% Natural</p>
              <p className="">Eat Local, Consume local, closure to nature</p>
            </div>{" "}
            <div className="flex flex-col items-center justify-center w-[13%] gap-4 text-center">
              <img src={shipping} alt="" className="w-[109px] " />
              <p className="font-semibold text-2xl">Handmade</p>
              <p className="">Made with passion by 300+ curators across</p>
            </div>
            <div className="flex flex-col items-center justify-center w-[13%] gap-4 text-center">
              <img src={shipping} alt="" className="w-[109px] " />
              <p className="font-semibold text-2xl">Curated Products</p>
              <p className="">Made with passion by 300+ curators across</p>
            </div>{" "}
          </div>
          <img
            src={floatPlant1}
            alt=""
            className="absolute right-[-10rem] top-0 w-[41.15vw]"
          />
          <div className="flex flex-col items-center justify-center mt-56">
            <h2 className="font-bold text-6xl capitalize z-10">
              our <span className="text-[#2E5E2D]">best seller</span>
            </h2>
            <div className="flex items-center justify-center gap-[29px] my-20 z-10">
              <button className="border-[#5EEE6D] filter-active px-[52px] py-[23px] text-3xl rounded-full uppercase">
                New arrivals
              </button>{" "}
              <button className="border-2 border-[#5EEE6D] px-[52px] py-[23px] text-3xl rounded-full uppercase">
                best seller
              </button>{" "}
              <button className="border-2 border-[#5EEE6D] px-[52px] py-[23px] text-3xl rounded-full uppercase">
                top rated
              </button>
            </div>
            <div className="flex items-center justify-center flex-wrap w-3/4 gap-[14px] rounded-[20px]">
              <Product />
            </div>
          </div>
        </section>
        <section className="relative mt-[150px] ">
          <img
            alt=""
            src={floatPlant2}
            className="absolute top-[-17rem] left-[-15rem] z-10 w-[63.125vw]"
          />
          <div className="w-full">
            <div className="flex flex-col gap-10 items-center justify-center bg-bg-pattern z-20 bg-no-repeat w-full bg-cover h-[809px]">
              <p className="font-bold text-6xl text-white z-20 opacity-80">
                Everyone loves a green gift
              </p>
              <button className="uppercase text-[25px] px-[72px] py-4 bg-[#2E5E2D] rounded-full z-20">
                <span className="text-white opacity-80">
                  shop your favourite plant
                </span>
              </button>
            </div>
            <div className="bg-[#2E5E2D] w-full h-[809px] absolute top-0 opacity-50"></div>
          </div>
        </section>
      </div>
    );
  }
}

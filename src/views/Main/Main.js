import React, { Component } from "react";
import instagram from "../../assets/img/instagram.svg";
import floatPlant from "../../assets/img/floatPlant.png";
import floatPlant1 from "../../assets/img/floatPlant1.png";
import floatPlant2 from "../../assets/img/floatPlant2.png";
// import floatPlant3 from "../../assets/img/floatPlant3.png";
import shipping from "../../assets/img/Shipping.png";
import Product from "./Product";
import Instagram from "./Instagram";
import TopReview from "./TopReview";
export default class Main extends Component {
  render() {
    return (
      <div>
        <section className="flex items-center justify-center bg-gradient-to-b from-[#ECECEC] via-[#ECECEC] to-[#AEAEAE] py-44">
          <div className="flex items-center justify-start w-11/12 lg:w-3/4">
            <div className="flex flex-col gap-10 w-11/12 lg:w-3/4 z-20">
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
            <img
              src={floatPlant}
              alt=""
              className="absolute left-0 md:right-52 top-56 blur-sm md:blur-none"
            />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center relative w-100% overflow-hidden pt-36">
          <div className="flex flex-col md:flex-row items-center justify-center gap-[78px] z-10">
            <div className="flex md:flex-col items-center justify-center md:w-[13%] gap-4 text-center">
              <img src={shipping} alt="" className="w-1/4 " />
              <p className="font-semibold text-2xl">Free Shipping</p>
              <p className="font-medium">Across West and East from handpicked sellers </p>
            </div>{" "}
            <div className="flex md:flex-col items-center justify-center md:w-[13%] gap-4 text-center">
              <img src={shipping} alt="" className="w-1/4 " />
              <p className="font-semibold text-2xl">100% Natural</p>
              <p className="font-medium">Eat Local, Consume local, closure to nature</p>
            </div>{" "}
            <div className="flex md:flex-col items-center justify-center md:w-[13%] gap-4 text-center">
              <img src={shipping} alt="" className="w-1/4 " />
              <p className="font-semibold text-2xl">Handmade</p>
              <p className="font-medium">Made with passion by 300+ curators across</p>
            </div>
            <div className="flex md:flex-col items-center justify-center md:w-[13%] gap-4 text-center">
              <img src={shipping} alt="" className="w-1/4 " />
              <p className="font-semibold text-2xl">Curated Products</p>
              <p className="font-medium">Made with passion by 300+ curators across</p>
            </div>{" "}
          </div>
          <img
            src={floatPlant1}
            alt=""
            className="absolute right-[-10rem] top-0 blur-sm md:blur-none"
          />
          <div className="flex flex-col items-center justify-center mt-56">
            <h2 className="font-bold text-6xl text-center capitalize z-10">
              our <span className="text-[#2E5E2D]">best seller</span>
            </h2>
            <div className="flex items-center justify-center gap-[29px] my-20 z-10">
              <button className="border-[#5EEE6D] filter-active lg:px-[52px] lg:py-[23px] lg:text-3xl rounded-full uppercase">
                New arrivals
              </button>{" "}
              <button className="border-2 border-[#5EEE6D] lg:px-[52px] lg:py-[23px] lg:text-3xl rounded-full uppercase">
                best seller
              </button>{" "}
              <button className="border-2 border-[#5EEE6D] lg:px-[52px] lg:py-[23px] lg:text-3xl rounded-full uppercase">
                top rated
              </button>
            </div>
            <div className="flex items-center justify-center flex-wrap w-11/12 lg:w-3/4 gap-[14px] rounded-[20px]">
              <Product />
            </div>
          </div>
        </section>
        <section className="relative mt-[150px] ">
          <img
            alt=""
            src={floatPlant2}
            className="absolute top-[-17rem] left-[-15rem] z-10 "
          />
          <div className="w-full">
            <div className="flex flex-col gap-10 items-center justify-center bg-bg-pattern z-20 bg-no-repeat w-full bg-cover h-[809px]">
              <h2 className="text-center font-bold text-6xl text-white z-20 opacity-80">
                Everyone loves a green gift
              </h2>
              <button className="uppercase text-[25px] px-[72px] py-4 bg-[#2E5E2D] rounded-full z-20">
                <span className="text-white opacity-80">
                  shop your favourite plant
                </span>
              </button>
            </div>
            <div className="bg-[#2E5E2D] w-full h-[809px] absolute top-0 opacity-50"></div>
          </div>
        </section>
        <section className="mt-6 w-11/12 lg:w-3/4 m-auto">
          <TopReview />
        </section>
        <section className="flex flex-col justify-center items-center w-11/12 lg:w-3/4 m-auto bg-black gap-[70px]">
          <div className="relative mt-20">
            <div className="absolute bg-[#DEE1DD] p-3 rounded-[100%] left-1/2 -translate-x-1/2 -translate-y-full  lg:left-16 ">
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
          <Instagram />
        </section>
        <section className="mt-28">
          <div className="bg-bg-pattern-2 h-[458px] bg-cover bg-no-repeat flex items-center justify-center">
            <div className="w-11/12 lg:w-3/4 flex flex-col gap-8">
              <p className="text-[#2E5E2D] text-[50px]">
                Sign up to our newsletter
              </p>
              <p className="text-[#666866] text-[20px]">
                Stay up to date on the latest news with our carefully curated
                newsletters.
              </p>
              <form className="flex h-20 w-4/5">
                <input className="w-4/5 rounded-l-[20px] outline-none px-10 h-full" />
                <button className="h-full rounded-r-[20px] text-[20px] bg-[#2E5E2D] uppercase px-12 text-white">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

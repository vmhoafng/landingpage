import React, { Component } from "react";
import instagram from "../../assets/img/instagram.svg";
import insImg1 from "../../assets/img/ins1.png";
import insImg2 from "../../assets/img/ins2.png";
import insImg3 from "../../assets/img/ins3.png";
import insImg4 from "../../assets/img/ins4.png";
import insImg5 from "../../assets/img/ins5.png";
import insImg6 from "../../assets/img/ins6.png";
import floatPlant from "../../assets/img/floatPlant.png";
import floatPlant1 from "../../assets/img/floatPlant1.png";
import floatPlant2 from "../../assets/img/floatPlant2.png";
import user from "../../assets/img/user.png";
// import floatPlant3 from "../../assets/img/floatPlant3.png";
import shipping from "../../assets/img/Shipping.png";
import star from "../../assets/img/userRatingStar.svg";
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
            <img
              src={floatPlant}
              alt=""
              className="absolute md:right-52 top-56 blur-sm md:blur-none"
            />
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
            className="absolute right-[-10rem] top-0 blur-sm md:blur-none"
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
            className="absolute top-[-17rem] left-[-15rem] z-10 "
          />
          <div className="w-full">
            <div className="flex flex-col gap-10 items-center justify-center bg-bg-pattern z-20 bg-no-repeat w-full bg-cover h-[809px]">
              <h2 className="font-bold text-6xl text-white z-20 opacity-80">
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
        <section className="mt-6 w-3/4 m-auto">
          <div className="relative flex items-end justify-end pb-[17rem] gap-10">
            <img alt="" src={user} className="absolute top-[-125px] left-0" />
            <div className="w-1/2 h-[507px] bg-[#2E5E2D]"></div>
            <div className="w-[32%]">
              <div>
                <img src={star} alt="" className="inline" />
                <img src={star} alt="" className="inline" />
                <img src={star} alt="" className="inline" />
                <img src={star} alt="" className="inline" />
                <img src={star} alt="" className="inline" />
              </div>
              <p className="text-xl mt-5">
                <span>"</span>I used to spend hours writing creative copy, but
                now all I do is tell Rytr what I need and it writes everything
                for me. It's the ultimate AI content writer, and a must-have
                tool for bloggers, marketers, & entrepreneurs.<span>"</span>
              </p>
              <p className="font-bold text-3xl mt-5">John Paul</p>
              <p className="uppercase text-xl mt-4">Founder, plant kingdom</p>
            </div>
          </div>
          <div className="relative flex items-end justify-end flex-row-reverse pb-[17rem] gap-10">
            <img alt="" src={user} className="absolute top-[-125px] right-0" />
            <div className="w-1/2 h-[507px] bg-[#2E5E2D]"></div>
            <div className="w-[32%]">
              <div>
                <img src={star} alt="" className="inline" />
                <img src={star} alt="" className="inline" />
                <img src={star} alt="" className="inline" />
                <img src={star} alt="" className="inline" />
                <img src={star} alt="" className="inline" />
              </div>
              <p className="text-xl mt-5">
                <span>"</span>I used to spend hours writing creative copy, but
                now all I do is tell Rytr what I need and it writes everything
                for me. It's the ultimate AI content writer, and a must-have
                tool for bloggers, marketers, & entrepreneurs.<span>"</span>
              </p>
              <p className="font-bold text-3xl mt-5">John Paul</p>
              <p className="uppercase text-xl mt-4">Founder, plant kingdom</p>
            </div>
          </div>
          <div className="relative flex items-end justify-end pb-[14rem] gap-10">
            <img alt="" src={user} className="absolute top-[-125px] left-0" />
            <div className="w-1/2 h-[507px] bg-[#2E5E2D]"></div>
            <div className="w-[32%]">
              <div>
                <img src={star} alt="" className="inline" />
                <img src={star} alt="" className="inline" />
                <img src={star} alt="" className="inline" />
                <img src={star} alt="" className="inline" />
                <img src={star} alt="" className="inline" />
              </div>
              <p className="text-xl mt-5">
                <span>"</span>I used to spend hours writing creative copy, but
                now all I do is tell Rytr what I need and it writes everything
                for me. It's the ultimate AI content writer, and a must-have
                tool for bloggers, marketers, & entrepreneurs.<span>"</span>
              </p>
              <p className="font-bold text-3xl mt-5">John Paul</p>
              <p className="uppercase text-xl mt-4">Founder, plant kingdom</p>
            </div>
          </div>
        </section>
        <section className="flex flex-col justify-center items-center w-3/4 m-auto bg-black gap-[70px]">
          <div className="relative mt-20">
            <div className="absolute bg-[#DEE1DD] p-3 rounded-[100%] left-16">
              <img alt="" src={instagram} className="" />
            </div>
            <h2 className="text-6xl text-white font-bold mb-10 text-center">
              #plantgallery
            </h2>
            <p className="text-[#BABABA] text-[25px]">
              Our community has a thing for plant styling. Get inspired.
            </p>
          </div>
          <button className="bg-gradient-to-b from-[#5EEE6D] to-[#2E5E2D] text-white text-[25px] py-[13.75px] px-6 rounded-full">
            @plantgallery
          </button>
          <div className="flex flex-wrap items-center justify-between">
            <img alt="" src={insImg1} className="w-[32%] " />
            <img alt="" src={insImg2} className="w-[32%] " />
            <img alt="" src={insImg3} className="w-[32%] " />
            <img alt="" src={insImg4} className="w-[32%] mt-7" />
            <img alt="" src={insImg5} className="w-[32%] mt-7" />
            <img alt="" src={insImg6} className="w-[32%] mt-7" />
          </div>
        </section>
        <section className="mt-28">
          <div className="bg-bg-pattern-2 h-[458px] bg-cover bg-no-repeat flex items-center justify-center">
            <div className="w-3/4 flex flex-col gap-8">
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

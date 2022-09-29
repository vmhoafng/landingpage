import React, { Component } from "react";
import plant from "../../assets/img/plant.png";
import floatPlant from "../../assets/img/floatPlant.png";
import floatPlant2 from "../../assets/img/floatPlant2.png";
// import floatPlant3 from "../../assets/img/floatPlant3.png";
import shipping from "../../assets/img/Shipping.png";
import star from "../../assets/img/star.svg";
import prod1 from "../../assets/img/prod1.png";
import prod2 from "../../assets/img/prod2.png";
import prod3 from "../../assets/img/prod3.png";
import prod4 from "../../assets/img/prod4.png";
import prod5 from "../../assets/img/prod5.png";
import prod6 from "../../assets/img/prod6.png";
export default class Main extends Component {
  render() {
    return (
      <div>
        <section className="flex items-center justify-center bg-gradient-to-b from-[#ECECEC] via-[#ECECEC] to-[#AEAEAE] py-44">
          <div className="flex items-center justify-start w-3/4 ">
            <div className="flex flex-col gap-10 w-3/4">
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
            <img src={plant} alt="" className="absolute right-44" />
          </div>
        </section>
        <section className="flex flex-col items-center justify-center relative w-100% overflow-hidden pt-36">
          <div className="flex items-center justify-center gap-[78px]">
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
            src={floatPlant}
            alt=""
            className="absolute right-[-10rem] top-0"
          />
          <h2 className="font-bold text-6xl capitalize mt-56">
            our <span className="text-[#2E5E2D]">best seller</span>
          </h2>
          <div className="flex items-center justify-center gap-[29px] my-20">
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
            <div className="w-[32%] flex flex-col items-center justify-center ">
              <div className="relative w-full">
                <img alt="" src={prod1} className="w-full" />
                <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                  <span className="text-[#096F00] text[18px] font-semibold">
                    5.0
                  </span>
                  <span className="border-[#727272] border-[1px] h-[10px]"></span>
                  <span className="text[18px]">125</span>
                  <img alt="" src={star} />
                </div>
              </div>
              <p className="text-[#595858]">Name of the plant</p>
              <p className="flex items-center gap-1 font-semibold text-2xl">
                1500
                <span className="line-through text-[14px] text-[#595858]">
                  2000
                </span>
              </p>
              <p className="italic font-light text-[#F93636] text-[12px]">
                Rs. 500 off
              </p>
            </div>{" "}
            <div className="w-[32%] flex flex-col items-center justify-center ">
              <div className="relative w-full">
                <img alt="" src={prod2} className="w-full" />
                <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                  <span className="text-[#096F00] text[18px] font-semibold">
                    5.0
                  </span>
                  <span className="border-[#727272] border-[1px] h-[10px]"></span>
                  <span className="text[18px]">125</span>
                  <img alt="" src={star} />
                </div>
              </div>
              <p className="text-[#595858]">Name of the plant</p>
              <p className="flex items-center gap-1 font-semibold text-2xl">
                1500
                <span className="line-through text-[14px] text-[#595858]">
                  2000
                </span>
              </p>
              <p className="italic font-light text-[#F93636] text-[12px]">
                Rs. 500 off
              </p>
            </div>{" "}
            <div className="w-[32%] flex flex-col items-center justify-center ">
              <div className="relative w-full">
                <img alt="" src={prod3} className="w-full" />
                <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                  <span className="text-[#096F00] text[18px] font-semibold">
                    5.0
                  </span>
                  <span className="border-[#727272] border-[1px] h-[10px]"></span>
                  <span className="text[18px]">125</span>
                  <img alt="" src={star} />
                </div>
              </div>
              <p className="text-[#595858]">Name of the plant</p>
              <p className="flex items-center gap-1 font-semibold text-2xl">
                1500
                <span className="line-through text-[14px] text-[#595858]">
                  2000
                </span>
              </p>
              <p className="italic font-light text-[#F93636] text-[12px]">
                Rs. 500 off
              </p>
            </div>{" "}
            <div className="w-[32%] flex flex-col items-center justify-center mt-20">
              <div className="relative w-full">
                <img alt="" src={prod4} className="w-full" />
                <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                  <span className="text-[#096F00] text[18px] font-semibold">
                    5.0
                  </span>
                  <span className="border-[#727272] border-[1px] h-[10px]"></span>
                  <span className="text[18px]">125</span>
                  <img alt="" src={star} />
                </div>
              </div>
              <p className="text-[#595858]">Name of the plant</p>
              <p className="flex items-center gap-1 font-semibold text-2xl">
                1500
                <span className="line-through text-[14px] text-[#595858]">
                  2000
                </span>
              </p>
              <p className="italic font-light text-[#F93636] text-[12px]">
                Rs. 500 off
              </p>
            </div>
            <div className="w-[32%] flex flex-col items-center justify-center mt-20">
              <div className="relative w-full">
                <img alt="" src={prod5} className="w-full" />
                <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                  <span className="text-[#096F00] text[18px] font-semibold">
                    5.0
                  </span>
                  <span className="border-[#727272] border-[1px] h-[10px]"></span>
                  <span className="text[18px]">125</span>
                  <img alt="" src={star} />
                </div>
              </div>
              <p className="text-[#595858]">Name of the plant</p>
              <p className="flex items-center gap-1 font-semibold text-2xl">
                1500
                <span className="line-through text-[14px] text-[#595858]">
                  2000
                </span>
              </p>
              <p className="italic font-light text-[#F93636] text-[12px]">
                Rs. 500 off
              </p>
            </div>{" "}
            <div className="w-[32%] flex flex-col items-center justify-center mt-20">
              <div className="relative w-full">
                <img alt="" src={prod6} className="w-full" />
                <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                  <span className="text-[#096F00] text[18px] font-semibold">
                    5.0
                  </span>
                  <span className="border-[#727272] border-[1px] h-[10px]"></span>
                  <span className="text[18px]">125</span>
                  <img alt="" src={star} />
                </div>
              </div>
              <p className="text-[#595858]">Name of the plant</p>
              <p className="flex items-center gap-1 font-semibold text-2xl">
                1500
                <span className="line-through text-[14px] text-[#595858]">
                  2000
                </span>
              </p>
              <p className="italic font-light text-[#F93636] text-[12px]">
                Rs. 500 off
              </p>
            </div>{" "}
            <div className="w-[32%] flex flex-col items-center justify-center mt-20">
              <div className="relative w-full">
                <img alt="" src={prod1} className="w-full" />
                <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                  <span className="text-[#096F00] text[18px] font-semibold">
                    5.0
                  </span>
                  <span className="border-[#727272] border-[1px] h-[10px]"></span>
                  <span className="text[18px]">125</span>
                  <img alt="" src={star} />
                </div>
              </div>
              <p className="text-[#595858]">Name of the plant</p>
              <p className="flex items-center gap-1 font-semibold text-2xl">
                1500
                <span className="line-through text-[14px] text-[#595858]">
                  2000
                </span>
              </p>
              <p className="italic font-light text-[#F93636] text-[12px]">
                Rs. 500 off
              </p>
            </div>{" "}
            <div className="w-[32%] flex flex-col items-center justify-center mt-20">
              <div className="relative w-full">
                <img alt="" src={prod2} className="w-full" />
                <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                  <span className="text-[#096F00] text[18px] font-semibold">
                    5.0
                  </span>
                  <span className="border-[#727272] border-[1px] h-[10px]"></span>
                  <span className="text[18px]">125</span>
                  <img alt="" src={star} />
                </div>
              </div>
              <p className="text-[#595858]">Name of the plant</p>
              <p className="flex items-center gap-1 font-semibold text-2xl">
                1500
                <span className="line-through text-[14px] text-[#595858]">
                  2000
                </span>
              </p>
              <p className="italic font-light text-[#F93636] text-[12px]">
                Rs. 500 off
              </p>
            </div>{" "}
            <div className="w-[32%] flex flex-col items-center justify-center mt-20">
              <div className="relative w-full">
                <img alt="" src={prod3} className="w-full" />
                <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                  <span className="text-[#096F00] text[18px] font-semibold">
                    5.0
                  </span>
                  <span className="border-[#727272] border-[1px] h-[10px]"></span>
                  <span className="text[18px]">125</span>
                  <img alt="" src={star} />
                </div>
              </div>
              <p className="text-[#595858]">Name of the plant</p>
              <p className="flex items-center gap-1 font-semibold text-2xl">
                1500
                <span className="line-through text-[14px] text-[#595858]">
                  2000
                </span>
              </p>
              <p className="italic font-light text-[#F93636] text-[12px]">
                Rs. 500 off
              </p>
            </div>{" "}
            <div className="w-[32%] flex flex-col items-center justify-center mt-20">
              <div className="relative w-full">
                <img alt="" src={prod4} className="w-full" />
                <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                  <span className="text-[#096F00] text[18px] font-semibold">
                    5.0
                  </span>
                  <span className="border-[#727272] border-[1px] h-[10px]"></span>
                  <span className="text[18px]">125</span>
                  <img alt="" src={star} />
                </div>
              </div>
              <p className="text-[#595858]">Name of the plant</p>
              <p className="flex items-center gap-1 font-semibold text-2xl">
                1500
                <span className="line-through text-[14px] text-[#595858]">
                  2000
                </span>
              </p>
              <p className="italic font-light text-[#F93636] text-[12px]">
                Rs. 500 off
              </p>
            </div>
            <div className="w-[32%] flex flex-col items-center justify-center mt-20">
              <div className="relative w-full">
                <img alt="" src={prod5} className="w-full" />
                <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                  <span className="text-[#096F00] text[18px] font-semibold">
                    5.0
                  </span>
                  <span className="border-[#727272] border-[1px] h-[10px]"></span>
                  <span className="text[18px]">125</span>
                  <img alt="" src={star} />
                </div>
              </div>
              <p className="text-[#595858]">Name of the plant</p>
              <p className="flex items-center gap-1 font-semibold text-2xl">
                1500
                <span className="line-through text-[14px] text-[#595858]">
                  2000
                </span>
              </p>
              <p className="italic font-light text-[#F93636] text-[12px]">
                Rs. 500 off
              </p>
            </div>{" "}
            <div className="w-[32%] flex flex-col items-center justify-center mt-20">
              <div className="relative w-full">
                <img alt="" src={prod6} className="w-full" />
                <div className="absolute flex items-center gap-1 justify-center bottom-[22px] left-[6px]">
                  <span className="text-[#096F00] text[18px] font-semibold">
                    5.0
                  </span>
                  <span className="border-[#727272] border-[1px] h-[10px]"></span>
                  <span className="text[18px]">125</span>
                  <img alt="" src={star} />
                </div>
              </div>
              <p className="text-[#595858]">Name of the plant</p>
              <p className="flex items-center gap-1 font-semibold text-2xl">
                1500
                <span className="line-through text-[14px] text-[#595858]">
                  2000
                </span>
              </p>
              <p className="italic font-light text-[#F93636] text-[12px]">
                Rs. 500 off
              </p>
            </div>{" "}
          </div>
        </section>
        <section className="relative mt-[150px] ">
          <img
            alt=""
            src={floatPlant2}
            className="absolute top-[-17rem] left-[-15rem] z-10"
          />
          <div className="w-full">
            <div className="flex flex-col gap-10 items-center justify-center bg-bg-pattern z-20 bg-no-repeat w-full bg-cover h-[809px]">
              <p className="font-bold text-6xl text-white z-20 opacity-80">
                Everyone loves a green gift
              </p>
              <button className="uppercase text-[25px] px-[72px] py-4 bg-[#2E5E2D] rounded-full">
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

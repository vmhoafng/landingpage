import React, { Component } from "react";
import logo from "../../assets/img/Logo.png";
import mail from "../../assets/img/envelope.png";
import facebook from "../../assets/img/facebook-f.png";
import instagram from "../../assets/img/instagram.png";
import twitter from "../../assets/img/twitter.png";
import upi from "../../assets/img/UPI.png";
import mastrocard from "../../assets/img/mastrocard.png";
import paypal from "../../assets/img/paypal.png";
import paytm from "../../assets/img/paytm.png";
import visa from "../../assets/img/visa.png";
import Americanxpress from "../../assets/img/Americanxpress.png";
export default class Footer extends Component {
  render() {
    return (
      <div className="py-14 bg-gradient-to-b from-[#2E5E2D] to-[#013900]">
        <div className="w-[85%] flex flex-col justify-center items-start m-auto gap-[68px]">
          <img alt="logo" src={logo} />
          <div className="lg:flex hidden items-start justify-between">
            <div className="w-1/5">
              <a href="#!" className="block text-[25px] font-medium uppercase text-white mb-14">
                Company
              </a>
              <div>
                <a href="#!" className="block text-[22px] text-white capitalize">About</a>
                <a href="#!" className="block text-[22px] text-white capitalize">Careers</a>
                <a href="#!" className="block text-[22px] text-white capitalize">Press</a>
                <a href="#!" className="block text-[22px] text-white capitalize">
                  Corporate Orders
                </a>
                <a href="#!" className="block text-[22px] text-white capitalize">
                  Refer a Friend
                </a>
                <a href="#!" className="block text-[22px] text-white capitalize">
                  Our Guarantee
                </a>
              </div>
            </div>
            <div className="w-1/5">
              <a href="#!" className="block text-[25px] font-medium uppercase text-white mb-14">
                support
              </a>
              <div>
                <a href="#!" className="block text-[22px] text-white capitalize">Help + FAQs</a>
                <a href="#!" className="block text-[22px] text-white capitalize">
                  track your orders
                </a>
                <a href="#!" className="block text-[22px] text-white capitalize">Shipping</a>
                <a href="#!" className="block text-[22px] text-white capitalize">Returns</a>
                <a href="#!" className="block text-[22px] text-white capitalize">
                  Contact Support
                </a>
              </div>
            </div>
            <div className="w-1/5">
              <a href="#!" className="block text-[25px] font-medium uppercase text-white mb-14">
                plant questions
              </a>
              <div>
                <a href="#!" className="block text-[22px] text-white capitalize">
                  {" "}
                  Plant care tips
                </a>
                <a href="#!" className="block text-[22px] text-white capitalize">
                  {" "}
                  plant life blog
                </a>
                <a href="#!" className="block text-[22px] text-white capitalize">
                  {" "}
                  Plantgallery app
                </a>
                <a href="#!" className="block text-[22px] text-white capitalize">
                  {" "}
                  meet our team
                </a>
                <a href="#!" className="block text-[22px] text-white capitalize">
                  {" "}
                  contact team
                </a>
              </div>
            </div>
            <div className="w-1/5">
              <a href="#!" className="block text-[25px] font-medium uppercase text-white mb-14">
                stay in touch
              </a>
              <a href="#!" className="block text-[22px] text-white capitalize">
                Stay in touch with special offers, plant-parenting tips, and so
                much more.....
              </a>
              <div className="relative mt-9">
                <form>
                  <input
                    placeholder="Enter Your Email"
                    type="email"
                    className="bg-transparent outline-none border-b-[1px] border-white text-white text-[22px] w-full pb-4 align-top"
                  />
                </form>
                <img alt="" src={mail} className="absolute top-1 right-0" />
              </div>
              <div className="flex gap-4 mt-8">
                <div className="p-2 rounded-[100%] border-2 border-white/50">
                  <img alt="" src={facebook} />
                </div>
                <div className="p-2 rounded-[100%] border-2 border-white/50">
                  <img alt="" src={instagram} />
                </div>
                <div className="p-2 rounded-[100%] border-2 border-white/50">
                  <img alt="" src={twitter} />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5">
            <img alt="" src={mastrocard} />
            <img alt="" src={visa} />
            <img alt="" src={Americanxpress} />
            <img alt="" src={upi} />
            <img alt="" src={paytm} />
            <img alt="" src={paypal} />
          </div>
          <hr className="bg-white/40 border-none h-[2px] w-full hidden md:block" />
          <div className="flex flex-col lg:flex-row items-center justify-between text-white text-[22px] w-full">
            <a href="#!">@2022 Plantblock gallery</a>
            <div className="flex capitalize gap-5">
              <a href="#!">Terms of Usblock e</a>
              <a href="#!">Copyrights block & trademark</a>
              <a href="#!">policy</a>
block               <a href="#!">Sitemap</a>block 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

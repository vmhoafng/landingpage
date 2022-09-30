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
          <div className="flex items-start justify-between">
            <div className="w-1/5">
              <p className="text-[25px] font-medium uppercase text-white mb-14">
                Company
              </p>
              <div>
                <p className="text-[22px] text-white capitalize">About</p>
                <p className="text-[22px] text-white capitalize">Careers</p>
                <p className="text-[22px] text-white capitalize">Press</p>
                <p className="text-[22px] text-white capitalize">
                  Corporate Orders
                </p>
                <p className="text-[22px] text-white capitalize">
                  Refer a Friend
                </p>
                <p className="text-[22px] text-white capitalize">
                  Our Guarantee
                </p>
              </div>
            </div>
            <div className="w-1/5">
              <p className="text-[25px] font-medium uppercase text-white mb-14">
                support
              </p>
              <div>
                <p className="text-[22px] text-white capitalize">Help + FAQs</p>
                <p className="text-[22px] text-white capitalize">
                  track your orders
                </p>
                <p className="text-[22px] text-white capitalize">Shipping</p>
                <p className="text-[22px] text-white capitalize">Returns</p>
                <p className="text-[22px] text-white capitalize">
                  Contact Support
                </p>
              </div>
            </div>
            <div className="w-1/5">
              <p className="text-[25px] font-medium uppercase text-white mb-14">
                plant questions
              </p>
              <div>
                <p className="text-[22px] text-white capitalize">
                  {" "}
                  Plant care tips
                </p>
                <p className="text-[22px] text-white capitalize">
                  {" "}
                  plant life blog
                </p>
                <p className="text-[22px] text-white capitalize">
                  {" "}
                  Plantgallery app
                </p>
                <p className="text-[22px] text-white capitalize">
                  {" "}
                  meet our team
                </p>
                <p className="text-[22px] text-white capitalize">
                  {" "}
                  contact team
                </p>
              </div>
            </div>
            <div className="w-1/5">
              <p className="text-[25px] font-medium uppercase text-white mb-14">
                stay in touch
              </p>
              <p className="text-[22px] text-white capitalize">
                Stay in touch with special offers, plant-parenting tips, and so
                much more.....
              </p>
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
          <div className="flex gap-5">
            <img alt="" src={mastrocard} />
            <img alt="" src={visa} />
            <img alt="" src={Americanxpress} />
            <img alt="" src={upi} />
            <img alt="" src={paytm} />
            <img alt="" src={paypal} />
          </div>
          <hr className="bg-white/40 border-none h-[2px] w-full" />
          <div className="flex items-center justify-between text-white text-[22px] w-full">
            <p>@2022 Plantgallery</p>
            <div className="flex capitalize gap-5">
              <p>Terms of Use</p>
              <p>Copyrights & trademark</p>
              <p>policy</p>
              <p>Sitemap</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

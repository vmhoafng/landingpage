import React, { Component } from "react";
// import { IoIosArrowDown } from "react-icons/io";
import angleDown from "../../assets/img/angle-down.svg";
import Logo from "../../assets/img/Logo.png";
import search from "../../assets/img/search.svg";
import user from "../../assets/img/user-alt.svg";
import cart from "../../assets/img/shopping-cart.svg";
export default class Nav extends Component {
  render() {
    return (
      <div className="flex justify-center bg-gradient-to-b from-[#2E5E2D] to-[#023501]">
        <div className="flex h-[149px] justify-between items-center w-[85%]">
          <img alt="logo" src={Logo} />
          <ul className="flex gap-10 text-3xl font-semibold text-white">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer flex items-center justify-between ">
              Shop
              <img alt="logo" src={angleDown} className="pt-[7px]" />
            </li>
            <li className="cursor-pointer flex items-center justify-between ">
              Product
              <img alt="logo" src={angleDown} className="pt-[7px]" />
            </li>
            <li className="cursor-pointer">Blog</li>
          </ul>
          <ul className="flex gap-6">
            <li className="cursor-pointer">
              <img alt="search" src={search} />
            </li>
            <li className="cursor-pointer">
              <img alt="user-alt" src={user} />
            </li>
            <li className="cursor-pointer">
              <img alt="shopping-cart" src={cart} />
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

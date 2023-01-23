import { useState, useEffect } from "react";

import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import axios from "axios";
import prod1 from "../assets/img/prod1.png";
import prod2 from "../assets/img/prod2.png";
import prod3 from "../assets/img/prod3.png";
import prod4 from "../assets/img/prod4.png";
import prod5 from "../assets/img/prod5.png";
import prod6 from "../assets/img/prod6.png";

import userImg from "../assets/img/user.png";

export default function App() {
  const prods = [
    {
      name: null,
      currentPrice: 1500,
      price: 2000,
      sale: 500,
      img: prod1,
    },
    {
      name: null,
      currentPrice: 1500,
      price: 2000,
      sale: 500,
      img: prod2,
    },
    {
      name: null,
      currentPrice: 1500,
      price: 2000,
      sale: 500,
      img: prod3,
    },
    {
      name: null,
      currentPrice: 1500,
      price: 2000,
      sale: 500,
      img: prod4,
    },
    {
      name: null,
      currentPrice: 1500,
      price: 2000,
      sale: 500,
      img: prod5,
    },
    {
      name: null,
      currentPrice: 1500,
      price: 2000,
      sale: 500,
      img: prod6,
    },
  ];
  const user = [
    {
      id: 1,
      name: null,
      rate: 4,
      country: "United States",
      img: userImg,
      comment: null,
    },
    {
      id: 2,
      name: null,
      rate: 5,
      country: "United States",
      img: userImg,
      comment: null,
    },
    {
      id: 3,
      name: null,
      rate: 5,
      country: "United States",
      img: userImg,
      comment: null,
    },
  ];
  const [userReview, setUserReview] = useState([...user]);

  useEffect(() => {
    // getComments
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      for (let i = 0; i < user.length; i++) {
        user[i].comment = res.data[i].body;
        setUserReview([...user]);
      }
    });
    //getUsersName
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      for (let i = 0; i < user.length; i++) {
        user[i].name = res.data[i].name;
        setUserReview([...user]);
      }
    });
  }, []);
  return (
    <div className="overflow-hidden">
      <Nav />
      <Main prods={prods} rates={userReview} />
      <Footer />
    </div>
  );
}

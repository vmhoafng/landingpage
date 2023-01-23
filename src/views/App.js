import { useState, useEffect } from "react";

import Nav from "./Nav/Nav";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";

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
    const getComments = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/comments");
      let data = await res.json();
      return data;
    };
    const getUser = async () => {
      let res = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await res.json();
      return data;
    };
    getComments().then((data) => {
      for (let i = 0; i < user.length; i++) {
        user[i].comment = data[i].body;
        setUserReview([...user]);
      }
    });
    getUser().then((data) => {
      for (let i = 0; i < user.length; i++) {
        user[i].name = data[i].name;
        setUserReview([...user]);
      }
    });
  }, []);
  console.log(userReview);
  return (
    <div className="overflow-hidden">
      <Nav />
      <Main prods={prods} rates={userReview} />
      <Footer />
    </div>
  );
}

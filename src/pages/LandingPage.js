import React from "react";
import Navbar from "../components/landingPage/Navbar";
// import Vector from "../assets/img/landingPage/vector.svg";
import Login from "../components/landingPage/Login";
import Footer from "../components/landingPage/Footer";

export default function LandingPage(props) {
  return (
    <div className="h-screen max-h-min flex flex-col">
      <Navbar></Navbar>
      <div className="lg:ml-auto lg:w-1/1 w-screen">
        <Login
          setToastShow={props.setToastShow}
          settoastCondition={props.settoastCondition}
        ></Login>
      </div>
      <div className="mt-auto relative bottom-0">
        <Footer></Footer>
      </div>
    </div>
  );
}

import Footer from "./Footer";
import Navbar from "./Navbar";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReactLoading from "react-loading";

const Contact = (props) => {
  const form = useRef();
  const [Loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(
      "service_ytpdnfv",
      "template_sel0xjo",
      form.current,
      "Qc4IEdSfGeohecLaR"
    );
    e.target.reset();
    setLoading(false);
    props.settoastCondition({
      status: "success",
      message: "Message Sent Successfully!!!",
    });
    props.setToastShow(true);
  };

  return (
    <div className="body w-full bg-bgtertiary">
      <Navbar></Navbar>

      <div className="bg-secoundry ">
        <div className="">
          <div>
            <div className="flex justify-center mt-4">
              <h1 className=" rounded p-4 px-8 font-medium font-poppins text-3xl">
                Contact us
              </h1>
            </div>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-2 mt-4 ">
          <div>
            <div className="max-w-full  lg:mx-32 mx-4 my-8 bg-transparent border-black rounded-lg border-solid border-2 p-6">
              <div className="flex justify-center">
                <h1 className=" rounded  px-4 font-medium font-poppins text-3xl">
                  Reach us
                </h1>
              </div>
              <div className="">
                <h1 className="font-medium font-poppins text-2xl mt-4 ">
                  Email :
                </h1>
                <h1 className="font-poppins text-xl">vinumane0987@gmail.com</h1>
              </div>
              <div>
                <h1 className="font-medium font-poppins text-2xl mt-4 ">
                  Address :
                </h1>
                <h2 className="font-poppins text-xl">
                  first floor, Vidyangar , near bvb clg, Hubli{" "}
                </h2>
              </div>
            </div>
          </div>

          <div>
            <div className="p-10 rounded shadow-lg lg:mr-12 mt-12 mb-8 m-4">
              <form className="flex flex-col gap-5" ref={form} onSubmit={sendEmail}>
                <div className="grid grid-cols-4  ">
                  <label className="font-poppins font-medium lg:text-xl col-span-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="name"
                    id="name"
                    name="name"
                    className="bg-transparent border-black rounded-lg border-solid border-2 p-6 w-80  w-full"
                  ></input>
                </div>
                <div className="grid grid-cols-4">
                  <label className="font-poppins font-medium lg:text-xl col-span-1">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    id="email"
                    name="email"
                    className="bg-transparent border-black rounded-lg border-solid border-2 p-6 w-80  w-full"
                  ></input>
                </div>
                <div className="grid grid-cols-4">
                  <label className="font-poppins font-medium lg:text-xl col-span-1">
                    Message{" "}
                  </label>
                  <textarea
                    type="text"
                    rows="4"
                    cols="25"
                    name="message"
                    className="bg-transparent border-black rounded-lg border-solid border-2 p-6 w-80  w-full"
                  ></textarea>
                </div>
                <div className="flex justify-center ">
                  {Loading ? (
                    <ReactLoading
                      type={"bubbles"}
                      color={""}
                      height={"9%"}
                      width={"9%"}
                    />
                  ) : (
                    <button className="bg-transparent rounded-lg p-3 resize-none w-full">
                      Submit
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-auto relative bottom-0">
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Contact;

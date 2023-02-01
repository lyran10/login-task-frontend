import React, { useState } from "react";
import axios from "axios";
import { RiLoader4Line } from "react-icons/ri";

// props are from the main page so the can be changed in this component and it will render render in the main page
export const Registration = ({ setOpacity, setMsg }) => {
  const [details, setDetails] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
  }); // object to set the registration details 
  const [loading, setLoding] = useState(false); // for loading

  // used the place holder so that it will identify which input it is 
  const input = (placeholder) => {
    return (
      <input
        className="p-2 w-full bg-licorice border border-offWhite text-offWhite rounded-md"
        type={`${placeholder === "password" ? placeholder : "text"}`}
        onChange={(e) =>
          setDetails({ ...details, [placeholder]: e.target.value })
        }
        placeholder={placeholder}
        value={details.placeholder}
      />
    );
  };
// registration function it will insert in the database the details of the user
  const handleClick = async () => {
    try {
      setLoding(true); // start loading
      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/api/auth/staffRegister`,
        details
      ); // call api with the data

      if (data.msg) { // if success
        setMsg(data.msg); //set the msg
        setOpacity("opacity-100"); // show msg by translating down
        setDetails({
          email: "",
          password: "",
          name: "",
          mobile: "",
        })
      }
      setLoding(false);// stop loading
    } catch (error) {
      setMsg(error.response.data.msg); // set msg error
      setOpacity("opacity-100"); // show msg by translating down
      setLoding(false);// stop loading
      setDetails({
        email: "",
        password: "",
        name: "",
        mobile: "",
      })
    }
  };

  return (
    <section className="transition w-full duration-500 flex flex-col items-center justify-center gap-2">
      {input("email")}
      {input("password")}
      {input("name")}
      {input("mobile")}
      <button
        className="transition font-bold cursor-pointer m-auto duration-200 text-offWhite p-2 bg-slate-500 rounded-md bg-cherryRed hover:-translate-y-1"
        onClick={() => handleClick()}
      >
        <span className="flex gap-1 ">
          {loading ? (
            <RiLoader4Line className="animate-spin mt-1" size={20} />
          ) : null}
          {loading ? "Processing" : "Register"}
        </span>
      </button>
    </section>
  );
};

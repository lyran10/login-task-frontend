import React, { useState } from "react";
import axios from "axios";
import { RiLoader4Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

// props are from the main page so the can be changed in this component and it will render render in the main page
export const Login = ({ setMsg, setOpacity }) => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({ 
    email: "",
    password: "",
  }); // object to set the registration details 
  const [loading, setLoading] = useState(false); // for loading

// used the place holder so that it will identify which input it is 
  const input = (placeholder) => {
    return (
      <input
        className="p-2 w-full border border-offWhite bg-licorice text-offWhite rounded-md"
        type={`${placeholder === "password" ? placeholder : "text"}`}
        onChange={(e) =>
          setDetails({ ...details, [placeholder]: e.target.value })
        }
        placeholder={placeholder}
        value={details.placeholder}
      />
    );
  };

// login function it will check in the database if there is a user with this credentials
  const handleClick = async () => {
    try {
      setLoading(true);// set loading to true
      const { data } = await axios.post(
        `${process.env.REACT_APP_URL}/api/auth/staffLogin`,
        details
      ); // calling the api with the data

      if (data.msg) {// if success do what is below

        setMsg(data.msg); // set msg to show the message to the user
        navigate("/blank"); // id success navigate to blank page
        setOpacity("opacity-100"); // translate the msg div back
        setDetails({
          email: "",
          password: "",
        })
      }
      setLoading(false);// stop loading

    } catch (error) {
      setMsg(error.response.data.msg);// set msg to show the message to the user
      setOpacity("opacity-100");// show the msg div
      setLoading(false);// stop loading
      setDetails({
        email: "",
        password: "",
        name: "",
        mobile: "",
      })
    }
  };

  return (
    <section
      className={`transition w-full duration-500 flex flex-col items-center justify-center gap-2`}
    >
      {input("email")}
      {input("password")}
      <button
        className="transition font-bold bg-cherryRed cursor-pointer m-auto duration-200 text-offWhite p-2 bg-slate-500 rounded-md hover:-translate-y-1"
        onClick={() => handleClick()}
      >
        <span className="flex gap-1">
          {loading ? (
            <RiLoader4Line className="animate-spin mt-1" size={20} />
          ) : null}
          {loading ? "Checking" : "Login"}
        </span>
      </button>
    </section>
  );
};

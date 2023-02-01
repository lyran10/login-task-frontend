import React, { useEffect, useState } from "react";
import { Login } from "../components/login";
import { Registration } from "../components/registration";
import { FaRegWindowClose } from "react-icons/fa";

export const MainPage = () => {
  const [leftLogin, setLeftLogin] = useState("translate-x-[1000px]");
  const [rightReg, setrightReg] = useState("-translate-x-[]");
  const [scaleReg, setScaleReg] = useState("scale-100");
  const [scaleLogin, setScaleLogin] = useState("scale-0");
  const [Msg, setMsg] = useState("");
  const [opacity, setOpacity] = useState("opacity-0");

  useEffect(() => {
    if(opacity === "opacity-100"){
      setTimeout(() => {
        setOpacity("opacity-0")
      },3000)
    }
  },[opacity])

  const animation = (leftLogin,scaleLogin,scaleReg,rightReg) => {
    setLeftLogin(leftLogin); // translate login component 1000px to the left
    setScaleLogin(scaleLogin); // scale to 0
    setScaleReg(scaleReg); // registration component remove scale so that it can be seen
    setrightReg(rightReg); // translate regis component 1000px to the right
  }
 
  const registerUser = () => {
    animation("translate-x-[1000px]","scale-0","scale-100","-translate-x-[]")
  };

  const login = () => {
    animation("translate-x-[]","scale-100","scale-0","translate-x-[1000px]")
  };

  return (
    <main className="flex flex-col gap-2 bg-licorice justify-center items-center w-screen h-screen">
      <div className={`flex gap-2 transition ${opacity} bg-cherryRed p-2 duration-150 rounded-md`}>
        <span className={`font-bold text-offWhite`}>
          {Msg ? Msg : ""}
        </span>
        <FaRegWindowClose
            onClick={() => setOpacity("opacity-0")}
            className={`cursor-pointer mt-1`}
            size={20}
            style={{ color: "#F9F9F9" }}
          />
      </div>
      <div className="flex w-4/5 gap-2 justify-center">
        <button
          onClick={() => registerUser()}
          className="p-2 cursor-pointer font-bold rounded-md text-offWhite bg-cherryRed transition duration-200 w-2/5 hover:-translate-y-1"
        >
          Register
        </button>
        <button
          onClick={() => login()}
          className="p-2 cursor-pointer font-bold rounded-md text-offWhite bg-cherryRed transition duration-200 w-2/5 hover:-translate-y-1 "
        >
          Login
        </button>
      </div>
      <div className="relative flex items-center justify-center w-9/12 overflow-hidden h-2/4">
        <div
          className={`${scaleReg} transition duration-300 w-2/3 absolute h-2/4 self-center ${rightReg}`}
        >
          <Registration setMsg={setMsg} setOpacity={setOpacity} />
        </div>
        <div
          className={`${scaleLogin} transition duration-300 w-2/3 absolute h-2/4 self-center ${leftLogin}`}
        >
          <Login setMsg={setMsg} setOpacity={setOpacity} />
        </div>
      </div>
    </main>
  );
};

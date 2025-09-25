import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";
import Lottie from "lottie-react";
import register from "../../Lottie/register.json";

const Signin = () => {
  const [seen, setSeen] = useState(false);
  const [formData, setFormdData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormdData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormdData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex items-center justify-center p-5 h-[80vh]">
      <div className=" flex rounded-lg p-2 shadow-xl shadow-blue-400 ">
        <div className="left">
          <Lottie
            animationData={register}
            loop={true}
            className="h-[18rem] w-[18rem]"
          />
        </div>
        <div className="rounded-lg p-5 border-l-2 border-blue-400 ">
          <h1 className="mb-5">Welcome Back, Signin Here to Continue</h1>
          <form
            className="flex flex-col gap-5"
            onSubmit={(e) => handleSubmit(e)}
          >
            <div className="flex items-center  gap-12">
              <label htmlFor="">Email:</label>
              <input
                name="email"
                value={formData.email}
                onChange={(e) => handleChange(e)}
                className="border-1 border-gray-400 rounded-sm p-2"
                type="text"
                placeholder="Enter your Email"
              />
            </div>

            <div className="flex items-center relative gap-5 ">
              <label htmlFor="">password:</label>
              <input
                name="password"
                onChange={(e) => handleChange(e)}
                value={formData.password}
                className="border-1 border-gray-400 rounded-sm p-2"
                type={seen ? "text" : "password"}
                placeholder="Enter your Password"
              />
              {seen ? (
                <div className="absolute right-1">
                  <Eye onClick={() => setSeen(!seen)} />
                </div>
              ) : (
                <div className="absolute right-1">
                  <EyeOff onClick={() => setSeen(!seen)} />
                </div>
              )}
            </div>
            <button
              className="px-3 py-1 border-1 border-purple-500 rounded-2xl bg-gradient-to-b from-purple-400 to-blue-300  cursor-pointer"
              type="submit"
            >
              {" "}
              Signin
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;

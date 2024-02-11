import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import {adminLogin} from '../../api/index'
import Note from "../../../components/Note";
import img from '../../assets/inv.png'
function Signin() {
  // const [name,setName] = useState('');
  // const [password,setPassword] = useState('');
  const ref_name = useRef();
  const ref_password = useRef();
  return (
    <>
      <div className="parent flex justify-center items-center bg-gradient-to-r from-[#1c3fc5ff] to-[#2a51e7ff]">
        <section className="z-[11]  w-full -translate-x-[50%] -translate-y-[50%] absolute top-[50%] left-[50%] md:relative md:left-0 md:top-0 md:translate-x-0 md:translate-y-0">
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0  ">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8 relative">
                <h1 className=" font-bold leading-tight tracking-tight text-gray-900 text-3xl">
                  Hi Admin welecom back! 👋
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-600 "
                    >
                      Username
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5   dark:placeholder-gray-400   dark:focus:border-blue-500"
                      placeholder="ahmed"
                      required=""
                      ref={ref_name}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-600 "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500"
                      required=""
                      ref={ref_password}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="remember"
                          aria-describedby="remember"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="remember"
                          className="text-gray-500 dark:text-gray-300"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <Link
                      to="/signup"
                      className="text-sm font-medium text-primary-600 hover:underline text-blue-500"
                    >
                      Create A new Admin Account ?
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full  bg-primary-600 hover:bg-primary-700  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 bg-blue-600 text-white "
                    onClick={()=>{
                      adminLogin(ref_name.current.value,ref_password.current.value);
                    }}
                  >
                    Sign In
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        <div className="bg-white w-full h-screen top-0">
          <div className="p-8">
            <h1 className="text-5xl font-bold text-[#2a51e7ff]">Hello,</h1>
            <h2 className="text-xl mt-3 text-gray-500">Wlecom to Wearhouses Managment System, You can share your vacant warehouse space, use it for those in need, and generate income </h2>
          </div>
          <div className="w-full flex justify-center">
            <img className="w-[300px]" src={img} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;

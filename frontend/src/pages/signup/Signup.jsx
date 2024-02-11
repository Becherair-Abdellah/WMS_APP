import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { register } from "../../api";
function Signup() {
  const ref_name = useRef();
  const ref_ps = useRef();
  const ref_cps = useRef();

  return (
    <>
      <div className="parent  flex justify-center  items-center">
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
                      ref={ref_ps}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-sm font-medium text-gray-600 "
                    >
                      Confirm password
                    </label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5  dark:placeholder-gray-400 dark:focus:ring-blue-500"
                      required=""
                      ref={ref_cps}
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
                      to="/signin"
                      className="text-sm font-medium text-primary-600 hover:underline text-blue-500"
                    >
                      Already have an Account!
                    </Link>
                  </div>
                  <button
                    type="submit"
                    className="w-full  bg-primary-600 hover:bg-primary-700  focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 bg-blue-600 text-white "
                    onClick={()=>{
                      register(ref_name.current.value,ref_ps.current.value,ref_cps.current.value);
                    }}
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Signup;

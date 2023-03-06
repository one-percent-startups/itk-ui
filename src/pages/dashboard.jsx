import {
  ArrowRightOnRectangleIcon,
  BoltIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import React, { useState, useEffect } from "react";
import NavBar from "../components/navigation";
import avatar from "../assets/images/avatar4.jpeg";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dashboard = () => {
  return (
    <div className="flex flex-row">
      <div className="hidden xs:hidden lg:block md:block">
        <NavBar />
      </div>

      <div className="p-4 h-screen xs:ml-[0em] md:ml-[17em] w-full ">
        <h3 className="w-100 font-semibold text-lg">Profile</h3>
        <div className="flex flex-row justify-between w-full">
          <div className="w-8/12">
            <div className="mt-4 w-12/12 flex-wrap flex justify-between items-start">
              <div className="flex-columns lg:w-5/12 justify-start items-center">
                <div className="flex">
                  <img src={avatar} className="rounded-full mr-1 w-12" />
                  <h3 className="px-2 text-sm mr-3 font-semibold text-md">
                    Rishabh Mehta
                    <br></br>
                    <span className="text-xs text-gray-500">
                      rishabhmehta@gmail.com
                    </span>
                  </h3>
                </div>
                <h4 className="font-semibold mt-3">Advanced</h4>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div
                    className="bg-blue-600 mt-2 h-2.5 rounded-full"
                    style={{ width: "45%" }}
                  ></div>
                </div>
                <p className="font-semibold mt-2 ">
                  328
                  <span className="text-gray-500 text-sm font-normal">
                    {" "}
                    to reach new level
                  </span>
                </p>
              </div>
              <div className="flex flex-wrap justify-between w-5/12 ">
                <div className="flex flex-row mb-6 justify-start w-6/12">
                  <div className="bg-blue-100  h-8 rounded-full flex justify-center items-center p-2 ">
                    <BoltIcon className="w-4 h-4" />
                  </div>
                  <p className="text-3xl leading-7  text-start ml-2 font-semibold">
                    2672<br></br>
                    <span className="text-xs  text-gray-500">
                      Total of Rings
                    </span>
                  </p>
                </div>
                <div className="flex flex-row justify-between ">
                  <div className="bg-blue-100  h-8 rounded-full flex justify-center items-center p-2">
                    <BoltIcon className="w-4 h-4" />
                  </div>
                  <p className="text-3xl leading-7  text-start ml-2 font-semibold">
                    2672<br></br>
                    <span className="text-xs  text-gray-500">
                      Total of Rings
                    </span>
                  </p>
                </div>
                <div className="flex flex-row justify-between ">
                  <div className="bg-blue-100  h-8 rounded-full flex justify-center items-center p-2">
                    <BoltIcon className="w-4 h-4" />
                  </div>
                  <p className="text-3xl leading-7  text-start ml-2 font-semibold">
                    2672<br></br>
                    <span className="text-xs  text-gray-500">
                      Total of Rings
                    </span>
                  </p>
                </div>
                <div className="flex flex-row justify-between ">
                  <div className="bg-blue-100  h-8 rounded-full flex justify-center items-center p-2">
                    <BoltIcon className="w-4 h-4" />
                  </div>
                  <p className="text-3xl leading-7  text-start ml-2 font-semibold">
                    2672<br></br>
                    <span className="text-xs  text-gray-500">
                      Total of Rings
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 w-12/12 flex-wrap flex justify-between items-start">
              <div className="text-sm w-full  font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                <ul className="flex flex-wrap -mb-px items-center">
                  <li className="mr-2 text-xl">
                    <a
                      href="#"
                      className="text-gray-900 border-b-2 border-gray-900 inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    >
                      Profile
                    </a>
                  </li>
                  <li className="mr-2 text-xl">
                    <a
                      href="#"
                      className="inline-block p-4  rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
                      aria-current="page"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li className="mr-2 text-xl">
                    <a
                      href="#"
                      className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                    >
                      Settings
                    </a>
                  </li>
                  <li className="ml-auto">
                    <button class="bg-transparent hover:bg-blue-500 text-gray-400 font-semibold hover:text-white py-2 px-4 hover:border-transparent rounded">
                      view all
                    </button>
                  </li>
                </ul>
              </div>

              <div className="border-2 p-3 flex-wrap mt-8 rounded-2xl border-gray-200 w-5/12">
                <div className="w-6  flex justify-between w-full">
                  <CheckCircleIcon className="h-6" />
                  <div className=" bg-blue-200  rounded-3xl text-xs p-1 ">
                    9/12
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="font-semibold mt-3">Advanced</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 mt-2 h-2.5 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <p className="mt-2 text-gray-500 w-6/12 text-sm font-normal">
                      9 Jan,22
                    </p>
                    <p className=" text-end mt-2 text-gray-500 w-6/12 text-sm font-normal">
                      9 Jan,22
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-2 p-3 flex-wrap mt-8 rounded-2xl border-gray-200 w-5/12">
                <div className="w-6  flex justify-between w-full">
                  <CheckCircleIcon className="h-6" />
                  <div className=" bg-blue-200  rounded-3xl text-xs p-1 ">
                    9/12
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="font-semibold mt-3">Advanced</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 mt-2 h-2.5 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <p className="mt-2 text-gray-500 w-6/12 text-sm font-normal">
                      9 Jan,22
                    </p>
                    <p className=" text-end mt-2 text-gray-500 w-6/12 text-sm font-normal">
                      9 Jan,22
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-2 p-3 flex-wrap mt-8 rounded-2xl border-gray-200 w-5/12">
                <div className="w-6  flex justify-between w-full">
                  <CheckCircleIcon className="h-6" />
                  <div className=" bg-blue-200  rounded-3xl text-xs p-1 ">
                    9/12
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="font-semibold mt-3">Advanced</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 mt-2 h-2.5 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <p className="mt-2 text-gray-500 w-6/12 text-sm font-normal">
                      9 Jan,22
                    </p>
                    <p className=" text-end mt-2 text-gray-500 w-6/12 text-sm font-normal">
                      9 Jan,22
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-2 p-3 flex-wrap mt-8 rounded-2xl border-gray-200 w-5/12">
                <div className="w-6  flex justify-between w-full">
                  <CheckCircleIcon className="h-6" />
                  <div className=" bg-blue-200  rounded-3xl text-xs p-1 ">
                    9/12
                  </div>
                </div>
                <div className="w-full">
                  <h4 className="font-semibold mt-3">Advanced</h4>
                  <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div
                      className="bg-blue-600 mt-2 h-2.5 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <div className="flex justify-between">
                    <p className="mt-2 text-gray-500 w-6/12 text-sm font-normal">
                      9 Jan,22
                    </p>
                    <p className=" text-end mt-2 text-gray-500 w-6/12 text-sm font-normal">
                      9 Jan,22
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-3/12  mx-auto h-[52vh] mt-auto">
            <ul className="flex justify-between items-center mb-11 ">
              <li className="text-xl font-semibold">Leaders</li>
              <li className="text-gray-400 font-semibold text-sm">View all</li>
            </ul>
            <div className="bordered p-3 border-2 rounded-xl">
              <div className="mb-5 mt-2 flex flex-wrap items-center justify-between">
                <div className="w-8/12 inline-flex">
                  <img className="rounded-full w-8 h-8 mt-1" src={avatar} />

                  <p className="ml-2 font-semibold text-start w">
                    Rishabh Mehta <br></br>
                    <span className="text-gray-300 text-sm">Mumbai, India</span>
                  </p>
                </div>
                <div className=" inline-flex items-center text-xs px-2 bg-green-200 rounded-2xl leading-5 h-5">
                  <div className="bg-green-500 w-2 h-2 mr-1  rounded-full"></div>
                  3800
                </div>
              </div>
              <div className="mb-5 flex flex-wrap items-center justify-between">
                <div className="w-8/12 inline-flex">
                  <img className="rounded-full w-8 h-8 mt-1" src={avatar} />

                  <p className="ml-2 font-semibold text-start w">
                    Rishabh Mehta <br></br>
                    <span className="text-gray-300 text-sm">Mumbai, India</span>
                  </p>
                </div>
                <div className=" inline-flex items-center text-xs px-2 bg-green-200 rounded-2xl leading-5 h-5">
                  <div className="bg-green-500 w-2 h-2 mr-1  rounded-full"></div>
                  3800
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Dashboard;

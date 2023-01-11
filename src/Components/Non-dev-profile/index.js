import React, { useContext, useState, useEffect } from "react";
import "./index.css";
import { logcontstu } from "../../Loginsignincontext/context";

function Nondevprofile() {
  const [curruserdetail, setdetail] = useState("");
  const [curruserdetailall, setcall] = useState("");

  const { student } = useContext(logcontstu);

  useEffect(() => {
    if (student != undefined && student != "no") {
      setdetail(student);
    }


  }, []);

  if (student == undefined || student == "no") {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div class="lg:flex min-h-screen">
        <aside class="grow-0 bg-white pl-7 pr-16 pb-12 sm:pl-16 sm:pr-24 sm:pb-12 lg:pb-16 relative grid">
          <div>
            <img
              src="https://images.pexels.com/photos/2787341/pexels-photo-2787341.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Miranda"
              class="aside__img rounded-full w-28 h-28 md:w-32 md:h-32 object-cover shadow-lg absolute top-12"
            />
            <h2 class="mt-44 md:mt-52 font-semibold text-3xl leading-none">
              Miranda
            </h2>
            <span class="capitalize text-gray-500 text-sm">lead designer</span>
            <p class="mt-3 flex items-center text-sm">
              <span class="w-3 h-3 bg-green-400 block rounded-full mr-1.5"></span>
              Online
            </p>
          </div>
          <nav class="mt-12 md:mt-10 lg:mt-0">
            <ul class="flex flex-wrap lg:grid gap-3">
              <li class="flex items-center text-gray-600 hover:text-red-400">
                <a href="#" class="capitalize flex items-center text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                  work
                </a>
              </li>
              <li class="flex items-center text-gray-600 hover:text-red-400">
                <a href="#" class="capitalize flex items-center text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
                    />
                  </svg>
                  plan
                </a>
              </li>
              <li class="flex items-center text-gray-600 hover:text-red-400">
                <a href="#" class="capitalize flex items-center text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                  stats
                </a>
              </li>
              <li class="flex items-center text-gray-600 hover:text-red-400">
                <a href="#" class="capitalize flex items-center text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  documents
                </a>
              </li>
              <li class="flex items-center text-gray-600 hover:text-red-400">
                <a href="#" class="capitalize flex items-center text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                  users
                </a>
              </li>
              <li class="flex items-center text-gray-600 hover:text-red-400">
                <a href="#" class="capitalize flex items-center text-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 mr-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  settings
                </a>
              </li>
            </ul>
          </nav>
          <a
            href="#"
            class="uppercase font-semibold text-gray-600 hover:text-gray-900 self-end text-right lg:text-left mt-10 lg:mt-0"
          >
            log out
          </a>
        </aside>
        <main class="flex-grow bg-gray-100">
          <header>
            <div class="py-7 container mx-auto header__grid">
              <div class="flex order-1 md:order-none">
                <span class="shadow-sm mr-3 lg:mr-5 bg-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
                  <svg
                    class="text-gray-500 w-6 h-6 hover:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                    ></path>
                  </svg>
                </span>
                <span class="shadow-sm relative bg-white rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
                  <svg
                    class="text-gray-500 w-6 h-6 hover:text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    ></path>
                  </svg>
                  <span class="bg-red-400 rounded-full w-4 h-4 text-xs text-white flex items-center justify-center absolute top-0 right-0">
                    1
                  </span>
                </span>
              </div>
              <div class="relative col-span-2 md:col-span-1 order-3 md:order-none mt-6 md:mt-0">
                <input
                  type="text"
                  placeholder="Search projects"
                  class="rounded-sm py-1.5 px-12 w-full"
                />
                <svg
                  class="w-5 h-5 text-gray-500 absolute top-2 left-3"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <svg
                class="order-2 md:order-none w-6 h-6 cursor-pointer hover:text-red-400 justify-self-end"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </div>
            <div class="py-7 border-t border-b">
              <div class=" container mx-auto">
                <div class="header__grid">
                  <div class="col-span-2 md:col-span-1">
                    <h2 class="capitalize text-2xl lg:text-3xl font-medium">
                      project title
                    </h2>
                    <p class="text-sm text-gray-500">Short description</p>
                  </div>
                  <div class="col-span-2 md:col-span-1 mt-5 mb-10 md:mt-0 md:mb-0 lg:ml-5 xl:ml-0">
                    <span class="text-gray-500 uppercase font-medium">
                      due date
                    </span>
                    <p>Mon, Aug 28, 2022</p>
                  </div>
                  <ul class="flex gap-2 justify-self-start md:justify-self-end">
                    <li class="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer">
                      <img
                        src="https://images.pexels.com/photos/2709388/pexels-photo-2709388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Jane Doe"
                        class="rounded-full w-full h-full object-cover"
                      />
                    </li>
                    <li class="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer">
                      <img
                        src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="James Doe"
                        class="rounded-full w-full h-full object-cover"
                      />
                    </li>
                    <li class="w-10 h-10 lg:w-12 lg:h-12 cursor-pointer bg-gray-300 rounded-full flex items-center justify-center text-gray-600 hover:text-white hover:bg-red-400 ">
                      <svg
                        class="w-6 h-6 "
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        ></path>
                      </svg>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </header>
          <div class="container mx-auto">
            <div class="py-6 flex-col flex md:flex-row justify-end items-center">
              <button class="bg-red-400 text-white uppercase rounded-full px-5 py-2 md:py-1 text-sm shadow-lg tracking-wider font-medium hover:bg-red-500 mr-0 md:mr-5">
                create new ticket
              </button>
              <button class="flex items-center text-gray-500 text-md hover:text-gray-800 mt-3 md:mt-0">
                <svg
                  class="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  ></path>
                </svg>{" "}
                Add column
              </button>
            </div>
          </div>

          <div class="container mx-auto mt-3 pb-14">
            <section class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
              <div class="grid gap-6">
                <h3 class="text-2xl font-medium flex items-center">
                  Backlog
                  <svg
                    class="w-4 h-4 text-gray-500 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </h3>
                <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-pink-200">
                  <a class="font-medium capitalize text-lg" href="#">
                    task name
                  </a>

                  <span class="flex items-center text-gray-500">
                    Design
                    <span class="bg-pink-400 rounded-full w-3 h-3 ml-1.5"></span>
                  </span>
                  <p class="text-gray-500">Description</p>

                  <div class="flex items-center mt-8">
                    <img
                      src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                      alt="Alex Doe"
                      class="rounded-full w-9 h-9 object-cover"
                    />
                    <span class="text-gray-500 ml-4">08/07/22</span>
                    <span class="text-gray-500 font-medium text-right lg:bg-red-400 lg:text-white lg:rounded-full lg:w-5 lg:h-5 xl:w-auto xl:h-auto lg:flex lg:justify-center lg:items-center lg:text-xs xl:text-gray-500 xl:bg-transparent xl:text-base ml-auto xl:inline-block">
                      2 <span class="inline lg:hidden xl:inline">subtasks</span>
                    </span>
                  </div>
                </div>
                <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-yellow-200">
                  <a class="font-medium capitalize text-lg" href="#">
                    task name
                  </a>

                  <span class="flex items-center text-gray-500">
                    Feature
                    <span class="bg-yellow-400 rounded-full w-3 h-3 ml-1.5"></span>
                  </span>
                  <p class="text-gray-500">Description</p>

                  <div class="flex items-center mt-8">
                    <img
                      src="https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Annie Doe"
                      class="rounded-full w-9 h-9 object-cover"
                    />
                    <span class="text-gray-500 ml-4">28/05/22</span>
                  </div>
                </div>
              </div>

              <div class="grid gap-6">
                <h3 class="text-2xl font-medium flex items-center">
                  In Progress
                  <svg
                    class="w-4 h-4 text-gray-500 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </h3>
                <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-yellow-200">
                  <a class="font-medium capitalize text-lg" href="#">
                    task name
                  </a>

                  <span class="flex items-center text-gray-500">
                    Feature
                    <span class="bg-yellow-400 rounded-full w-3 h-3 ml-1.5"></span>
                  </span>
                  <p class="text-gray-500">Description</p>

                  <div class="flex items-center mt-8">
                    <img
                      src="https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="James Doe"
                      class="rounded-full w-9 h-9 object-cover"
                    />
                    <span class="text-gray-500 ml-4">15/06/22</span>
                  </div>
                </div>
                <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-green-200">
                  <a class="font-medium capitalize text-lg" href="#">
                    task name
                  </a>

                  <span class="flex items-center text-gray-500">
                    Improvement
                    <span class="bg-green-400 rounded-full w-3 h-3 ml-1.5"></span>
                  </span>
                  <p class="text-gray-500">Description</p>

                  <div class="flex items-center mt-8">
                    <img
                      src="https://images.pexels.com/photos/247322/pexels-photo-247322.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Annie Doe"
                      class="rounded-full w-9 h-9 object-cover"
                    />
                    <span class="text-gray-500 ml-4">22/05/22</span>
                  </div>
                </div>
              </div>
              <div class="grid gap-6">
                <h3 class="text-2xl font-medium flex items-center">
                  Review
                  <svg
                    class="w-4 h-4 text-gray-500 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </h3>
                <div class="card bg-white rounded-md shadow-xs px-5 py-4 cursor-pointer hover:bg-blue-200">
                  <a class="font-medium capitalize text-lg" href="#">
                    task name
                  </a>

                  <span class="flex items-center text-gray-500">
                    Bug
                    <span class="bg-blue-400 rounded-full w-3 h-3 ml-1.5"></span>
                  </span>
                  <p class="text-gray-500">Description</p>

                  <div class="flex items-center mt-8">
                    <img
                      src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      alt="Annie Doe"
                      class="rounded-full w-9 h-9 object-cover"
                    />
                    <span class="text-gray-500 ml-4">03/06/22</span>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}

export default Nondevprofile;

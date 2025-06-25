import React from "react";
import { Link } from "react-router";

export const Navbar = () => {
   return (
      <>
         {/* <!-- Navbar --> */}
         <nav className="w-full flex justify-between items-center px-6 py-6">
            {/* <!-- Logo --> */}
            <div className="flex items-center gap-1">
               <span className="text-3xl font-bold">Axaad</span>
               <div className="bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-500 rounded-lg p-1 hover:bg-gradient-to-r hover:from-pink-500 hover:via-orange-400 hover:to-yellow-400">
                  <div className=" text-yellow-500 font-bold w-9 h-8 flex items-center justify-center rounded-xl text-lg ">
                     <span className="">
                        <img
                           src="/src/asad.png"
                           className="border border-black rounded-lg "
                           alt=""
                        />
                     </span>
                  </div>
               </div>
            </div>

            {/* <!-- Menu --> */}
            <div className="md:flex items-center gap-10 space-x-8 hidden">
               <ul className="flex items-center gap-8 text-lg font-medium">
                  <li className="text-yellow-400 cursor-pointer">
                     <Link to={"/"}> Home</Link>
                  </li>
                  <li className="cursor-pointer hover:text-yellow-400">
                     <Link to={"/about"}> About</Link>
                  </li>
                  <li className="relative group cursor-pointer">
                     <span className="hover:text-yellow-400 flex items-center gap-1">
                        Pages
                        <svg
                           className="w-4 h-4"
                           fill="none"
                           stroke="currentColor"
                           stroke-width="2"
                           viewBox="0 0 24 24">
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M19 9l-7 7-7-7"
                           />
                        </svg>
                     </span>
                     <div className="absolute left-0 top-full hidden  group-hover:block bg-black text-white mt-2 rounded-md p-2 shadow-lg z-10 duration-2000">
                        <Link
                           to="#"
                           className="block px-4 py-1 hover:text-yellow-400 rounded">
                           1
                        </Link>
                        <Link
                           to="#"
                           className="block px-4 py-1 hover:text-yellow-400 rounded">
                           2
                        </Link>
                     </div>
                  </li>
                  <li className="cursor-pointer hover:text-yellow-400">
                     <Link to={"/pricing"}> pricing</Link>
                  </li>
               </ul>

               {/* <!-- Contact Button --> */}
               <div className="bg-gradient-to-r from-yellow-400 via-pink-300 to-pink-600 rounded-full p-1 hover:bg-gradient-to-r hover:from-pink-500 hover:via-yellow-400 hover:to-orange-500 transition duration-500 delay-100 ease-in-out">
                  <button className="bg-black relative overflow-hidden px-6 py-2 rounded-full  border-transparent group">
                     <span className="absolute inset-0  rounded-full "></span>
                     <span className="relative text-white font-bold text-lg flex items-center gap-2">
                        Contact
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="h-4 w-4"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="currentColor">
                           <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17 8l4 4m0 0l-4 4m4-4H3"
                           />
                        </svg>
                     </span>
                  </button>
               </div>
            </div>

            {/* <!-- Mobile menu button --> */}
            <div className="md:hidden flex items-center">
               <button
                  type="button"
                  className="mobile-menu-button inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-900 hover:bg-gray-100 focus:outline-none">
                  <svg
                     className="h-6 w-6"
                     xmlns="http://www.w3.org/2000/svg"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor">
                     <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"
                     />
                  </svg>
               </button>
                         
            </div>
         </nav>
      </>
   );
};

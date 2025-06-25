import React from "react";

export const Hero = () => {
   return (
      <>
         <div className=" h-[45rem] w-full bg-[url(https://cdn.pixabay.com/photo/2016/06/08/15/45/lemon-1444025_640.jpg)]  bg-cover bg-center bg-no-repeat">
            <div className=" backdrop-blur-sm text-white shadow-md">
               <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                  <h1 className="text-2xl font-bold hover:text-amber-300">
                     Asad Ishaq
                  </h1>
                  <ul className="flex gap-6 font-medium">
                     <li>
                        <a
                           href=""
                           className=" p-2 hover:border-b-5 border-amber-50 hover:text-amber-500">
                           Home
                        </a>
                     </li>
                     <li>
                        <a
                           href=""
                           className="p-2 transition ease-in-out duration-500 hover:border-b-5 hover:border-amber-50 hover:text-amber-500">
                           About
                        </a>
                     </li>
                     <li>
                        <a
                           href=""
                           className="p-2 transition ease-in-out duration-500 hover:border-b-5 hover:border-amber-50 hover:text-amber-500">
                           Blog
                        </a>
                     </li>
                     <li>
                        <a
                           href=""
                           className="p-2 transition ease-in-out duration-500 hover:border-b-5 hover:border-amber-50 hover:text-amber-500">
                           Contact
                        </a>
                     </li>
                     <li>
                        <a
                           href=""
                           className="p-2 pl-4 pr-4 bg-amber-50 text-amber-400 text-xl amber-blue-300  rounded-xl hover:text-amber-50 hover:border-2 border-amber-50 hover:bg-transparent transition ease-in-out duration-500">
                           Let's Start
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
            <div className="flex flex-col h-screen justify-center text-center  ">
               <h1 className="m-3 text-5xl font-bold text-white animate__animated animate__hinge ">
                  Welcome Back Patho G!
               </h1>
               <div className="custom-animation">
                  <h1 class="m-3 text-5xl font-bold text-white cssanimation typing sequence">
                     cssanimation
                  </h1>
               </div>

               <div className=" mt-8">
                  <button className="m-4 w-42 hover:bg-amber-50 hover:text-amber-400 text-xl amber-blue-300 py-3 rounded-xl text-amber-50 border-2 border-amber-50 bg-transparent transition ease-in-out duration-500 ">
                     Lemon
                  </button>
                  <button className="m-4 w-42 bg-amber-50 text-amber-400 text-xl amber-blue-300 py-3.5 rounded-xl hover:py-3 hover:text-amber-50 hover:border-2 border-amber-50 hover:bg-transparent transition ease-in-out duration-500 ">
                     Water
                  </button>
               </div>
            </div>
         </div>
      </>
   );
};

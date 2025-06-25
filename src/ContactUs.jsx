import React from "react";

export const ContactUs = () => {
   return (
      <div>
         <div className="h-screen flex items-center justify-center bg-amber-300 px-4">
            <form
               action=""
               className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm">
               <h2 className="text-2xl font-bold mb-6 text-center text-amber-300">
                  Zarort Rishty Saddique sb
               </h2>
               <input
                  type="text"
                  placeholder="Name"
                  className="w-full mb-4 p-2 rounded-md border border-amber-300 focus:outline-none focus:bg-amber-300"
               />
               <input
                  type="text"
                  placeholder="Mashok Name"
                  className="w-full mb-4 p-2
                  rounded-md border border-amber-300 focus:outline-none focus:bg-amber-300"
               />
               <textarea
                  name=""
                  id=""
                  placeholder="Message"
                  rows="4"
                  className="w-full mb-4 p-2 rounded-md border border-amber-300 focus:outline-none focus:bg-amber-300"></textarea>
               <button className="w-full bg-amber-300 amber-blue-300 py-3 rounded-md hover:bg-amber-700 transition duration-300 ease-in-out">
                  Rishta Pakka
               </button>
            </form>
         </div>
      </div>
   );
};

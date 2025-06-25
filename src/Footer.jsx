import React from "react";

export const Footer = () => {
   return (
      <>
         <footer className="bg-[rgb(19,19,19)] bg-[url(https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e13e27f1ed1ee7a3630831_vector-8.avif)] text-white px-8 py-12">
            {/* Newsletter Subscription */}
            <div className="flex flex-col md:flex-row justify-between items-center mb-16">
               <div className="mb-6 md:mb-0">
                  <div className="flex gap-6 items-center">
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
               </div>

               <div className="w-full md:w-auto">
                  <p className="text-xl mb-4">
                     Get the latest blockchain news delivered weekly
                  </p>

                  <div className="flex flex-col sm:flex-row gap-2">
                     <input
                        type="email"
                        placeholder="Enter email"
                        className="py-2 px-4 rounded-lg bg-gray-800 border border-gray-700 text-white flex-grow"
                     />
                     <div className="sm:w-auto w-61 bg-gradient-to-r from-yellow-400 via-pink-400 to-pink-500 rounded-lg p-1 overflow-hidden hover:bg-gradient-to-r hover:from-pink-500 hover:via-pink-400 hover:to-yellow-500 transition duration-500 delay-100 ease-in-out ">
                        <button className=" bg-black relative overflow-hidden sm:px-6 px-20 py-2 rounded-lg  border-transparent group  ">
                           <span className="relative text-white font-bold text-lg flex items-center gap-2 ">
                              Subsribe
                           </span>
                        </button>
                     </div>
                  </div>
               </div>
            </div>

            {/* Footer Links Section */}
            <div className=" border border-gray-800 p-8 rounded-2xl backdrop-blur-sm">
               <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {/* Pages Column */}
                  <div>
                     <h3 className="text-xl font-bold mb-4">Pages</h3>
                     <div className="flex flex-wrap">
                        <div>
                           <ul className="space-y-2 space-x-8">
                              <li>
                                 <a
                                    href="#"
                                    className="text-orange-400 hover:text-orange-400">
                                    Home
                                 </a>
                              </li>

                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Case Study
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Feature
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Integrations
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Contact
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <div>
                           <ul className="space-y-2 ">
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    About
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Pricing
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Blog
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Contact
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Privacy Policy
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  {/* Utility Column */}
                  <div>
                     <h3 className="text-xl font-bold mb-4">Utility</h3>
                     <div className="flex flex-wrap">
                        <div>
                           <ul className="space-y-2 space-x-8">
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Style Guide
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Instructions
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Licenses
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Changelog
                                 </a>
                              </li>
                           </ul>
                        </div>
                        <div>
                           <ul>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Coming Soon
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Link in Bio
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Password Protected
                                 </a>
                              </li>
                              <li>
                                 <a href="#" className="hover:text-orange-400">
                                    Error 404
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>

                  {/* Contact Column */}
                  <div>
                     <h3 className="text-xl font-bold mb-4">Contact</h3>
                     <ul className="space-y-4">
                        <li className="flex items-center hover:text-orange-400">
                           <svg
                              className="mr-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              width="24"
                              viewBox="0 0 512 512">
                              <path
                                 fill="#FFD43B"
                                 d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"
                              />
                           </svg>
                           <span>+92 303-0551517</span>
                        </li>
                        <li className="flex items-center hover:text-orange-400">
                           <svg
                              className="mr-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              width="24"
                              viewBox="0 0 512 512">
                              <path
                                 fill="#FFD43B"
                                 d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
                              />
                           </svg>{" "}
                           <span>axad@gmail.com</span>
                        </li>
                        <li className="flex items-start hover:text-orange-400">
                           <svg
                              className="mr-3"
                              xmlns="http://www.w3.org/2000/svg"
                              height="24"
                              width="24"
                              viewBox="0 0 512 512">
                              <path
                                 fill="#FFD43B"
                                 d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                              />
                           </svg>{" "}
                           <span>
                              PNY Trainings Multan
                              <br />
                              Multan, pk 60600
                           </span>
                        </li>
                     </ul>
                  </div>

                  {/* Connect Column */}
                  <div>
                     <h3 className="text-xl font-bold mb-4">Connect with Us</h3>
                     <div className="flex space-x-5 space-y-5 flex-wrap">
                        <a
                           href="#"
                           className=" hover:-translate-y-1.5 h-10 w-10 rounded-full flex items-center justify-center">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512">
                              <path
                                 fill="#FFD43B"
                                 d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"
                              />
                           </svg>{" "}
                        </a>
                        <a
                           href="#"
                           className=" hover:-translate-y-1.5 h-10 w-10 rounded-full flex items-center justify-center">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512">
                              <path
                                 fill="#FFD43B"
                                 d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                              />
                           </svg>{" "}
                        </a>
                        <a
                           href="#"
                           className="hover:-translate-y-1.5 h-10 w-10 rounded-full flex items-center justify-center">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512">
                              <path
                                 fill="#FFD43B"
                                 d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
                              />
                           </svg>{" "}
                        </a>
                        <a
                           href="#"
                           className=" hover:-translate-y-1.5 h-10 w-10 rounded-full flex items-center justify-center">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512">
                              <path
                                 fill="#FFD43B"
                                 d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                              />
                           </svg>{" "}
                        </a>
                     </div>
                  </div>
               </div>
            </div>

            {/* Footer Copyright */}
            <div className="pt-8 mt-8  text-sm text-gray-400 text-center">
               Designed by{" "}
               <a href="#" className="text-yellow-400 hover:underline">
                  Asad
               </a>
               , Powered by{" "}
               <a href="#" className="text-yellow-400 hover:underline">
                  PNY
               </a>
            </div>
         </footer>
      </>
   );
};

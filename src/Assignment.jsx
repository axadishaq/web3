import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Assignment = () => {
   return (
      <>
         <div className="bg-[url(https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e00867860c0c853dadd03c_bg-pattern-p-1600.png)] bg-black bg-no-repeat text-white overflow-x-hidden ">
            {/* <!-- Navbar --> */}
            <Navbar />
            {/* <!-- Hero Section --> */}
            <section className="relative flex flex-col md:flex-row items-center px-14 pt-10 min-h-[80vh] mb-16  z-20">
               {/* <!-- Left Text Content --> */}
               <div className="backdrop-blur-xs rounded-4xl">
                  <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">
                     Secure,{" "}
                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-400">
                        scalable
                     </span>
                     ,<br />
                     decentralized
                  </h1>
                  <p className="mt-6 text-gray-400 max-w-md">
                     Innovative blockchain solutions to transform your digital
                     ecosystem. Discover the potential of blockchain technology
                     and decentralized applications with our cutting-edge
                     solutions.
                  </p>
                  <button className="mt-8  text-black px-6 py-4 rounded-2xl font-semibold flex items-center gap-2 bg-gradient-to-r from-yellow-400 via-pink-400 to-pink-500 hover:bg-gradient-to-r hover:from-pink-600 hover:via-yellow-400 hover:to-orange-400 transition duration-500 delay-100 ease-in-out">
                     Explore our solutions
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
                  </button>
               </div>

               {/* <!-- Right 3D Image --> */}
               <div className="absolute right-0 top-0 -z-20  ">
                  <img
                     src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66dffac5762f720dbb16b9dc_vector-1.avif"
                     alt="3D object"
                     className="w-full  h-[120vh]"
                  />
               </div>
            </section>

            <div className="flex align-middle justify-center relative z-20">
               <div class="container mx-auto px-4">
                  <div class="relative backdrop-blur-xs  rounded-2xl p-8 overflow-hidden border-gray-800 border ">
                     <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* <!-- Stat Card 1 --> */}
                        <div class="flex flex-col items-center md:items-start px-4">
                           <div class="text-amber-400 mb-3 border-gray-800 border rounded-lg p-2">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-8 w-8  "
                                 viewBox="0 0 24 24"
                                 fill="currentColor">
                                 <path d="M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71z" />
                              </svg>
                           </div>
                           <h2 class="text-white text-4xl font-bold mb-2">
                              70 Million
                           </h2>
                           <p class="text-gray-300 text-center md:text-left">
                              Number of non-fungible tokens (NFTs) sold in 2023.
                           </p>
                        </div>

                        {/* <!-- Stat Card 2 --> */}
                        <div class="flex flex-col items-center md:items-start px-4">
                           <div class="text-amber-400 mb-3 border-gray-800 border rounded-lg p-2">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-8 w-8"
                                 viewBox="0 0 24 24"
                                 fill="currentColor">
                                 <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" />
                              </svg>
                           </div>
                           <h2 class="text-white text-4xl font-bold mb-2">
                              50%
                           </h2>
                           <p class="text-gray-300 text-center md:text-left">
                              Year-over-year growth in blockchain developer
                              activity.
                           </p>
                        </div>

                        {/* <!-- Stat Card 3 --> */}
                        <div class="flex flex-col items-center md:items-start px-4">
                           <div class="text-amber-400 mb-3 border-gray-800 border rounded-lg p-2">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-8 w-8"
                                 viewBox="0 0 24 24"
                                 fill="currentColor">
                                 <path d="M12 3.19L5 6.3V12c0 3.09 2.55 6.85 7 8.71 4.45-1.86 7-5.62 7-8.71V6.3l-7-3.11zM13 17h-2v-2h2v2zm0-4h-2V7h2v6z" />
                              </svg>
                           </div>
                           <h2 class="text-white text-4xl font-bold mb-2">
                              20k+
                           </h2>
                           <p class="text-gray-300 text-center md:text-left">
                              Blockchain projects currently under development
                              worldwide.
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* next section */}
            <div class="container mx-auto px-4 py-20 lg:py-32">
               <div class="max-w-4xl">
                  <h1 class="text-white text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6">
                     Reimagine your digital strategy with the next evolution of
                     Web 3
                  </h1>

                  <p class="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl">
                     By harnessing the power of blockchain, decentralized
                     applications, and smart contracts, Web 3 delivers
                     unprecedented levels of transparency, security, and
                     control.
                  </p>

                  <button className="mt-8  text-black px-6 py-4 rounded-2xl font-semibold flex items-center gap-2 bg-gradient-to-r from-orange-400 via-yellow-300 to-pink-500 hover:bg-gradient-to-r hover:from-pink-500 hover:via-pink-400 hover:to-yellow-500 transition duration-500 delay-100 ease-in-out">
                     About Us
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
                  </button>
               </div>
            </div>
            {/* end of first section till about us btn  */}
         </div>
         {/* tool section  */}
         <div className="bg-[rgb(19,19,19)] h-auto flex flex-col justify-center">
            <div class="container mx-auto px-4 py-24 ">
               {/* <!-- Heading with gradient text --> */}
               <h2 class="text-4xl md:text-5xl font-bold text-center mb-16">
                  <span class="text-white">Powerful </span>
                  <span class="bg-gradient-to-r from-yellow-500 via-orange-400 to-pink-400 text-transparent bg-clip-text">
                     tools
                  </span>
                  <span class="text-white"> & solutions</span>
               </h2>

               {/* <!-- Features Grid --> */}
               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* <!-- Feature Card 1 --> */}
                  <div class="bg-black bg-opacity-70 rounded-xl p-6 flex flex-col border border-gray-800">
                     <h3 class="text-white text-2xl font-bold mb-3">
                        Decentralization
                     </h3>
                     <p class="text-gray-400 mb-8">
                        Empower users with peer-to-peer interactions without
                        intermediaries.
                     </p>
                     <div class="mt-auto flex justify-center ">
                        <img
                           src="https://i.pinimg.com/736x/0c/3e/45/0c3e45ae4a3c17d131160317d26f2803.jpg"
                           alt="Abstract 3D shape representing decentralization"
                           class="h-48 w-48 object-contain"
                        />
                     </div>
                  </div>

                  {/* <!-- Feature Card 2 --> */}
                  <div class="bg-black bg-opacity-70 rounded-xl p-6 flex flex-col border border-gray-800">
                     <h3 class="text-white text-2xl font-bold mb-3">
                        Blockchain integration
                     </h3>
                     <p class="text-gray-400 mb-8">
                        Secure, tamper-proof transactions and data management.
                     </p>
                     <div class="mt-auto flex justify-center">
                        <img
                           src="https://i.pinimg.com/736x/48/9b/2f/489b2fdb11fbf6405a5be0c8fd75049d.jpg"
                           alt="Abstract 3D shape representing blockchain"
                           class="h-48 w-48 object-contain"
                        />
                     </div>
                  </div>

                  {/* <!-- Feature Card 3 --> */}
                  <div class="bg-black bg-opacity-70 rounded-xl p-6 flex flex-col border border-gray-800">
                     <h3 class="text-white text-2xl font-bold mb-3">
                        Smart contracts
                     </h3>
                     <p class="text-gray-400 mb-8">
                        Contracts that are enforced by code, ensuring trust and
                        efficiency.
                     </p>
                     <div class="mt-auto flex justify-center">
                        <img
                           src="https://i.pinimg.com/736x/ac/59/5b/ac595bed846c781f1b409738a8effde4.jpg"
                           alt="Abstract 3D shape representing smart contracts"
                           class="h-48 w-48 object-contain"
                        />
                     </div>
                  </div>

                  {/* <!-- Feature Card 4 --> */}
                  <div class="bg-black bg-opacity-70 rounded-xl p-6 flex flex-col border border-gray-800">
                     <h3 class="text-white text-2xl font-bold mb-3">
                        Tokenization
                     </h3>
                     <p class="text-gray-400 mb-8">
                        Create and manage digital assets, including
                        cryptocurrencies, NFTs, and tokens.
                     </p>
                     <div class="mt-auto flex justify-center">
                        <img
                           src="https://i.pinimg.com/736x/0a/52/52/0a52528cbfc9ce3edd3da0a1bca59170.jpg"
                           alt="Abstract 3D shape representing tokenization"
                           class="h-48 w-48 object-contain"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* ;next section  */}
         <div className="bg-black h-auto">
            <div class="container mx-auto px-4 py-16">
               {/* <!-- Heading with gradient text --> */}
               <h2 class="text-4xl md:text-5xl font-bold text-center mb-8">
                  <span class="bg-gradient-to-r from-yellow-500 via-orange-400 to-pink-400 text-transparent bg-clip-text">
                     Partners
                  </span>
                  <span class="text-white"> & contributors</span>
               </h2>

               {/* <!-- Description paragraph --> */}
               <div class="max-w-4xl mx-auto text-center mb-16">
                  <p class="text-gray-300 text-lg">
                     Our success is driven by a vibrant ecosystem and strategic
                     partnerships that enhance our Web 3 solutions. By
                     collaborating with industry leaders, innovators, and
                     like-minded organizations, we create a powerful network
                     that delivers value to our users and drives the future of
                     decentralized technology.
                  </p>
               </div>

               {/* <!-- Call to action buttons --> */}
               <div class="flex flex-col md:flex-row justify-center items-center gap-6 mb-20">
                  <a
                     href="#"
                     class="px-8 py-3 bg-yellow-400 border-3 border-transparent hover:border-amber-300 hover:bg-transparent hover:text-white text-black font-medium rounded-full flex items-center transition-all duration-300">
                     Get started
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor">
                        <path
                           fill-rule="evenodd"
                           d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                           clip-rule="evenodd"
                        />
                     </svg>
                  </a>
                  <div className="bg-gradient-to-r from-pink-500 via-pink-400 to-yellow-500  rounded-full  ">
                     <a
                        href="#"
                        class="px-8 py-3  bg-black text-white  font-medium flex items-center rounded-3xl border-2 border-transparent hover:bg-transparent transition duration-500 delay-100 ease-in-out ">
                        Become a partner today
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           class="h-5 w-5 ml-2"
                           viewBox="0 0 20 20"
                           fill="currentColor">
                           <path
                              fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                           />
                        </svg>
                     </a>
                  </div>
               </div>

               {/* <!-- Partner logos grid --> */}
               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                  {/* <!-- Partner Card 1 --> */}
                  <div class="shadow-[0px_2px_20px_1px_rgba(255,185,0,0.2)] border border-r-amber-400 border-t-amber-400 border-b-amber-400 rounded-4xl p-10 flex items-center justify-center h-40">
                     <div class="text-white text-2xl font-light">
                        <svg
                           class="h-12 w-auto"
                           viewBox="0 0 120 40"
                           fill="currentColor">
                           <path d="M30 10h-5v5h-5v5h5v5h5v-5h5v-5h-5z" />
                           <path d="M10 10l10 15h-20z" />
                        </svg>
                        <span class="ml-2">Logique</span>
                     </div>
                  </div>

                  {/* <!-- Partner Card 2 --> */}
                  <div class="border shadow-[0px_0px_20px_1px_rgba(255,185,0,0.2)] border-t-amber-400 border-l-amber-400 border-b-amber-400 rounded-4xl p-10 flex items-center justify-center h-40">
                     <div class="text-white text-2xl font-light">
                        <svg
                           class="h-12 w-auto"
                           viewBox="0 0 120 40"
                           fill="currentColor">
                           <circle cx="20" cy="20" r="15" />
                           <rect x="40" y="10" width="20" height="20" />
                        </svg>
                        <span class="ml-2">Artistry</span>
                     </div>
                  </div>

                  {/* <!-- Partner Card 3 --> */}
                  <div class="shadow-[0px_0px_20px_1px_rgba(255,185,0,0.2)] border border-r-amber-400 border-t-amber-400 border-b-amber-400 rounded-4xl p-10 flex items-center justify-center h-40">
                     <div class="text-white text-2xl font-light">
                        <svg
                           class="h-12 w-auto"
                           viewBox="0 0 120 40"
                           fill="currentColor">
                           <circle cx="15" cy="15" r="10" />
                           <circle cx="35" cy="15" r="10" />
                           <circle cx="25" cy="30" r="10" />
                        </svg>
                        <span class="ml-2">Mestry</span>
                     </div>
                  </div>

                  {/* <!-- Partner Card 4 --> */}
                  <div class="shadow-[0px_0px_20px_1px_rgba(255,185,0,0.2)] border border-t-amber-400 border-b-amber-400 border-r-amber-400 rounded-4xl p-10 flex items-center justify-center h-40">
                     <div class="text-white text-2xl font-light">
                        <svg
                           class="h-12 w-auto"
                           viewBox="0 0 120 40"
                           fill="currentColor">
                           <rect x="10" y="10" width="20" height="20" />
                        </svg>
                        <span class="ml-2">ICONIZE</span>
                     </div>
                  </div>
               </div>
            </div>

            <div class="container mx-auto px-4 py-16 mt-10">
               <div class="flex flex-col gap-20 md:flex-row items-center justify-between">
                  {/* <!-- Left content --> */}
                  <div class="w-full md:w-1/3 mb-10 md:mb-0">
                     <h2 class="text-4xl md:text-5xl font-bold mb-4">
                        <span class="text-white">Advance with Web 3 </span>
                        <span class="bg-gradient-to-r from-yellow-500 via-orange-500 to-pink-500 text-transparent bg-clip-text">
                           solutions
                        </span>
                     </h2>

                     <p class="text-gray-300 mb-8">
                        By integrating cutting-edge technology with
                        user-friendly design, we help you navigate the complex
                        landscape of Web 3 with confidence.
                     </p>
                  </div>

                  {/* <!-- Middle - 3D image --> */}
                  <div class="w-full md:w-1/3 flex justify-center mb-10 md:mb-0 ">
                     <img
                        src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e035e832d718796d054308_vector-6.avif"
                        alt=""
                     />
                  </div>

                  {/* <!-- Right - supported chains --> */}
                  <div class="w-full md:w-1/3 pl-8">
                     <ul class="space-y-6">
                        <li class="text-white flex items-center text-lg font-medium">
                           <span class="text-yellow-400 mr-3 text-xl">■</span>
                           Ethereum
                        </li>
                        <li class="text-white flex items-center text-lg font-medium">
                           <span class="text-yellow-400 mr-3 text-xl">■</span>
                           Binance Smart Chain (BSC)
                        </li>
                        <li class="text-white flex items-center text-lg font-medium">
                           <span class="text-yellow-400 mr-3 text-xl">■</span>
                           Polygon
                        </li>
                        <li class="text-white flex items-center text-lg font-medium">
                           <span class="text-yellow-400 mr-3 text-xl">■</span>
                           File coin
                        </li>
                     </ul>
                  </div>
               </div>
            </div>

            {/* post section */}

            <div class="container mx-auto px-4 py-16">
               {/* <!-- Section Heading --> */}
               <h2 class="text-4xl font-bold mb-12">
                  <span class="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-transparent bg-clip-text">
                     Case study
                  </span>
                  <span class="text-white"> highlights</span>
               </h2>

               {/* <!-- Case Study Cards Grid --> */}
               <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* <!-- Case Study Card 1 --> */}
                  <div class="bg-black bg-opacity-70 rounded-4xl overflow-hidden border border-gray-800 hover:border-2 hover:border-amber-400 transition duration-500 ease-in-out">
                     {/* <!-- Case Study Image --> */}
                     <div class="h-[90vh] overflow-hidden p-4 ">
                        <img
                           src="https://cdn.prod.website-files.com/66e11c84e5ff2115c3d7ad33/66e12751675b6fa204c92e25_case-1.jpg"
                           alt="Network nodes with orange connections"
                           class="w-full h-full object-cover rounded-2xl "
                        />
                     </div>

                     {/* <!-- Case Study Content --> */}
                     <div class="p-6">
                        <div class="flex items-start gap-4 mb-4">
                           {/* <!-- Icon --> */}
                           <div class="text-yellow-400 mt-1">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-8 w-8"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 stroke-width="1.5">
                                 <path d="M2 12h20M12 2v20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
                              </svg>
                           </div>

                           {/* <!-- Title --> */}
                           <h3 class="text-white text-xl font-bold">
                              Tokenizing Real Estate - Revolutionizing Property
                              Investment
                           </h3>
                        </div>

                        <p class="text-gray-400 mb-6 ml-12">
                           Transforming real estate with tokenization, making
                           property investment.
                        </p>

                        <div class="ml-12">
                           <a
                              href="#"
                              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300">
                              View details
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-4 w-4 ml-2"
                                 viewBox="0 0 20 20"
                                 fill="currentColor">
                                 <path
                                    fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                 />
                              </svg>
                           </a>
                        </div>
                     </div>
                  </div>

                  {/* <!-- Case Study Card 2 --> */}
                  <div class="bg-black bg-opacity-70 rounded-4xl overflow-hidden border border-gray-800 hover:border-2 hover:border-amber-400 transition duration-500 ease-in-out">
                     {/* <!-- Case Study Image --> */}
                     <div class="h-[90vh] overflow-hidden p-4">
                        <img
                           src="https://cdn.prod.website-files.com/66e11c84e5ff2115c3d7ad33/66e127593ce5e024a67c2b67_case-2.jpg"
                           alt="Digital lock with circuit board patterns"
                           class="w-full h-full object-cover rounded-2xl"
                        />
                     </div>

                     {/* <!-- Case Study Content --> */}
                     <div class="p-6">
                        <div class="flex items-start gap-4 mb-4">
                           {/* <!-- Icon --> */}
                           <div class="text-yellow-400 mt-1">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-8 w-8"
                                 viewBox="0 0 24 24"
                                 fill="none"
                                 stroke="currentColor"
                                 stroke-width="1.5">
                                 <circle cx="12" cy="12" r="10" />
                                 <path d="M12 8L12 16M8 12L16 12" />
                              </svg>
                           </div>

                           {/* <!-- Title --> */}
                           <h3 class="text-white text-xl font-bold">
                              Web3 Identity Solutions: Empowering Users with
                              Control
                           </h3>
                        </div>

                        <p class="text-gray-400 mb-6 ml-12">
                           How Web 3 technology enhanced transparency and
                           efficiency.
                        </p>

                        <div class="ml-12">
                           <a
                              href="#"
                              class="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300">
                              View details
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-4 w-4 ml-2"
                                 viewBox="0 0 20 20"
                                 fill="currentColor">
                                 <path
                                    fill-rule="evenodd"
                                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                 />
                              </svg>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* client section  */}
            <div class="container mx-auto px-4 py-16 relative overflow-hidden">
               {/* <!-- Decorative background element --> */}
               <div class="absolute top-40  w-full h-full bg-[url(https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e12bac9fa03628d514194e_vector-7-p-500.png)]"></div>

               {/* <!-- Section Heading --> */}
               <h2 class="text-4xl font-bold mb-12">
                  <span class="text-white">What our </span>
                  <span class="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-transparent bg-clip-text">
                     clients
                  </span>
                  <span class="text-white"> say</span>
               </h2>

               {/* <!-- Testimonials Grid --> */}
               <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {/* <!-- Testimonial 1 --> */}
                  <div class=" bg-opacity-70 border border-gray-800 rounded-xl p-6 backdrop-blur-lg">
                     <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                           <img
                              src="https://i.pinimg.com/736x/3b/52/8d/3b528de6db32b02563b3b0715a76051c.jpg"
                              alt="Alex Johnson"
                              class="w-full h-full object-cover"
                           />
                        </div>
                        <div>
                           <h3 class="text-white font-bold">Alex Johnson</h3>
                           <p class="text-gray-400 text-sm">
                              CEO, CryptoInnovate
                           </p>
                        </div>
                     </div>
                     <p class="text-gray-300">
                        Webee3 transformed our business operations with its
                        seamless blockchain integration.
                     </p>
                  </div>

                  {/* <!-- Testimonial 2 --> */}
                  <div class=" bg-opacity-70 border border-gray-800 rounded-xl p-6 backdrop-blur-lg">
                     <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                           <img
                              src="https://i.pinimg.com/736x/a1/81/db/a181dbb8335d8ae2995861e8b17f2788.jpg"
                              alt="Sophia Carter"
                              class="w-full h-full object-cover"
                           />
                        </div>
                        <div>
                           <h3 class="text-white font-bold">Sophia Carter</h3>
                           <p class="text-gray-400 text-sm">
                              Blockchain Strategist, DeFi Connect
                           </p>
                        </div>
                     </div>
                     <p class="text-gray-300">
                        The smart contract automation on Webee3 saved us time.
                     </p>
                  </div>

                  {/* <!-- Testimonial 3 --> */}
                  <div class=" bg-opacity-70 border border-gray-800 rounded-xl p-6 backdrop-blur-lg">
                     <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                           <img
                              src="https://i.pinimg.com/736x/10/af/08/10af08b8f471da9e9ac82646d6a1bd90.jpg"
                              alt="Liam Patel"
                              class="w-full h-full object-cover"
                           />
                        </div>
                        <div>
                           <h3 class="text-white font-bold">Liam Patel</h3>
                           <p class="text-gray-400 text-sm">
                              Founder, MetaVerse Ventures
                           </p>
                        </div>
                     </div>
                     <p class="text-gray-300">
                        With Webee3, we quickly launched our NFT marketplace,
                        enabling our artists to monetize their digital creations
                        effortlessly.
                     </p>
                  </div>

                  {/* <!-- Testimonial 4 --> */}
                  <div class=" bg-opacity-70 border border-gray-800 rounded-xl p-6 backdrop-blur-lg">
                     <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                           <img
                              src="https://i.pinimg.com/736x/b7/4b/19/b74b19083dd9fd30980b44d536822b06.jpg"
                              alt="Emma Rodriguez"
                              class="w-full h-full object-cover"
                           />
                        </div>
                        <div>
                           <h3 class="text-white font-bold">Emma Rodriguez</h3>
                           <p class="text-gray-400 text-sm">
                              Product Lead, DecentralEdge
                           </p>
                        </div>
                     </div>
                     <p class="text-gray-300">
                        We saw a significant reduction in transaction costs and
                        faster processing times after integrating Webee3's
                        blockchain solution.
                     </p>
                  </div>

                  {/* <!-- Testimonial 5 - Featured with video --> */}
                  <div class=" bg-opacity-70 border border-gray-800 rounded-xl p-6 backdrop-blur-lg md:col-span-1 lg:row-span-2">
                     <div class="relative mb-4 rounded-lg overflow-hidden">
                        <img
                           src="https://i.pinimg.com/736x/7f/ae/59/7fae59473c0639eec858e0ca4e1b7461.jpg"
                           alt="Video thumbnail"
                           class="w-full h-48 object-cover"
                        />
                        <div class="absolute inset-0 flex items-center justify-center">
                           <div class="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 class="h-6 w-6 text-black"
                                 fill="none"
                                 viewBox="0 0 24 24"
                                 stroke="currentColor">
                                 <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                                 />
                              </svg>
                           </div>
                        </div>
                     </div>
                     <p class="text-gray-300 mb-4">
                        The decentralized identity feature provided unmatched
                        security for our users.
                     </p>
                     <div class="flex items-center">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                           <img
                              src="https://i.pinimg.com/736x/5d/e0/2e/5de02e89a220ea1b054e2f94f9b8e3ce.jpg"
                              alt="Noah Thompson"
                              class="w-full h-full object-cover"
                           />
                        </div>
                        <div>
                           <h3 class="text-white font-bold">Noah Thompson</h3>
                           <p class="text-gray-400 text-sm">
                              Security Architect, BlockSecure
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* <!-- Testimonial 6 --> */}
                  <div class=" bg-opacity-70 border border-gray-800 rounded-xl p-6 backdrop-blur-lg">
                     <div class="flex items-center mb-4">
                        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
                           <img
                              src="https://i.pinimg.com/736x/cc/ef/e1/ccefe12e1ccb103f133673a8b779caee.jpg"
                              alt="Olivia Bennett"
                              class="w-full h-full object-cover"
                           />
                        </div>
                        <div>
                           <h3 class="text-white font-bold">Olivia Bennett</h3>
                           <p class="text-gray-400 text-sm">
                              Marketing Director, NFT Galaxy
                           </p>
                        </div>
                     </div>
                     <p class="text-gray-300">
                        Webee3 has completely transformed how we approach
                        digital operations and customer engagement. From the
                        seamless integration of blockchain technology to the
                        intuitive design of its smart contract features.
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <Footer />
      </>
   );
};

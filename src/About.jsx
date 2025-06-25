import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const About = () => {
   return (
      <div className=" bg-black  text-white">
         <Navbar />
         <section className=" text-white w-auto h-auto py-34 ">
            <div className="text-center w-auto p-20  h-auto ">
               <h1 className="text-6xl md:text-7xl font-semibold leading-tight">
                  We fuel your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-400">
                     Web3 journey
                  </span>{" "}
                  with products that unlock ownership and exploration.
               </h1>
            </div>

            <div className=" text-white py-16 px-4">
               <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
                  {/* Card 1 */}
                  <div>
                     <h2 className="text-8xl font-semibold mb-2">50M</h2>
                     <p className="text-gray-400 text-xl mb-4">Active users</p>
                     <p className="text-xl text-gray-500">
                        Speedily say has suitable disposal add boy. On fourth
                        doubt miles of child. Exercise joy man children
                        rejoiced.
                     </p>
                  </div>

                  {/* Card 2 */}
                  <div>
                     <h2 className="text-8xl font-semibold mb-2">65B+</h2>
                     <p className="text-gray-400 text-xl mb-4">
                        Assets in management
                     </p>
                     <p className="text-xl text-gray-500">
                        Perceived end knowledge certainly day sweetness why
                        cordially. Ask a quick six seven offer see among.
                     </p>
                  </div>

                  {/* Card 3 */}
                  <div>
                     <h2 className="text-8xl font-semibold mb-2">98%</h2>
                     <p className="text-gray-400 text-xl mb-4">
                        Customer satisfaction
                     </p>
                     <p className="text-xl text-gray-500">
                        Rooms oh fully taken by worse do. Points afraid but may
                        end law lasted. Was out laughter raptures returned
                        outweigh.
                     </p>
                  </div>
               </div>
            </div>
         </section>

         {/* next grid  */}
         <div className="bg-black bg-[url(https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e7be33f15da5104ea37289_vector-16.avif)] bg-linear-210 bg-cover h-auto text-white px-12 py-36 ">
            <div className="max-w-9xl  grid md:grid-cols-2 gap-8">
               {/* Left: Principles */}
               <div className="col-span-1  backdrop-blur-2xl border border-gray-500 rounded-2xl p-13">
                  <h2 className="text-5xl font-semibold mb-16">
                     The{" "}
                     <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-400 text-transparent bg-clip-text">
                        principles and mission
                     </span>{" "}
                     behind all we do.
                  </h2>

                  <div className="grid sm:grid-cols-2 gap-8">
                     {/* Principle 1 */}
                     <div className="mb-6">
                        <div className="text-yellow-400 text-4xl mb-8">📦</div>
                        <h3 className="font-semibold text-2xl mb-6">
                           Decentralization
                        </h3>
                        <p className="text-gray-400 text-lg mt-2">
                           We believe in a decentralized future where power and
                           control are distributed.
                        </p>
                     </div>

                     {/* Principle 2 */}
                     <div className="mb-6">
                        <div className="text-yellow-400 text-4xl mb-8">🧬</div>
                        <h3 className="font-semibold text-2xl mb-6">
                           Ownership
                        </h3>
                        <p className="text-gray-400 text-lg mt-2">
                           Empowering users to truly own their data, assets, and
                           identities is at the core of Web3.
                        </p>
                     </div>

                     {/* Principle 3 */}
                     <div className="mb-6">
                        <div className="text-yellow-400 text-4xl mb-8">🔍</div>
                        <h3 className="font-semibold text-2xl mb-6">
                           Transparency
                        </h3>
                        <p className="text-gray-400 text-lg mt-2">
                           We are committed to building open and transparent
                           systems that allow for accountability.
                        </p>
                     </div>

                     {/* Principle 4 */}
                     <div className="mb-6">
                        <div className="text-yellow-400 text-4xl mb-8">💡</div>
                        <h3 className="font-semibold text-2xl mb-6">
                           Innovation
                        </h3>
                        <p className="text-gray-400 text-lg mt-2">
                           Web3 is driven by continuous innovation. We push
                           boundaries by exploring new technologies.
                        </p>
                     </div>
                  </div>
               </div>

               {/* Right: Vision & CTA */}
               <div className="flex flex-col gap-14">
                  {/* Vision Card */}
                  <div className="bg-gradient-to-br from-yellow-300  to-pink-400 text-black rounded-2xl p-18">
                     <h3 className="text-5xl font-semibold mb-12">
                        The vision that guides everything we do
                     </h3>
                     <p className="text-xl text-black/80">
                        Perceived end knowledge certainly day sweetness why
                        cordially. Ask a quick six seven offer see among.
                        Handsome met debating sir dwelling age material. As
                        style lived he worse dried. Offered related so visitors
                        we private removed. Moderate do subjects to distance
                     </p>
                  </div>

                  {/* Call to Action Card */}
                  <div className="backdrop-blur-md rounded-2xl p-16 border border-gray-500 text-white">
                     <h3 className="text-5xl font-semibold mb-14">
                        Create a better future
                     </h3>
                     <button className="bg-white text-black font-semibold px-16 py-6 rounded-full hover:bg-gray-100 transition">
                        Join team
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* next  */}

         <div className=" h-auto flex flex-col justify-center w-auto">
            <div className="container mx-auto px-4 py-32 ">
               {/* <!-- Heading with gradient text --> */}
               <h2 className="text-6xl md:text-7xl font-semibold text-center mb-16">
                  <span className="text-white">Meet our </span>
                  <span className="bg-gradient-to-r from-yellow-500 via-orange-400 to-pink-400 text-transparent bg-clip-text">
                     team
                  </span>
                  <span className="text-white"> - faces of success</span>
               </h2>

               {/* <!-- Features Grid --> */}
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                  {/* <!-- Feature Card 1 --> */}
                  <div className="bg-[rgb(19,19,19)] bg-opacity-70 rounded-xl  p-6 flex flex-col justify-center border border-gray-800">
                     <div className="mt-auto flex justify-center mb-4 w-full h-full ">
                        <img
                           src="https://i.pinimg.com/736x/ac/59/5b/ac595bed846c781f1b409738a8effde4.jpg"
                           alt="Abstract 3D shape representing decentralization"
                           className="h-86 w-full rounded-3xl"
                        />
                     </div>
                     <h3 className="text-white text-2xl font-bold text-center ">
                        Kathren Lewis
                     </h3>
                     <p className="text-gray-400 text-center">
                        Co-Founder & CEO
                     </p>
                  </div>

                  {/* <!-- Feature Card 2 --> */}
                  <div className="bg-[rgb(19,19,19)] bg-opacity-70 rounded-xl  p-6 flex flex-col justify-center border border-gray-800">
                     <div className=" flex justify-center mb-4 w-full h-full ">
                        <img
                           src="https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e7c35d8eeeadb3d67d74f4_team-3.avif"
                           alt="Abstract 3D shape representing decentralization"
                           className="w-full h-full rounded-3xl"
                        />
                     </div>
                     <h3 className="text-white text-2xl font-bold text-center ">
                        Ethan Lewis
                     </h3>
                     <p className="text-gray-400 text-center">
                        Co-Founder & CEO
                     </p>
                  </div>

                  {/* <!-- Feature Card 3 --> */}
                  <div className="bg-[rgb(19,19,19)] bg-opacity-70 rounded-xl  p-6 flex flex-col justify-center border border-gray-800">
                     <div className="h-4/5 flex justify-center mb-4  ">
                        <img
                           src="https://i.pinimg.com/736x/0c/3e/45/0c3e45ae4a3c17d131160317d26f2803.jpg"
                           alt="Abstract 3D shape representing decentraw-full h-fulllization"
                           className=" rounded-3xl"
                        />
                     </div>
                     <h3 className="text-white text-2xl font-bold text-center ">
                        Olivia Wang
                     </h3>
                     <p className="text-gray-400 text-center">
                        Lead Blockchain Developer
                     </p>
                  </div>
               </div>
            </div>
         </div>

         <Footer />
      </div>
   );
};

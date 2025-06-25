import React from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Pricing = () => {
   const plans = [
      {
         name: "Starter",
         price: "$99",
         icon: "🪙",
         features: [
            "Basic Web3 template with responsive design",
            "Integration with wallet (e.g., MetaMask)",
            "Limited customization (colors, fonts, and logo)",
            "1 month of support",
            "Basic smart contract integration (e.g., for payments or NFTs)",
         ],
      },
      {
         name: "Premium",
         price: "$299",
         icon: "💰",
         tag: "Popular",
         highlight: true,
         features: [
            "All features from the Basic Plan",
            "Advanced smart contract integration (staking, governance)",
            "Full customization (layout, UI components, branding)",
            "Blog and CMS integration",
            "Support for decentralized storage (IPFS)",
            "3 months of premium support",
         ],
      },
      {
         name: "Enterprise",
         price: "$999",
         icon: "🧠",
         features: [
            "All features from the Pro Plan",
            "Custom smart contracts tailored to business needs",
            "Multichain support (e.g., Ethereum, BNB Chain, Polygon)",
            "Decentralized identity (DID) integration",
            "Custom dApp functionality (marketplaces, DAOs, etc.)",
            "Priority support for 6 months",
            "Ongoing maintenance and updates",
         ],
      },
   ];

   return (
      <div className="bg-black text-amber-50 h-auto">
         <Navbar />
         <div className="bg-black h-auto">
            <div class="container mx-auto px-4 py-16">
               {/* <!-- Heading with gradient text --> */}
               <h2 class="text-4xl md:text-5xl font-bold text-center mb-8">
                  <span class="text-white">Plan that’s </span>
                  <span class="bg-gradient-to-r from-yellow-500 via-orange-400 to-pink-400 text-transparent bg-clip-text">
                     perfect
                  </span>
                  <span class="text-white"> for you</span>
               </h2>

               {/* <!-- Description paragraph --> */}
               <div class="max-w-4xl mx-auto text-center mb-16">
                  <p class="text-gray-300 text-lg">
                     Plans for teams of 1 to 1000+ and always free to try!
                  </p>
               </div>
            </div>
            {/* cards  */}
            <div className=" text-white py-10 px-6 bg-[url(https://cdn.prod.website-files.com/66d2e912f305c6e69cfd0d6f/66e7be33f15da5104ea37289_vector-16.avif)] bg-linear-210 bg-cover">
               <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 ">
                  {plans.map((plan, idx) => (
                     <div
                        key={idx}
                        className={`rounded-3xl p-6 border-2 border-gray-500 h-fit hover:border-amber-500  ${
                           plan.highlight
                              ? "border-orange-400"
                              : "border-zinc-800"
                        } relative backdrop-blur-xl`}>
                        {/* Popular Tag */}
                        {plan.tag && (
                           <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-300 to-pink-300 text-md px-3 py-1 rounded-full text-black font-semibold">
                              {plan.tag}
                           </div>
                        )}

                        {/* Icon & Title */}
                        <div className="text-4xl mb-2">{plan.icon}</div>
                        <h3 className="text-4xl font-bold mb-1">{plan.name}</h3>
                        <p className="text-md text-gray-400 mb-4">
                           one-time fee
                        </p>

                        {/* Price */}
                        <h2 className="text-5xl font-bold mb-2">
                           {plan.price}
                        </h2>
                        <p className="text-md text-gray-500 mb-6">/per month</p>

                        {/* Button */}
                        <button
                           className={`w-full py-2 rounded-xl font-semibold ${
                              plan.highlight
                                 ? "bg-gradient-to-r from-yellow-300 to-pink-300 text-black"
                                 : "bg-yellow-400 text-black"
                           }`}>
                           Get started
                        </button>

                        {/* Features */}
                        <div className="mt-6 text-md space-y-5">
                           <p className="font-semibold text-yellow-400">
                              ✓ Expertise in Web 3 technology
                           </p>
                           <p className="font-semibold text-yellow-400">
                              ✓ Tailored solutions for your business
                           </p>
                           <p className="text-gray-400 font-medium">
                              Free Elements:
                           </p>
                           {plan.features.map((feat, i) => (
                              <p key={i} className="text-gray-300">
                                 ✓ {feat}
                              </p>
                           ))}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
         <Footer />
      </div>
   );
};

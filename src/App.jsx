import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { User } from "./User";
import { NavbarCard } from "./NavbarCard";
import { Hero } from "./Hero";
import { ContactUs } from "./ContactUs";
import { Assignment } from "./Assignment";
import { BrowserRouter, Route, Routes } from "react-router";
import { About } from "./About";
import { Pricing } from "./Pricing";

function App() {
   const [count, setCount] = useState(0);

   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<Assignment />}></Route>
               <Route path="/about" element={<About />}></Route>
               <Route path="/pricing" element={<Pricing />}></Route>
            </Routes>
         </BrowserRouter>

         {/* <Assignment2 /> */}
         {/* <User /> */}

         {/* <Hero />
                  <NavbarCard />
                  <ContactUs /> */}

         {/* <h1 className="text-3xl font-bold">
            Terri rerere ereere reerere ree!🐱‍👤🍒
         </h1>
        */}
      </>
   );
}

export default App;

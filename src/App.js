import React from "react";
import Contact from "./components/ Contact";
import Food from "./components/Food";
import HeadlineCards from "./components/HeadlineCards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="w-full bg-gray-950">
      <div className="max-v-screen-xl mx-auto lg:pt-10">
        <Navbar />
        <Hero />
        <HeadlineCards />
        <Food />
        <Contact />
      </div>
    </main>
  );
}

export default App;

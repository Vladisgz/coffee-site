import React from "react";

const Hero = () => {
  return (
    <div className="p-4">
      <div className="max-v-screen-xl mx-auto relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-400">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-orange-400">Coffee</span> Shops
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover rounded-lg"
          src="https://img.freepik.com/free-photo/aerial-view-of-various-coffee_53876-16565.jpg?w=2000&t=st=1688477192~exp=1688477792~hmac=70bd849cef1d4e862f06ab9a8f8238d82125084c9cf96edfbe682ee49e5ffa51"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;

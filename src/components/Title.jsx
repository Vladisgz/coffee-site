import React from "react";

const Title = ({ text, icon }) => {
  return (
    <div className="flex justify-center items-center gap-3 text-4xl group pb-10">
      <h3 className="text-white font-semibold relative overflow-hidden">
        {text}
        <span className="w-full h-[2px] absolute bottom-0 left-0 inline-block bg-orange-400 -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-400"></span>
      </h3>
      <span className="text-orange-400">{icon}</span>
    </div>
  );
};

export default Title;

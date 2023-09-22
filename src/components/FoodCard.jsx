import React from "react";

const FoodCard = ({ title, link, img }) => {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <div className="w-80 h-80 overflow-hidden relative rounded-lg group">
        <img
          className="object-cover translate-y-0 group-hover:-translate-y-[20%] transition-transform duration-[3s]"
          width={350}
          height={350}
          src={img}
          alt=""
        />
        <p className="absolute hidden group-hover:inline-block bottom-0 w-full py-1 bg-orange-600 text-white text-center font-semibold duration-600">
          {title}
        </p>
      </div>
    </a>
  );
};

export default FoodCard;

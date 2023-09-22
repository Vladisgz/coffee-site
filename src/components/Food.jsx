import React from "react";
import { GiCoffeeBeans } from "react-icons/gi";
import Title from "./Title";
import carryMenu from "../img/carry.png";
import coffeeB from "../img/coffeebean.png";
import starsCoffee from "../img/starscoffee.png";
import twinzCoffee from "../img/twinz.png";
import FoodCard from "./FoodCard";

const coffeeShops = [
  {
    title: "Twinz Coffee",
    img: twinzCoffee,
    link: "https://twinzcoffee.ru/",
  },
  {
    title: "Stars Coffee",
    img: starsCoffee,
    link: "https://stars-coffee.ru/",
  },
  {
    title: "Carrie Самара",
    img: carryMenu,
    link: "https://polyana.co/restaurant/%D0%BA%D1%8D%D1%80%D1%80%D0%B8/",
  },
  {
    title: "Coffee Bean",
    img: coffeeB,
    link: "https://coffeebean.ru/adresa/samara-leningradskaia/",
  },
];

export const Food = () => {
  return (
    <div className="px-4 border-b-[1px] border-b-slate-700 py-20">
      <Title text="Кофейни рядом" icon={<GiCoffeeBeans />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 lg:gap-0 place-items-center justify-center">
        {coffeeShops.map((shop, index) => (
          <FoodCard key={index} {...shop} />
        ))}
      </div>
    </div>
  );
};

export default Food;

/* rafc */
import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite } from "react-icons/md";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu className="text-white" size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2 text-white">
          Coffee<span className="font-bold text-orange-400">Shops</span>
        </h1>
        <label class="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" value="" class="sr-only peer" />

          <div className="hidden lg:flex items-center bg-gray-200 border rounded-full ">
            <p className="bg-black text-white rounded-full p-2">Доставка</p>
            <p className="p-2 text-black">Самовывоз</p>
          </div>
        </label>
      </div>

      <div className="bg-gray-200 rounded-full text-black flex items-center px-2 w-[200px] sm:w-[300px] lg:w-[400px]">
        <AiOutlineSearch size={25} />
        <input
          className="bg-transparent p-2 focus:outline-none"
          type="text"
          placeholder="Найди свой кофе"
        />
      </div>
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />

        <h2 className="text-2xl p-4">
          Coffee <span className="font-bold">Shop</span>
        </h2>
        <nav className="text-black">
          <ul className="flex flex-col p-4 to-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" />
              Заказы
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" />
              Избранное
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" />
              Кошелек
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" />
              Акции
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" />
              Пригласи друга
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

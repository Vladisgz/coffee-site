import React from "react";
import Title from "./Title";
import { MdOutlineContactSupport } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
// import { SiFampay } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";

const Contact = () => {
  return (
    <div className="border-b-[1px] border-b-slate-700 py-20">
      <Title text="Контакты" icon={<MdOutlineContactSupport />} />
      <div className="grid grid-cols-4 max-w-screen-xl mx-auto gap-6">
        <div className="flex flex-col gap-3">
          <h1 className="font-titleFont text-xl sm:text-2xl lg:text-3xl text-white">
            Coffee
            <span className="font-titleFont font-bold text-orange-400">
              Shops
            </span>
          </h1>
          <p className="font-titleFont text-gray-400 text-sm tracking-wide">
            Ⓒ2023 Vladislav Khorenko
          </p>
          <div className="flex gap-4 text-lg text-gray-400">
            <a
              href="https://github.com/Vladisgz"
              target="_blank"
              rel="noreferrer"
              alt="gitlink"
            >
              <ImGithub className="hover:text-white duration-300 cursor-pointer" />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100006700171814"
              target="_blank"
              rel="noreferrer"
              alt="facebooklink"
            >
              <FaFacebookF className="hover:text-white duration-300 cursor-pointer" />
            </a>
            <a
              href="https://www.instagram.com/vladiskhorenko/"
              target="_blank"
              rel="noreferrer"
              alt="instlink"
            >
              <FaInstagram className="hover:text-white duration-300 cursor-pointer" />
            </a>
          </div>
        </div>
        <div>
          <div className="text-base text-gray-400 flex flex-col gap-3 font-bodyFont">
            <p>Самара, Россия</p>
            {/* <p>Mobile: 89198044708</p> */}
            <a href="tel:89198044708" className="hover:text-white">
              Телефон: +79198044708
              {/* <span className="text-sm hover:text-white">+79198044708</span> */}
            </a>
            {/* <p>e-mail: pmvladi@yandex.ru</p> */}
            <a
              href="mailto:pmvladi@yandex.ru"
              className="text-sm hover:text-white"
            >
              e-mail: pmvladi@yandex.ru
              {/* <span className="text-sm hover:text-white ">
                pmvladi@yandex.ru
              </span> */}
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 text-base">
            <p className="flex items-center gap-3 text-gray-400 hover:text-white duration-300 cursor-pointer">
              <span>
                <BsPersonFill />
              </span>
              аккаунт
            </p>
            {/* <p className="flex items-center gap-3 text-gray-400 hover:text-white duration-300 cursor-pointer">
              <span>
                <SiFampay />
              </span>
              checkout
            </p> */}
            <p className="flex items-center gap-3 text-gray-400 hover:text-white duration-300 cursor-pointer">
              <span>
                <CiDeliveryTruck />
              </span>
              отследить заказ
            </p>
            <p className="flex items-center gap-3 text-gray-400 hover:text-white duration-300 cursor-pointer">
              <span>
                <MdOutlineContactSupport />
              </span>
              помощь и поддержка
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <input
            className="bg-transparent border rounded-xl px-4 py-2 text-sm w-60 h-8 text-white outline-none"
            // className="border bg-transparent border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500 outline-none"
            type="text"
            placeholder="e-mail"
          />
          {/* <button className="text-sm border text-gray-300 border-t-0 hover:bg-gray-900 active:bg-white active:text-black text-bodyFont"> */}
          <button className="text-sm text-gray-300 text-bodyFont border hover:text-white">
            Подписаться
          </button>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact;

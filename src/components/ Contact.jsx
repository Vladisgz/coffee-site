import React from "react";
import Title from "./Title";
import { MdOutlineContactSupport } from "react-icons/md";
import { ImGithub } from "react-icons/im";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";

const SocialMediaLink = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    alt={href}
    className="hover:text-white duration-300 cursor-pointer"
  >
    {icon}
  </a>
);

const UseLink = ({ icon, text }) => (
  <p className="flex items-center gap-3 text-gray-400 hover:text-white duration-300 cursor-pointer">
    <span>{icon}</span>
    {text}
  </p>
);

const Contact = () => {
  return (
    <div className="border-b-[1px] border-b-slate-700 py-20">
      <Title text="Контакты" icon={<MdOutlineContactSupport />} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-screen-xl mx-auto gap-6">
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
            <SocialMediaLink
              href="https://github.com/Vladisgz"
              icon={<ImGithub />}
            />
            <SocialMediaLink
              href="https://www.facebook.com/profile.php?id=100006700171814"
              icon={<FaFacebookF />}
            />
            <SocialMediaLink
              href="https://www.instagram.com/vladiskhorenko/"
              icon={<FaInstagram />}
            />
          </div>
        </div>
        <div>
          <div className="text-base text-gray-400 flex flex-col gap-3 font-bodyFont">
            <p>Самара, Россия</p>
            <a href="tel:89198044708" className="hover:text-white">
              Телефон: +79198044708
            </a>
            <a
              href="mailto:pmvladi@yandex.ru"
              className="text-sm hover:text-white"
            >
              e-mail: pmvladi@yandex.ru
            </a>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 text-base">
            <UseLink icon={<BsPersonFill />} text="аккаунт" />
            <UseLink icon={<CiDeliveryTruck />} text="отследить заказ" />
            <UseLink
              icon={<MdOutlineContactSupport />}
              text="помощь и поддержка"
            />
          </div>
        </div>
        <div className="flex flex-col items-end justify-center">
          <input
            className="bg-transparent border rounded-xl px-4 py-2 text-sm w-60 h-8 text-white outline-none"
            type="text"
            placeholder="e-mail"
          />
          <button className="text-sm text-gray-300 text-bodyFont border hover:text-white">
            Подписаться
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";

const HeadlineCards = () => {
  return (
    <div className="p-4 pt-6 py-4 grid md:grid-cols-3 gap-6">
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Кофе недели</p>
          <p className="px-2">Каждый понедельник</p>
          <button className="border-none bg-white/80 hover:bg-white duration-200 text-black mx-2 absolute bottom-4">
            Показать
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
          src="https://img.freepik.com/free-photo/close-up-hand-pouring-milk-in-delicious-coffee-cup_23-2148865585.jpg?w=2000&t=st=1688477568~exp=1688478168~hmac=edb4b084260debbac007a683f4987ee11d6c4cef9e2e87449eae96779b271d05"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Новые кофейни</p>
          <p className="px-2">Каждый найдет свое</p>
          <button className="border-none bg-white/80 hover:bg-white duration-200 text-black mx-2 absolute bottom-4">
            Показать
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl"
          src="https://img.freepik.com/free-photo/people-at-the-coffee-shop_53876-47028.jpg?w=2000&t=st=1688477689~exp=1688478289~hmac=4c3d2e682b754940c24ee13dcc152c6c87c2954cca19369824753934a5f446de"
          alt="/"
        />
      </div>
      <div className="rounded-xl relative">
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold text-2xl px-2 pt-4">Десерты</p>
          <p className="px-2">Просто попробуй</p>
          <button className="border-none bg-white/80 hover:bg-white duration-200 text-black mx-2 absolute bottom-4">
            Заказать
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px] w-full h-full object-cover rounded-xl"
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt=""
        />
      </div>
    </div>
  );
};

export default HeadlineCards;

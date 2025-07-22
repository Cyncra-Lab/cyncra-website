import Image from "next/image";
import React from "react";

const Amazing = () => {
  return (
    <div
      className="px-5 lg:px-20 py-10 flex flex-col items-center justify-center"
      style={{ background: `url('/amazing.svg')` }}
    >
      <h1 className="font-bold text-4xl lg:text-5xl px-0 lg:px-120 text-center leading-[1.5] mb-9">
        <span className="text-[#FFA629]">Lets Create an</span> Amazing Project
        <span className="text-[#FFA629]"> together</span>
      </h1>
      <button className="bg-[#02353C] text-white font-bold text-lg cursor-pointer hover:opacity-80 h-14 w-full lg:w-[383px] flex justify-center items-center rounded-2xl mb-15 lg:mb-31">
        Book a Free Call{" "}
        <Image
          src="/call.svg"
          alt="call"
          height={24}
          width={24}
          className="ml-2"
        />
      </button>
    </div>
  );
};

export default Amazing;

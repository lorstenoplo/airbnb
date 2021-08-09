import React from "react";
import Image from "next/image";

export const Banner: React.FC = () => {
  return (
    <div
      className={"relative h-[500px] lg:h-screen 2xl:h-[700px]"}
      style={{ transform: "translateY(-72px)" }}
    >
      <Image
        className="brightness-50 sm:brightness-100"
        src={"/banner.jpg"}
        layout={"fill"}
        objectFit={"cover"}
      />
      <div
        className={
          "absolute top-1/4 w-full text-left pl-10 sm:pl-20 flex flex-col"
        }
      >
        <p className="text-[38px] sm:text-[50px] font-bold text-white max-w-[24rem] leading-10 sm:leading-[3.5rem]">
          Olympian & Paralympian Online Experiences
        </p>

        <button className="bg-white rounded-md px-3 py-3.5 w-28 sm:w-36 mt-12 text-sm sm:text-lg font-semibold text-gray-700 btn">
          Explore Now
        </button>
      </div>
    </div>
  );
};

import React from "react";
import Image from "next/image";

export const Banner: React.FC = () => {
  return (
    <div
      className={"relative h-[300px] sm:h-[400px] lg:h-screen 2xl:h-[700px]"}
      style={{ transform: "translateY(-72px)" }}
    >
      <Image src={"/banner.jpg"} layout={"fill"} objectFit={"cover"} />
      <div className={"absolute top-1/4 w-full text-left pl-20 flex flex-col"}>
        <p className="hidden sm:inline-flex text-sm sm:text-[50px] font-bold text-white max-w-[24rem] leading-[3.5rem]">
          Olympian & Paralympian Online Experiences
        </p>

        <button className="bg-white rounded-md px-3 py-3.5 w-36 mt-12 text-lg font-semibold text-gray-700 btn">
          Explore Now
        </button>
      </div>
    </div>
  );
};

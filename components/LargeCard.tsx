import React from "react";
import Image from "next/image";

interface Props {
  title: string;
  img: string;
  desc: string;
  buttonTxt: string;
}

export const LargeCard: React.FC<Props> = ({ title, img, buttonTxt, desc }) => {
  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-4xl mb-3 w-64 font-semibold">{title}</h3>
        <p>{desc}</p>

        <button className="text-sm text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonTxt}
        </button>
      </div>
    </section>
  );
};

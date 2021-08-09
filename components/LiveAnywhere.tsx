import React from "react";
import { CardDataType } from "../types/CardDataType";
import Image from "next/image";

interface Props {
  cardData: [CardDataType];
}

export const LiveAnywhere: React.FC<Props> = ({ cardData }) => {
  return (
    <section>
      <h2 className="font-semibold text-4xl py-8">Live Anywhere</h2>
      <div className="flex sm:grid sm:grid-cols-4 space-x-6 overflow-scroll scrollbar-hide p-3 -ml-3">
        {cardData?.map((item) => (
          <MediumCard key={item.img} item={item} />
        ))}
      </div>
    </section>
  );
};

const MediumCard: React.FC<{ item: CardDataType }> = ({
  item: { img, title },
}) => {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out md:flex md:flex-col">
      <div className="relative h-52 w-52 sm:w-auto sm:h-60">
        <Image src={img} layout="fill" className="rounded-xl h-full w-full" />
      </div>
      <span>
        <h3 className="text-md sm:font-semibold sm:text-2xl mt-3">{title}</h3>
      </span>
    </div>
  );
};

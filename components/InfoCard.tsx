import React from "react";
import Image from "next/image";

import { searchResult } from "../types/searchResult";
import { HeartIcon, StarIcon } from "@heroicons/react/solid";

interface Props {
  item: searchResult;
}

export const InfoCard: React.FC<Props> = ({ item }) => {
  return (
    <div
      className={
        "flex py-5 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t"
      }
    >
      <div className={"relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0"}>
        <Image
          src={item.img}
          layout={"fill"}
          objectFit={"cover"}
          className={"rounded-2xl"}
        />
      </div>

      <div className={"flex flex-col flex-grow pl-5"}>
        <div className={"flex justify-between"}>
          <p>{item.location}</p>
          <HeartIcon className={"h-7 cursor-pointer"} />
        </div>

        <h4 className={"text-xl"}>{item.title}</h4>

        <div className={"border-b w-10 pt-2"} />

        <p className={"text-sm pt-2 text-gray-500 flex-grow"}>
          {item.description}
        </p>

        <div className={"flex justify-between items-end pt-5"}>
          <p className={"flex items-center"}>
            <StarIcon className={"h-5 text-red-400"} />
            {item.star}
          </p>

          <div>
            <p className={"font-semibold pb-2 text-lg lg:text-2xl"}>
              {item.price}
            </p>
            <p className={"text-right font-extralight"}>{item.total}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import { exploreDataType } from "../types/exploreDataType";
import Image from "next/image";

interface Props {
  exploreData: [exploreDataType];
}

export const ExploreNearBy: React.FC<Props> = ({ exploreData }) => {
  return (
    <section>
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreData?.map((item) => (
          <Card key={item.img} item={item} />
        ))}
      </div>
    </section>
  );
};

const Card: React.FC<{ item: exploreDataType }> = ({ item }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transform transition duration-200 ease-out">
      {/* left */}
      <div className="h-16 w-16 relative">
        <Image src={item.img} layout="fill" className="rounded-lg" />
      </div>

      {/* right */}
      <div>
        <h2>{item.location}</h2>
        <h3 className="text-gray-500">{item.distance}</h3>
      </div>
    </div>
  );
};

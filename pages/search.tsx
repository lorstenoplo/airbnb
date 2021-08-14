// @flow
import React from "react";
import { Footer, Header, InfoCard } from "../components";
import { useRouter } from "next/router";
import { format } from "date-fns";
import { GetServerSideProps } from "next";
import { searchResult } from "../types/searchResult";

interface Props {
  searchResults: [searchResult];
}

const Search: React.FC<Props> = ({ searchResults }) => {
  const router = useRouter();
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(
    new Date(startDate as string),
    "dd MMMM yy"
  );
  const formattedEndDate = format(new Date(endDate as string), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div>
      <Header onlyWhitebg />

      <main className={"flex"}>
        <section className={"flex-grow pt-10 px-6"}>
          <p className={"text-xs"}>
            300+ Stays - {range} - for {noOfGuests} number of guests
          </p>
          <h1 className={"text-3xl font-semibold mt-2 mb-6"}>
            Stays in {location}
          </h1>

          {/*    filters*/}
          <div
            className={
              "hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap"
            }
          >
            <p className="filter-btn">Cancellation Flexibility</p>
            <p className="filter-btn">Type of Place</p>
            <p className="filter-btn">Price</p>
            <p className="filter-btn">Rooms and Beds</p>
            <p className="filter-btn">More filters</p>
          </div>

          <div className={"flex flex-col"}>
            {searchResults.map((item) => (
              <InfoCard key={item.img} item={item} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  console.log(context);

  return {
    props: { searchResults },
  };
};

export default Search;

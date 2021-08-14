import { NextPage } from "next";
import {
  Banner,
  Header,
  ExploreNearBy,
  LiveAnywhere,
  LargeCard,
  Footer,
} from "../components";
import { CardDataType } from "../types/CardDataType";
import { exploreDataType } from "../types/exploreDataType";

interface Props {
  exploreData: [exploreDataType];
  cardData: [CardDataType];
}

const Home: NextPage<Props> = ({ exploreData, cardData }) => {
  return (
    <div className="dark:bg-gray-900">
      {/*Header*/}
      <Header />
      {/*Banner*/}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* main section */}
        <ExploreNearBy exploreData={exploreData} />
        <LiveAnywhere cardData={cardData} />
        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest OutDoors"
          desc="Whislists curated by Airbnb"
          buttonTxt="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
};

export default Home;

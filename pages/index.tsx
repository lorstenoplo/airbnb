import { NextPage } from "next";
import { Banner, Header, ExploreNearBy } from "../components";
import { exploreDataType } from "../types/exploreDataType";

interface Props {
  exploreData: [exploreDataType];
}

const Home: NextPage<Props> = ({ exploreData }) => {
  return (
    <div className="dark:bg-gray-900">
      {/*Header*/}
      <Header />
      {/*Banner*/}
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        {/* main section */}
        <ExploreNearBy exploreData={exploreData} />
      </main>
      <div className={"h-screen"} />
    </div>
  );
};

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  return {
    props: {
      exploreData,
    },
  };
}

export default Home;

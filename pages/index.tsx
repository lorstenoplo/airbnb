import { NextPage } from "next";
import Head from "next/head";
import { Header, Banner } from "../components";

const Home: NextPage = () => {
  return (
    <div className="dark:bg-gray-900">
      <Head>
        <title>Airbnb</title>
        <meta
          name="description"
          content="Best airbnb clone created by nishanth"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*Header*/}
      <Header />
      {/*Banner*/}
      <Banner />

      <div className={"h-screen"} />
    </div>
  );
};

export default Home;

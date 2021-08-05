import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen p-10 dark:bg-gray-900">
      <Head>
        <title>Airbnb</title>
        <meta
          name="description"
          content="Best airbnb clone created by nishanth"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;

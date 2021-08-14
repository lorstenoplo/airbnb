import "tailwindcss/tailwind.css";
import "../styles/global.css";

import Head from "next/head";
import { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <meta
          name="description"
          content="Best airbnb clone created by nishanth"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;

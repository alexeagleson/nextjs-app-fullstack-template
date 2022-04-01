import type { NextPage } from "next";
import Head from "next/head";
import SearchBar from "../components/cards/SearchBar";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NextJs Demo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <SearchBar />
      </main>

      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default Home;

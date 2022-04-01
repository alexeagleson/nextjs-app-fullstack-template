import type { NextPage } from "next";
import Head from "next/head";
import AppShell from "../components/shells/AppShell";

import Search from "../components/widgets/Search";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="NextJs Demo App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell>
        <Search />
      </AppShell>
    </>
  );
};

export default Home;

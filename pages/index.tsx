import type { NextPage } from 'next';
import Head from 'next/head';
import AppShell from '../components/shells/AppShell';
import SearchResult from '../components/widgets/search-result/SearchResult';
import Search from '../components/widgets/search/Search';
import { mockSearchResult } from '../lib/search/mocks';

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
        <SearchResult {...mockSearchResult} className="mt-48" />
      </AppShell>
    </>
  );
};

export default Home;

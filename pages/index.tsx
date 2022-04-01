import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import AppShell from '../components/shells/AppShell';
import Search from '../components/widgets/search-feature/SearchFeature';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { SSRConfig } from 'next-i18next';

interface IHome extends SSRConfig {}

export const getStaticProps: GetStaticProps<IHome> = async ({ locale }) => {
  const localeWithFallback = locale ?? 'en';
  const translations = await serverSideTranslations(localeWithFallback, [
    'common',
  ]);

  return {
    props: {
      // Will be passed to the page component as props
      ...translations,
    },
  };
};

const Home: NextPage<IHome> = (props) => {
  return (
    <>
      <Head>
        <title>NextJs Fullstack Template</title>
        <meta name="description" content="NextJs Fullstack Template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppShell {...props}>
        <Search />
      </AppShell>
    </>
  );
};

export default Home;

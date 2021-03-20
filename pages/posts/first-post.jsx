import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';

const FirstPost = () => {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Layout>
        <h1>First Post</h1>
      </Layout>
    </>
  );
};

export default FirstPost;

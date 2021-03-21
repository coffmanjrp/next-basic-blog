import Head from 'next/head';
import Layout, { name, siteTitle } from '../components/Layout';
import { getSortedPostsData } from '../lib/posts';
import utilStyles from '../styles/utils.module.css';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hello, I'm {name}. I'm a front-end developer.
          <br /> Fluent on English/Japanese. You can contact me on
          coffmanjrp@gmail.com
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData &&
            allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                {title}
                <br />
                {id}
                <br />
                {date}
              </li>
            ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();

  return {
    props: {
      allPostsData,
    },
  };
}

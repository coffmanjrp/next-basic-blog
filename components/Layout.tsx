import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/Layout.module.css';

type Props = {
  children: React.ReactNode;
  home?: boolean;
};

const Layout = ({ children, home }: Props) => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="robots" content="noindex, nofollow" />
        </Head>
        <header className={styles.header}>
          {home ? (
            <>
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                width={144}
                height={144}
                alt={name}
              />
              <h1 className={utilStyles.heading2X1}>{name}</h1>
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={utilStyles.borderCircle}
                    width={144}
                    height={144}
                    alt={name}
                  />
                </a>
              </Link>
              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
            </>
          )}
        </header>
        <main>{children}</main>
        {!home && (
          <div className={styles.backToHome}>
            <Link href="/">
              <a>👈 Back To Home</a>
            </Link>
          </div>
        )}
      </div>
    </>
  );
};

export const name = 'JR';

export const siteTitle = 'Next.js Sample Website';

export default Layout;

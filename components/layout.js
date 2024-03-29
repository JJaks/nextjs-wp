import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';
import DarkModeToggle from './darkmode/darkmode-toggle';
import Router from 'next/router'

const name = 'Jaagop Janson';
export const siteTitle = 'Jaagop Janson';

export default function Layout({ children, home}) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Jaagop's little space on the internet."
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />

        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />

      </Head>

      <motion.div initial="hidden" animate="visible" variants={{
        hidden: {
          scale: .8,
          opacity: 0
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: .4
          }
        },
      }}>
        <header className={styles.header}>

          {home ? (
            <>
              <img
                src="/images/profile.svg"
                className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
                alt={name}
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <DarkModeToggle />
            </>
          ) : (
            <>
              <Link href="/">
                <a>
                  <img
                    src="/images/profile.svg"
                    className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                    alt={name}
                  />
                </a>
              </Link>

              <h2 className={utilStyles.headingLg}>
                <Link href="/">
                  <a className={utilStyles.colorInherit}>{name}</a>
                </Link>
              </h2>
              <DarkModeToggle />

            </>
          )}
        </header>
      </motion.div>

      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
            <a onClick={() => Router.back()}>← Go back</a>
        </div>
      )}
    </div>
  );
}

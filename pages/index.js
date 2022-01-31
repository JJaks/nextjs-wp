import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {

  return (
    <Layout home>
      <Head>

        <title>Jaagop</title>
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
        <section className={utilStyles.headingMd}>
          <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <p className="description-p">Hi, I'm <b>Jaagop</b>! I'm a full-stack developer. I love simplicity and minimalism.</p>
            <div className="grid">
              <Link href="/me/portfolio"><a className="card">
                <h3 className="description-h3">Portfolio &rarr;</h3>
                <p className="description-p">Work that I have done for clients and school projects.</p>
              </a>
              </Link>
            </div>

            <div className="grid">
              <Link href="/me/blog"><a className="card">
                <h3 className="description-h3">Blog &rarr;</h3>
                <p className="description-p">My little space to write out my thoughts about different subjects.</p>
              </a>
              </Link>
            </div>

            <div className="grid">
              <Link href="/me/misc"><a className="card">
                <h3 className="description-h3">Utilities &rarr;</h3>
                <p className="description-p">Random software utilities & fun stuff I recommend.</p>
              </a>
              </Link>
            </div>

            <div className="grid">
              <Link href="/me/aboutme"><a className="card">
                <h3 className="description-h3">About &rarr;</h3>
                <p className="description-p">Want to know more about me and my skills? Click here.</p>
              </a>
              </Link>
            </div>

            <div className="grid">
              <Link href="/me/contactme"><a className="card">
                <h3 className="description-h3">Contact me &rarr;</h3>
                <p className="description-p">Here are some different ways that you can contact me.</p>
              </a>
              </Link>
            </div>
          </section>
        </section>
      </motion.div>
    </Layout >

  );

}

import Head from 'next/head'
import Layout from '../../components/layout';
import utilStyles from '../../styles/utils.module.css'
import { getSortedPostsData } from '../../lib/posts'
import Link from 'next/link'
import Date from '../../components/date'
import { motion } from 'framer-motion';

export default function blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Blog</title>
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
        <section>
            <h1 className="blog-title-section-h1">Blog</h1>
            <p className="blog-title-section-p">This is my little space where I can speak about my experiences and thoughts.</p>
        </section>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>

      </motion.div>
      <style jsx>{`
        .blog-title-section-h1 {
            text-align: center;
            margin:0;
        }
        .blog-title-section-p {
            text-align: center;
            color: #999;
            margin: 0;
        }
      `}</style>

    </Layout>

  );
}
export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

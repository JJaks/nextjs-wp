import Head from 'next/head'
import Layout, { siteTitle } from '../../components/layout'
import { getSortedPostsData } from '../../lib/posts'
import utilStyles from '../../styles/utils.module.css'
import Date from '../../components/date'
import Link from 'next/link'
import { motion } from 'framer-motion';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }

export default function blog({ allPostsData }){


    return (
        <Layout>
        <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity: 0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .8
            }
          },
        }}>
        <h1>Blog</h1>
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
        </motion.div>
        </Layout>
    )
}
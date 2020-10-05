import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import Date from '../components/date'
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

export default function Home({ allPostsData }) {
  
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
              delay: .8
            }
          },
        }}>
      <section className={utilStyles.headingMd}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        
        <p>Hi, I'm <b>Jaagop</b>! I love web design and this is my little space on the internet.</p>
        
          <div className="grid">
          <Link href="/me/portfolio" className="card"><a>
            <h3>Portfolio</h3>
            <p>Work that I have done for clients and school projects.</p>
            </a>
            </Link>
          </div>

          <div className="grid">
          <Link href="/me/blog" className="card"><a>
            <h3>Blog</h3>
            <p>Random Blog where I occasionally discuss about different things.</p>
            </a>
            </Link>
          </div>
          
          
        </section>
      </section>
      </motion.div>
    </Layout>
    
  )

}

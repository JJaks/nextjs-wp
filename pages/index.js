import Head from 'next/head'
import Layout from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
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
              delay: .4
            }
          },
        }}>
      <section className={utilStyles.headingMd}>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        
        <p>Hi, I'm <b>Jaagop</b>! I'm a novice web designer and develeoper. I love simplicity and minimalism.</p>
        
          <div className="grid">
          <Link href="/me/portfolio"><a className="card">
            <h3>Portfolio &rarr;</h3>
            <p>Work that I have done for clients and school projects.</p>
            </a>
            </Link>
          </div>

          <div className="grid">
          <Link href="/me/blog"><a className="card">
            <h3>Blog &rarr;</h3>
            <p>Random Blog where I occasionally discuss about different things.</p>
            </a>
            </Link>
          </div>
          
          <div className="grid">
          <Link href="/me/aboutme"><a className="card">
            <h3>About &rarr;</h3>
            <p>Want to know more about me and my skills? Click here.</p>
            </a>
            </Link>
          </div>

          <div className="grid">
          <Link href="/me/contactme"><a className="card">
            <h3>Contact me &rarr;</h3>
            <p>Here are some different ways that you can contact me.</p>
            </a>
            </Link>
          </div>
        </section>
      </section>
      </motion.div>
    </Layout>
    
  )

}

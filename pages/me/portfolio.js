import Layout from '../../components/layout'
import Head from 'next/head'
import { motion } from 'framer-motion';

export default function portfolio() {
    return (
        <Layout>
        <Head>
          <title>Portfolio</title>
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
        <h1>Portfolio</h1>
        </motion.div>
        </Layout>
      )
      
}
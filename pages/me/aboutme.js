import Layout from '../../components/layout'
import Head from 'next/head'
import { motion } from 'framer-motion';

export default function aboutme() {
    return (
        <Layout>
        <Head>
          <title>About me</title>
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
        <h1>About me</h1>
        <p>
            In short I'm a novice web designer and developer who loves to play around with different designs.
            I also love to try new things, which is why I have been getting into App developement and back-end work.
        </p>
        <br>
        </br>
        <h2>I believe in simplicity and minimalism.</h2>

        </motion.div>
      </Layout>
        
      )
}
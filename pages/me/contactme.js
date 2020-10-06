import Layout from '../../components/layout'
import Head from 'next/head'
import { motion } from 'framer-motion';

export default function contactme() {
    return (
        <Layout>
        <Head>
          <title>Contact me</title>
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
        <h1>Contact me</h1>
        <div className="grid">
          <a href="https://t.me/jaagop" className="card">
            <h3>Telegram &rarr;</h3>
            <p>I use telegram mainly so you will probably get the quickest response from me there.</p>
          </a>

          <a href="https://twitter.com/jaagopj/" className="card">
            <h3>Twitter &rarr;</h3>
            <p>Twitter is mainly for presonal use but if you want to follow me or DM me there, then go ahead.</p>
          </a>

          <a
            href="mailto:jaagopj@gmail.com"
            className="card"
          >
            <h3>E-mail &rarr;</h3>
            <p>E-mail is still quite a great way to get a hold of me. I always get notifications.
            </p>
          </a>

          <a
            href="https://www.reddit.com/user/kummipart"
            className="card"
          >
            <h3>Reddit &rarr;</h3>
            <p>
              I'm a active Reddit user so if you want to contact me through Reddit, go ahead.
            </p>
          </a>

        </div>
        </motion.div>
      <style jsx>{`
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 3rem;
        }
        .card {
          margin: 1rem;
          min-width: 320px;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

      `}</style>

      </Layout>
        
      )
}
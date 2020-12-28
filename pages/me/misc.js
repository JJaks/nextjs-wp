import Layout from '../../components/layout'
import Head from 'next/head'
import { motion } from 'framer-motion';

export default function misc() {
    return (
        <Layout>
        <Head>
          <title>Utilities</title>
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
        <h1>Utilities</h1>
        <div className="grid">
          <a href="http://www.uderzo.it/main_products/space_sniffer/download.html" className="card">
            <h3>SpaceSniffer &rarr;</h3>
            <p>A great tool to keep your disks clear and clutter free.</p>
          </a>

          <a href="https://www.malwarebytes.com/mwb-download/thankyou/" className="card">
            <h3>Malwarebytes &rarr;</h3>
            <p>Yeah I know antivirus IS SO 2012 but hear me out, Malwarebytes is a great option trust me.</p>
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
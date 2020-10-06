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
              delay: .4
            }
          },
        }}>
        <h1>Portfolio</h1>
        <div className="grid">
          <a href="https://tk.salome.ee/user/login" className="card">
            <h3>Salome TK &rarr;</h3>
            <p>An Extensive order center written in TypeScript using the Aurelia webpack.</p>
          </a>

          <a href="https://play.google.com/store/apps/details?id=janson.jaagop.khk" className="card">
            <h3>TKHK Siseveeb &rarr;</h3>
            <p>A Android app that was written in Java, made for the students of Tartu Vocational Center (in BETA).</p>
          </a>

          <a
            href="https://github.com/JJaks/nextjs-wp"
            className="card"
          >
            <h3>This site &rarr;</h3>
            <p>Written in ReactJS using the NextJS framework. Click to see the code behind this site. Custom and prerendered.</p>
          </a>

          <a
            href="https://github.com/JJaks"
            className="card"
          >
            <h3>GitHub &rarr;</h3>
            <p>
              Different projects written in Java and other programming languages. Includes Minecraft plugins and school projects.
            </p>
          </a>

          <a
            href=""
            className="card"
          >
            <h3>The Great Empire &rarr;</h3>
            <p>Site is down sadly. Written fully in Javascript using no libraries. The site originally was intended as a Minecraft server homepage.</p>
          </a>

          <a
            href=""
            className="card"
          >
            <h3>TBD &rarr;</h3>
            <p>I'm quite new to web developement and design so for some years I focused mainly on Java programming.
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
          padding: 1rem;
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
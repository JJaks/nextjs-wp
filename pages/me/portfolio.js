import Layout from '../../components/layout';
import Head from 'next/head';
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
          <a href="https://jjaks.github.io/frontendmentor-url-shortening/src/" className="card" target="_blank" >
            <h3>URL Shortening &rarr;</h3>
            <p>This was a Frontend Mentor challenge to create a URL Shortening API landing page. Semantic HTML, pure CSS & pure Javascript. Made with love.</p>
          </a>
          <a href="https://gotoandplay-sim.vercel.app/" className="card" target="_blank" >
            <h3>gotoAndPlay &rarr;</h3>
            <p>This was a homework type of assignment to apply for a job at gotoAndPlay. Made with Next.JS, TypeScript, HMTL5, CSS, tsparticles and magic.</p>
          </a>
          <a href="https://kapitaligrupp.ee/" className="card" target="_blank" >
            <h3>Kapitaligrupp &rarr;</h3>
            <p>Real estate site that uses REST API to automatically get new listings from kv.ee, Wordpress, Elementor, custom functions made from scratch.</p>
          </a>
          <a href="https://jausteenus.ee/" className="card" target="_blank" >
            <h3>Jausteenus &rarr;</h3>
            <p>Simple printing labels firm's site that was made using Wordpress, Elementor and shows off many custom functions made from scratch.</p>
          </a>
          <a href="https://tk.salome.ee/user/login" className="card" target="_blank" >
            <h3>Salome TK &rarr;</h3>
            <p>An Extensive order center written in TypeScript using the Aurelia webpack, custom back and front-end.</p>
          </a>
          <a href="https://nextjs-zentria-a4z1aczhk.vercel.app/" className="card" target="_blank" >
            <h3>Zentria &rarr;</h3>
            <p>Custom site made using the NextJS framework, scss, Javascript. Implementing HTML5 UP design. Prototype.</p>
          </a>

          <a
            target="_blank" href="https://github.com/JJaks/nextjs-wp"
            className="card"
          >
            <h3>This site &rarr;</h3>
            <p>Written in ReactJS using the NextJS framework. Click to see the code behind this site. Custom and prerendered.</p>
          </a>
          <a
            target="_blank" href="https://play.google.com/store/apps/details?id=janson.jaagop.khk"
            className="card"
          >
            <h3>TKHK Siseveeb &rarr;</h3>
            <p>A Android app that was written in Java, made for the students of Tartu Vocational Center currently in developement (BETA).</p>
          </a>
          <a
            target="_blank" href="https://github.com/JJaks"
            className="card"
          >
            <h3>GitHub &rarr;</h3>
            <p>
              Different projects written in Java and other programming languages. Includes Minecraft plugins and school projects.
            </p>
          </a>
          <a
            target="_blank" href="/me/contactme"
            className="card"
          >
            <h3>TBD &rarr;</h3>
            <p>Contact me and let's create something amazing, but most importantly, satisfactory for your clients.
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

  );

}
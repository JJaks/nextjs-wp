import Layout from '../../components/layout';
import Head from 'next/head';
import { motion } from 'framer-motion';
import React from 'react';
import { HorizontalBar } from 'react-chartjs-2';

const data = {
  labels: ['Java', 'HTML5', 'Javascript', 'CSS', 'Python', 'Typescript', 'Aurelia', 'React', 'Next.JS', 'AJAX', 'Magento 2'],
  datasets: [
    {
      label: 'Skill & Familiarity',
      backgroundColor: '#34515e',
      borderColor: '#34515e',
      borderWidth: 1,
      hoverBackgroundColor: '#8eacbb',
      hoverBorderColor: '#8eacbb',
      data: [6, 9, 7, 8, 4, 6, 7, 6, 5, 6, 5, 0, 10]
    }
  ]
};


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
          In short I started as a frontend developer who loved to play around with different designs, frameworks and concepts, but
          I've gradually moved on to being a full-stack developer.
          I also love to try new things, which is why I have been getting into App developement and back-end work.
          I am also 21 years old if you were curious about my age.
        </p>
        <p>
          I started getting into web design and front-end developement about 4 years ago, starting off with custom and quite basic HTML sites.
          When I started getting into programming, I learned Java and made different Minecraft plugins that I still update to this day.
          Currently I'm working on many different projects, all of them fully custom using the Aurelia or NextJS framework.
          I have also started doing websites for clients that don't have a big budget to throw around, so efficiency and easy to manage websites using Wordpress
          and Elementor are really the way to go.
          My biggest project by far is the TKClient project which was my first massive front-end job, what made it hard was the Aurelia webpack and Typescript which I wasn't really familiar with.
          However, since starting as a full-stack developer at Acty Ltd, I'm developing massive e-commerce sites (custom modules & frontend),
          it has been an absolute joy playing around with Magento and I look forward to learning even more of it and getting my Magento Certificate.
        </p>
        <br>
        </br>
        <h1>My Skills</h1>
        <div>
          <HorizontalBar
            data={data}
            width={400}
            height={400}
          />
        </div>
        <h2>I believe in simplicity and minimalism.</h2>

      </motion.div>

    </Layout>


  );
}

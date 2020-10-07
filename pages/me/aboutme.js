import Layout from '../../components/layout'
import Head from 'next/head'
import { motion } from 'framer-motion';
import React from 'react';
import {HorizontalBar} from 'react-chartjs-2';

const data = {
  labels: ['Java', 'HTML5', 'Javascript', 'CSS', 'Python', 'Typescript'],
  datasets: [
    {
      label: 'Skill',
      backgroundColor: 'rgba(255,255,255, 0)',
      borderColor: 'rgb(0,0,0)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(0,112,243,0.4)',
      hoverBorderColor: 'rgb(0,112,243)',
      data: [7, 9, 7, 8, 5, 6, 1]
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
            In short I'm a novice web designer and developer who loves to play around with different designs.
            I also love to try new things, which is why I have been getting into App developement and back-end work.
            I am also 20 years old if you were curious about my age.
        </p>
        <p>
          I started getting into web design and front-end developement about 2 years ago, starting off with Wordpress sites.
          When I started getting into programming, I learned Java and made different Minecraft plugins that I still update to this day.
          Currently I'm working on many different projects, all of them fully custom using the Aurelia or NextJS framework.
          My biggest project by far is the TKClient project which was my first front-end job, what made it hard was the Aurelia webpack and Typescript which I wasn't really familiar with.
        </p>
        <p>
          My biggest project by far is the TKClient project which was my first front-end job, what made it hard was the Aurelia webpack and Typescript which I wasn't really familiar with.
          Also what made it difficult was the complex back-end that was behind the order center, in short I'm really proud of that project.
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
      
        
      )
}
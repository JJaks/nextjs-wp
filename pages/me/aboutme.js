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
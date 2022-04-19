import { GetServerSidePropsContext, GetStaticPathsContext, GetStaticPropsContext, NextPage } from 'next'
import React from 'react'
import ServiceCard from '../components/ServiceCard'
import {myservices} from '../data'
import {motion} from 'framer-motion'
import { fadeUp, routeFadeAnimation, stagger } from '../animations'
import Head from 'next/head'

const About = () => {
  return (
    <motion.div 
    variants={routeFadeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    className='flex flex-col flex-grow px-6 pt-1'>
      <Head>
        <title>
          Home Page
        </title>
      </Head>
      <h5 className='my-3 text-lg font-medium'>I'm a <b>Computer Systems Engineer</b>. Completed my BSc degree from UET Peshawar in Nov, 2019, and after that started working
      as a <b>Software/Web devleper</b> in different firms. Now looking for pursuing Masters in <b>Computer Vision/Artificial Intelligence</b> in renowned Univerity </h5>

      <div className='flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-400' style={{marginLeft:'-2.5rem',marginRight:'-2.5rem', marginBottom:'-1rem'}}>
       
       <h5 className='my-3 text-xl font-bold tracking-wide'> What are my skills</h5>

        <motion.div className='grid gap-6 lg:grid-cols-2' variants={stagger} initial="initial" animate="animate">
          {myservices.map((service)=>
            <motion.div
            variants={fadeUp}
            key={service.title}
             className='bg-gray-200 rounded-lg lg:col-span-1 dark:text-white dark:bg-dark-200'>
              <ServiceCard service={service}/>
            </motion.div>
          )}
        </motion.div>

      </div>
    </motion.div>
  )
}

export default About
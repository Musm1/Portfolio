import React, { useState } from 'react'
import Bar from '../components/Bar'
import { languages, tools, works } from '../data'
import {motion} from 'framer-motion'
import {fadeUp, routeFadeAnimation} from '../animations'
import { GoLocation } from 'react-icons/go'
import WorkCard from '../components/WorkCard'

const Resume = () => {

  return (
    <motion.div
    variants={routeFadeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
     className='p-4'>
      {/* education*/}
      <h5 className='mb-3 text-2xl font-bold text-center'>Education</h5>
      <motion.div className='grid gap-6 md:grid-cols-2' variants={fadeUp} initial="initial" animate="animate">
          <div className='p-4 bg-gray-200 rounded-lg dark:bg-dark-400 dark:text-white'>
            <h5 className='my-2 text-xl font-bold'>Computer Systems Engineering</h5>
            <p className='font-semibold'>UET Peshawar (2015-2019)</p>
            <p className='my-3'>
              Completed my BSc from Univeristy of Engineering & technology on Nov, 2019 with high honors.
            </p>
          </div>
          <div className='p-4 bg-gray-200 rounded-lg dark:bg-dark-400 dark:text-white'>
            <h5 className='my-2 text-xl font-bold'>Pre-Engineering</h5>
            <p className='font-semibold'>Qurtuba College Peshawar (2014-2015)</p>
            <p className='my-3'>
              Completed my Pre-Engineering from Qurtuba Peshawar on April, 2015 in first division.
            </p>
          </div>
      </motion.div>
      {/* Work Experience*/}
      <h5 className='mt-5 mb-3 text-2xl font-bold text-center'>Work Experience</h5>
      <div className='relative grid grid-cols-12 gap-4 my-3'>
            {
              works.map((work)=>
              <motion.div 
              variants={fadeUp} initial="initial" animate="animate"
              className='col-span-12 p-2 bg-gray-200 rounded-lg lg:col-span-6 dark:bg-dark-200'>
              <WorkCard work={work}/>
              </motion.div>
              )
            }
      </div>
      {/*languages and tools */}

      <div className='grid gap-6 mt-6 md:grid-cols-2'>

        <div>
          <h5 className='my-3 text-2xl font-bold text-center'> Languages & Frameworks</h5>
          <div className='my-2'>
            {
              languages.map((language)=>
              <div key={language.name}>
              <Bar data={language} />
              </div>
              )
            }
          </div>
        </div>

        <div>
          <h5 className='my-3 text-2xl font-bold text-center'> Tools & Softwares</h5>
          <div className='my-2'>
            {
              tools.map((tool)=>
              <Bar data={tool} key={tool.name}/>
              )
            }
          </div>
        </div>

      </div>
      
    </motion.div>
  )
}

export default Resume
import React, { FunctionComponent, useState } from 'react'
import { GoLocation } from 'react-icons/go'
import { MdClose } from 'react-icons/md'
import { MyWork } from '../type'
import { BsCardImage } from 'react-icons/bs'
import {motion} from 'framer-motion'
import { fadeUp, stagger } from '../animations'
import ImageSlide from './ImageSlide'

const WorkCard:FunctionComponent<{
    work:MyWork,
}> = ({
    work:{
        comp_contact_info,
        comp_contact_person,
        comp_description,
        comp_name,
        end_date,
        job_description,
        job_name,location,
        worked_From,
        certificate_path
    }
}) => {
    const [showDetails, setShowdetails]=useState(false)
  return (
    <motion.div 
    variants={stagger} 
    initial="initial" 
    animate="animate">
        <div className='cursor-pointer' onClick={()=>setShowdetails(true)}>
            <h3 className='my-2 text-xl font-bold'>{job_name}</h3>
            <div className='flex flex-col lg:flex-row lg:justify-between'>
                <h4 className='text-lg font-bold '>{comp_name}</h4>
                <div className='flex leading-'>
                    <GoLocation/>
                    <h6 className='text-sm '>{location}</h6>
                </div>
            </div>
            <div className='flex flex-row'>
                <p className='text-sm font-semibold'>{worked_From}</p>
                <p className='text-sm font-semibold'>--</p>
                <p className='text-sm font-semibold'>{end_date}</p>
            </div>
        </div>
        {showDetails &&
        <motion.div
        variants={stagger} 
        initial="initial" 
        animate="animate">
            <motion.div 
            variants={fadeUp}
            className='absolute top-0 left-0 z-10 grid w-full h-auto p-6 text-black bg-gray-100 rounded-lg lg:p-3 md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-400 shadow-costum-light dark:shadow-costum-dark '>
                <motion.div
                 variants={fadeUp}
                 className='mb-6 lg:mb-0'>
                    <h3 className='my-2 text-lg font-thin'>A Little bit about the company</h3>
                    <h3 className='my-2 text-xl font-bold'>{comp_name}</h3>
                    <h3 className='my-2 text-md'>{comp_description}</h3>

                    <motion.div
                     variants={fadeUp}>
                        <h3 className='my-2 text-xl font-bold'>{job_name}</h3>
                        <div className='flex flex-row'>
                            <p className='text-sm font-semibold'>{worked_From}</p>
                            <p className='text-sm font-semibold'>--</p>
                            <p className='text-sm font-semibold'>{end_date}</p>
                        </div>
                        <p className='mt-4 text-sm font-semibold'>Achievements</p>
                            {job_description.map(job=>
                                <li className='text-base list-disc'>{job}</li>)}

                        <div className='mt-6'>
                            <p className='text-sm '>Contact Person <span className='font-semibold'> { comp_contact_person} </span></p>
                            <p className='text-sm '>Contact Info <span className='font-semibold'> { comp_contact_info}</span></p>

                        </div>
                    </motion.div>
                    <a
                     onClick={()=>window.open(certificate_path,"_blank")}
                     rel = "noopener noreferrer"
                      className="flex items-center justify-center w-2/3 px-2 py-2 mx-auto my-3 space-x-2 bg-gray-300 rounded-full cursor-pointer dark:bg-dark-300">
                        <BsCardImage className='lg:w-6 lg:h-6'/>
                        <span>View Full Certificate</span>
                    </a>

                </motion.div>

                    <ImageSlide image_url={certificate_path} width={50} height={50} />
                    <button className='absolute bg-gray-200 rounded-full right-2 top-2 focus:outline-none dark:bg-dark-200' 
                    onClick={()=>setShowdetails(false)}>
                    <MdClose className='w-6 h-6'/>
                    </button>
                </motion.div>
            </motion.div>
        
        }
    </motion.div>
  )
}

export default WorkCard
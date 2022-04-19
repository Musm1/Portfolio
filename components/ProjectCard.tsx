import React, { FunctionComponent, useState } from 'react'
import { MyProject } from '../type'
import Image from 'next/image';
import { AiFillGithub, AiFillProject } from 'react-icons/ai';
import {MdClose} from 'react-icons/md'
import {motion} from 'framer-motion'
import { fadeUp, stagger } from '../animations';

const ProjectCard:FunctionComponent<{
    project:MyProject,
    showDetails: null | number
    setShowDetails:(id:null | number)=>void
}> = ({
    project:{
        name,
        description,
        image_path,
        deployed_url ,
        github_url ,
        category,
        tags,
        id
    },
    showDetails,
    setShowDetails
}) => {  
    

  return (
    <motion.div 
    variants={stagger} 
    initial="initial" 
    animate="animate">

            <Image 
            layout='responsive' 
            quality={100} 
            width={300} 
            height={150} 
            src={image_path} 
            alt={name} 
            className="cursor-pointer" 
            onClick={()=>setShowDetails(id)}/>

        <p className='my-2 text-lg font-bold text-center capitalize'>{name}</p>

        {showDetails=== id &&
        <div className='absolute top-0 left-0 z-10 grid w-full h-auto p-2 text-black bg-gray-100 rounded-lg md:p-10 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100 shadow-costum-light dark:shadow-costum-dark '>
            
            <motion.div 
            variants={stagger} 
            initial="initial" 
            animate="animate">

                <motion.div
                className='border-4 border-gray-100'
                variants={fadeUp}>
                    <Image 
                    layout='responsive' 
                    quality={100} 
                    width={300} 
                    height={150} 
                    src={image_path} 
                    alt={name}/>
                </motion.div>

                <motion.div
                variants={fadeUp} 
                className='flex justify-center my-4 space-x-3'>
                    <a 
                     onClick={()=>window.open(github_url,"_blank")}
                     rel = "noopener noreferrer"
                    className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-lg cursor-pointer dark:bg-dark-200">
                        <AiFillGithub/>
                        <span>Github</span>
                    </a>
                    <a
                     onClick={()=>window.open(deployed_url,"_blank")}
                     rel = "noopener noreferrer"
                      className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-300 rounded-lg cursor-pointer dark:bg-dark-200">
                        <AiFillProject/>
                        <span>Project</span>
                    </a>
                </motion.div>

            </motion.div>

            <motion.div
            variants={stagger} 
            initial="initial" 
            animate="animate">

                <motion.h2 variants={fadeUp} className='mb-3 text-xl font-medium md:text-2xl'>{name}</motion.h2>
                <motion.h3 variants={fadeUp} className='mb-3 font-medium'>{description}</motion.h3>
                <motion.div
                 variants={fadeUp}
                className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                    {
                        tags.map((tag)=>
                        <span
                        className='px-2 py-1 my-1 bg-gray-300 rounded-lg dark:bg-dark-200 '
                        key={tag}>
                            {tag}
                        </span>
                        )
                    }
                </motion.div>
            </motion.div>

            <button className='absolute bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200' 
            onClick={()=>setShowDetails(null)}>
                <MdClose className='w-6 h-6'/>
            </button>
           
        </div> 
        }
    </motion.div>
  )
}

export default ProjectCard
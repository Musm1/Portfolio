import React, { useState } from 'react'
import ProjectCard from '../components/ProjectCard'
import ProjectNavbar from '../components/ProjectNavbar'
import { projects as projectsDATA } from '../data'
import { Category } from '../type'
import {motion} from 'framer-motion'
import { fadeUp, routeFadeAnimation, stagger } from '../animations'

const Projects = () => {
  const [projects, setProjects]= useState(projectsDATA)
  const [active, setActive]= useState('all')
  const[showDetails,setShowDetails]= useState<number|null>(null)

  const ProjectNavItemHandler=(catergory:Category | 'all')=>{
    if(catergory === 'all'){
      setProjects(projectsDATA);
      setActive(catergory)
      return;
    }
    const nArray= projectsDATA.filter((project)=> project.category.includes(catergory));
    setProjects(nArray);
    setActive(catergory);
  }

  return (
    <motion.div 
    variants={routeFadeAnimation}
    initial="initial"
    animate="animate"
    exit="exit"
    className='px-5 py-2 overflow-y-scroll' style={{height:'55vh'}}>

      <ProjectNavbar ProjectNavItemHandler={ProjectNavItemHandler} active={active}/>

      <motion.div 
      variants={stagger} 
      initial="initial" 
      animate="animate"
      className='relative grid grid-cols-12 gap-4 my-3' >
        {
          projects.map((project)=>
          <motion.div
          key={project.name} 
          variants={fadeUp}
          className='col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200'>
            <ProjectCard project={project} showDetails={showDetails} setShowDetails={setShowDetails}/>
          </motion.div>
          )
        }
      </motion.div>
    </motion.div>
  )
}

export default Projects
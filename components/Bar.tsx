import React, { FunctionComponent } from 'react'
import { MySkill } from '../type'
import {motion} from 'framer-motion'

const Bar:FunctionComponent<{
    data:MySkill
}> = ({data:{Icon, level, name}}) => {

  const bar_width= `${level}`

  const variants={
    initial:{
      width:0
    },
    animate:{
      width:bar_width,
      transition:{
        duration:0.4,
        type:'spring',
        damping:10,
        stiffness:100
      }
    }
  }
  return (
    <div className='my-2 bg-gray-200 rounded-full dark:bg-dark-400 dark:text-dark-100'>
        <motion.div 
        style={{width: level}} 
        variants={variants}
        initial='initial'
        animate='animate'
        className='flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green-400 to-blue-300'>
          <Icon className='mr-3'/>
          <div className="leading-7 ">{name}</div>
        </motion.div>
    </div>
  )
}

export default Bar
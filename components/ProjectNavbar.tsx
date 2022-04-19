import React, { FunctionComponent } from 'react'
import { Category } from '../type'

export const ProjectNavbarList:FunctionComponent<{
    value:Category | 'all'
    ProjectNavItemHandler: Function,
    active:string
}> = ({
    value,
    ProjectNavItemHandler,
    active
}) => {
  let className='cursor-pointer  capitalize border-b-4 border-gray-200 hover:text-gray-500 hover:border-gray-300 dark:border-gray-400'
  if(active=== value){
    className += ' text-black font-bold border-black dark:border-white dark:text-white'
  }
    return (
      <li 
      onClick={()=>ProjectNavItemHandler(value)}
      className={className}>
          {value}
      </li>
    )
  }

const ProjectNavbar:FunctionComponent<{ProjectNavItemHandler: Function, active: string}> = (props) => {
  return (
    <div className='space-x-3 flex px-3 list-none overflow-x-auto'>
        <ProjectNavbarList value='all'  {...props}/>
        <ProjectNavbarList value='html/css' {...props}/>
        <ProjectNavbarList value='java' {...props}/>
        <ProjectNavbarList value='next' {...props}/>
        <ProjectNavbarList value='node' {...props}/>
        <ProjectNavbarList value='php' {...props}/>
        <ProjectNavbarList value='react' {...props}/>
        <ProjectNavbarList value='wordpress' {...props}/>
        <ProjectNavbarList value='python' {...props}/>
    </div>
  )
}

export default ProjectNavbar
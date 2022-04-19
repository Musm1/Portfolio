import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';


const NavItem:FunctionComponent<{
    activeItem:string,
    setactiveItem: Function,
    name:string,
    route: string

}> =({activeItem,setactiveItem,name,route})=>{
    return(
        activeItem!== name?
        (<Link href={route}>
            <a>
                <span onClick={()=> setactiveItem(name)} className='border-b-4 border-gray-200 hover:text-gray-600 hover:border-gray-300 dark:border-gray-400'>{name}</span>
            </a>
        </Link>)
        : 
        null
    )
}

const Navbar = () => {
    const [activeItem, setactiveItem] = useState<string>('');
    const {pathname}= useRouter()

    useEffect(() => {
        if(pathname=== '/') setactiveItem('About');
        if(pathname=== '/projects') setactiveItem('Projects');
        if(pathname=== '/resume') setactiveItem('Resume')
    }, [])
    

  return (
    <div className='flex justify-between px-5 py-3 my-3'>
        <span className='text-xl font-bold border-b-4 border-gray-900 text-green md:text-2xl dark:border-white'>
            {activeItem}
        </span>
        <div className='flex space-x-5 text-lg'>
            <NavItem activeItem={activeItem} setactiveItem={setactiveItem} name="About" route='/'/>
            <NavItem activeItem={activeItem} setactiveItem={setactiveItem} name="Projects" route='projects'/>
            <NavItem activeItem={activeItem} setactiveItem={setactiveItem} name="Resume" route='resume'/>
        </div>
    </div>
  )
}

export default Navbar
import Image from 'next/image';
import React from 'react';
import pic from '../public/images/MyPhoto.jpg';
import {AiFillGithub, AiFillLinkedin, AiOutlinePhone, AiOutlineTwitter,AiOutlineMail} from 'react-icons/ai';
import {GoLocation} from 'react-icons/go';
import {GiTie} from 'react-icons/gi'
import {SiFiverr, SiUpwork} from 'react-icons/si'
import {BsLightbulb, BsStackOverflow} from 'react-icons/bs'
import { useTheme } from 'next-themes'

const Sidebar = () => {
  
const { theme, setTheme } = useTheme()
const changeTheme=()=>{
  setTheme(theme==='light'? 'dark': 'light');
}
  return (
    <div className='grid grid-cols-4 lg:grid-cols-12'>

      <div className='col-span-4'>
        <div className='lg:flex lg:justify-around '>
          <Image
            src={pic}
            alt='user'
            width={120}
            height={120}
            className='rounded-full '
          />
          <h3 className='justify-center my-auto text-2xl font-bold text-center'>
              Mishkat Ullah Saif
          </h3>
        </div>
          <p className='w-2/3 px-2 py-1 mx-auto my-3 bg-gray-200 rounded-full dark:bg-dark-400'>Web Developer</p>
            <a 
            href="/assets/Mishkat Resume.pdf"
            download='Mishkats Resume.pdf' 
            className='flex items-center justify-center w-2/3 px-2 py-1 mx-auto my-3 bg-gray-200 rounded-full dark:bg-dark-400 lg:w-full'>
              <GiTie className='w-6 h-6'/> Download Resume
            </a>
      </div>

      {/* address */}

      <div className='col-span-4 mt-[40px] lg:mt-auto lg:mb-auto'>
        
        <div
        className='flex items-center justify-center mb-4'>
          <BsLightbulb 
          onClick={changeTheme} 
          className='cursor-pointer w-6 h-6'/>
        </div>
        <div className='flex items-center justify-center mb-2 space-x-2'>
          <GoLocation/>
          <span>Peshawar, Pakistan</span>
        </div>
        <div className='flex items-center justify-center mb-2 space-x-2'>
          <AiOutlineMail/>
          <span>musm123456@gmail.com</span>
        </div>
        <div className='flex items-center justify-center space-x-2'>
          <AiOutlinePhone/>
          <span>+92-310-9562202 </span>
        </div>

        <div className='mt-5'>
          <button onClick={()=>window.open('mailto: musm123456@gmail.com')}
           className='w-2/3 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Email Me</button>
        </div>
      </div>
      
   

       {/* social icons */}
       <div className='col-span-4 mt-[40px] justify-self-center lg:mt-0'>
          <div className='flex flex-row flex-wrap space-x-2 lg:space-x-0 lg:flex-col lg:flex-wrap lg:space-y-2'>
            
            <a className="cursor-pointer" onClick={()=>window.open('https://github.com/musm1',"_blank")}>
              <AiFillGithub className='w-8 h-8'/>
            </a>
            <a className="cursor-pointer" onClick={()=>window.open('https://www.linkedin.com/in/mishkat-marwat-588a89188/',"_blank")}>
              <AiFillLinkedin className='w-8 h-8 text-cyan-700 '/>
            </a>
            <a className="cursor-pointer" onClick={()=>window.open('https://stackoverflow.com/users/14024009/mishkat-marwat',"_blank")}>
              <BsStackOverflow className='w-8 h-8 text-orange-500'/>
            </a>
            <a className="cursor-pointer" onClick={()=>window.open('https://twitter.com/Musm_1',"_blank")}>
              <AiOutlineTwitter className='w-8 h-8 text-sky-400 '/>
            </a>
            <a className="cursor-pointer" onClick={()=>window.open('https://www.fiverr.com/musm01',"_blank")}>
              <SiFiverr className='w-8 h-8 text-green-500'/>
            </a>
            <a className="cursor-pointer" onClick={()=>window.open('https://www.upwork.com/freelancers/~01a397e27acb25ebca',"_blank")}>
              <SiUpwork className='w-8 h-8 text-green-500'/>
            </a>
           
          </div>
      </div>

    </div>
  )
}

export default Sidebar
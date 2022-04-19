import {RiComputerLine} from 'react-icons/ri'
import {AiOutlineApi, AiOutlineDatabase} from 'react-icons/ai'
import { IServices, MyProject, MySkill, MyWork } from './type'
import {DiReact,DiPhp,DiJavascript1,DiPhotoshop,DiJava} from 'react-icons/di'
import {SiTypescript, SiAdobeaftereffects} from 'react-icons/si'
import {BsWordpress} from 'react-icons/bs'
import {FiFigma,FiFramer} from 'react-icons/fi'

export const myservices:IServices[]=[
    {
        title: 'Frontend Dev',
        about: 'With more than 2 years of experience in Front-end technologies like <b>React</b>, <b>Next</b>, <b>Java</b>, <b>PHP</b> etc.',
        Icon: RiComputerLine
    },
    {
        title: 'Api Dev',
        about: 'Worked on Creating Restful APIs in python.',
        Icon: AiOutlineApi
    },
    {
        title: 'DataBase Management',
        about: 'Worked on creating and mainting database like <b>MongoDB</b> <b>MySQL</b>',
        Icon: AiOutlineDatabase
    },
]

export const languages:MySkill[]=[
    {
        name: 'React',
        level: '90%',
        Icon: DiReact
    },
    {
        name: 'Next',
        level: '80%',
        Icon: DiReact
    },
    {
        name: 'Javascript',
        level: '90%',
        Icon: DiJavascript1
    },
    {
        name: 'Typescript',
        level: '70%',
        Icon: SiTypescript
    },
    {
        name: 'PHP',
        level: '80%',
        Icon: DiPhp
    },
    {
        name: 'Wordpress',
        level: '80%',
        Icon: BsWordpress
    },
    {
        name: 'JAVA',
        level: '75%',
        Icon: DiJava
    }

]

export const tools:MySkill[]=[
    {
        name: 'Figma',
        level: '70%',
        Icon: FiFigma
    },
    {
        name: 'PhotoShop',
        level: '80%',
        Icon: DiPhotoshop
    },
    {
        name: 'Framer',
        level: '70%',
        Icon: FiFramer
    },
    {
        name: 'Adobe Effects',
        level: '60%',
        Icon: SiAdobeaftereffects
    },

]

export const projects:MyProject[]=[
    {
        id:1,
        name: 'mpl.gg Store',
        description: 'This is minecraft skins store page that i worked on. Along with login/signup and leaderboard page for mpl.gg that will be up in couple of weeks-months.',
        image_path: '/images/mpl.png',
        deployed_url: 'https://store.mpl.gg',
        github_url: 'nill',
        category: ['html/css'],
        tags: ['Html', 'Css', 'Tebex', 'Bootstrap']
    },
    {
        id:2,
        name: 'Mantle Store Page',
        description: 'This is minecrafts capes store page that im working on at the moment. Contains data-slider, price filter catergory filter etc etc',
        image_path: '/images/mantle.png',
        deployed_url: 'https://mantle.gg/shop',
        github_url: 'Cant disclose',
        category: ['next', 'react'],
        tags: ['Typescript', 'Javascript', 'Tailwind', 'Keen Slider']
    },
    {
        id:3,
        name: 'Java Games App',
        description: 'I created this java app that contains multiple games like tic-tak-toe & bottle flip and a backend with firebase to store user data with email verification system.',
        image_path: '/images/java.png',
        deployed_url: 'Not Deployed',
        github_url: 'https://github.com/Musm1/games',
        category: ['java'],
        tags: ['java', 'android studio', 'firebase', 'firebase database', 'email verification']
    },
    {
        id:4,
        name: 'Eprocurement',
        description: 'Medicine trading website where government officials/buisness persons can buy/sell in bulk quantity',
        image_path: '/images/eprocurement.png',
        deployed_url: 'Not Deployed',
        github_url: 'https://github.com/Musm1/eprocurement',
        category: ['react', 'node', 'python'],
        tags: ['React', 'Javascript', 'Bootstrap', 'REST APIs', 'Database Engineering', 'AWS']
    },
    {
        id:5,
        name: 'MetaMask',
        description: 'Created initial pages including login and signup',
        image_path: '/images/metamask.png',
        deployed_url: 'Not Deployed',
        github_url: 'https://github.com/Musm1/frontendwork',
        category: ['html/css'],
        tags: ['Html', 'Css', 'font-awesome']
    },
    {
        id:6,
        name: 'React Crane Game',
        description: 'Created the color crane game in react.',
        image_path: '/images/crane.png',
        deployed_url: 'Not Deployed',
        github_url: 'https://github.com/Musm1/reactcranemachine',
        category: ['react'],
        tags: ['React', 'Javascript']
    },
    {
        id:7,
        name: 'bmautos.co',
        description: 'Created and hosted this wordpress website for a freelance project',
        image_path: '/images/bmautos.png',
        deployed_url: 'https://bmautos.co/',
        github_url: 'nill',
        category: ['wordpress'],
        tags: ['Wordpress', 'Elementor']
    },
    {
        id:8,
        name: 'Alfabolt',
        description: 'Created the about page for the alfabolt private firm. and worked on dfferent projects with them',
        image_path: '/images/alfabolt.png',
        deployed_url: 'https://www.alfabolt.com/',
        github_url: 'nill',
        category: ['react', 'next'],
        tags: ['Typescript', 'Javascript', 'Bootstrap']
    },
]

export const works:MyWork[]=[
    {
        job_name: 'Remote Web Developer',
        comp_name: 'Auraside,Inc.',
        comp_description: 'AuraSide, Inc. is a US-based company. We work from PC Optimizationand Settings management software to in-game cosmetics, Webdevelopment, and much more.',
        job_description: ['Creating multiple Sites in Next/React Javascript and typescript integration.', 'Creating the front end along with the maintaing the state ofthe project.'],
        certificate_path:'/',
        comp_contact_info: '(650) 337-0808',
        comp_contact_person: 'Stanley Day',
        worked_From: 'December 2021',
        end_date: 'Present',
        location: 'Oregon, USA'
    },
    {
        job_name: 'Front-End Developer',
        comp_name: 'Alfabolt',
        comp_description: 'A Software Development Private firm that specializes in Websites,Mobile Apps, and AI Solutions, located in NUST',
        job_description: ['Worked on newer technologies like Next Js and typescript', 'Wrote on creating different components in storybook js'],
        certificate_path:'/images/alfaboltcert.png',
        comp_contact_info: '0324-5300625',
        comp_contact_person: 'Ali Farooq',
        worked_From: 'January 2021',
        end_date: 'June 2021',
        location: 'NSTP, NUST, Islamabad'
    },
    {
        job_name: 'Software Developer',
        comp_name: 'IOTICS Technology (Pvt) Ltd',
        comp_description: 'Software development+ Web development private company, taking projects from Semi-Government Firms, Based in UET Peshawar',
        job_description: ['Web Development (Node JS).', 'AWS (EC2/S3/RDS).', 'Database Engineering.', 'Restful APIs.'],
        certificate_path:'/images/iotics.png',
        comp_contact_info: '0334-8769383',
        comp_contact_person: 'Dr. Tariq Kamal',
        worked_From: 'February 2020',
        end_date: 'August 2020',
        location: 'UET Peshawar'
    }
]
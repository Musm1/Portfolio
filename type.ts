import { IconType } from "react-icons";

export interface IServices {
    title: string,
    about: string,
    Icon: IconType,
}

export interface MySkill {
    name: string,
    level: string,
    Icon: IconType
}

export interface MyProject{
    id:number,
    name:string,
    description:string,
    image_path: string,
    deployed_url: string,
    github_url: string,
    category: Category[],
    tags: string[]
}

export type Category= 'react' | 'node' | 'html/css' | 'next' | 'wordpress' | 'java' | 'php' | 'python'

export interface MyWork{
    job_name:string
    comp_name:string,
    comp_description:string,
    certificate_path?:string,
    job_description:string[],
    comp_contact_info: number| string,
    comp_contact_person: string,
    worked_From: string,
    end_date: string,
    location: string
}
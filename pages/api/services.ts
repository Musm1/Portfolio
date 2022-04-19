import { NextApiRequest, NextApiResponse } from "next";
import {myservices} from '../../data'

export default ( req:NextApiRequest,res:NextApiResponse)=>{
    res.status(200).json({myservices})
}
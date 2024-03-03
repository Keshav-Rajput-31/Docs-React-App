'use client'
import React from 'react'
import { FaFileAlt } from "react-icons/fa";
import { MdFileDownload } from "react-icons/md";
import { IoCloseSharp} from "react-icons/io5";
import { motion } from 'framer-motion';



const Card = ({data , reference}) => {
  
  return (

    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.1}} className='relative bg-[#2c2c2c] w-[240px] h-[300px] rounded-[35px] overflow-hidden py-10 px-10 text-slate-200 font-semibold'>
      <FaFileAlt color='white' size='1.3em'/>
      <p className='leading-tight mt-5'>{data.dics}</p>

      <div className=' absolute footer bottom-0 left-0 w-full'>

        <div className=' relative flex justify-between items-center px-8 py-5'>
          <h1>{data.fileSize}</h1>
          {data.close ? <IoCloseSharp size='1.4em'/> : <MdFileDownload size='1.2em' />}
         
          

        </div>

        {data.Tag.isOpen ? (

        <div className={`${data.Tag.tagColor === "green" ? 'bg-green-600' : 'bg-blue-500'} py-3 flex justify-center items-center text-md font-bold`}>
          <h1>{data.Tag.tagTitle}</h1>
        </div>
        ) : null}


      </div>

    </motion.div>
   
  )
}

export default Card
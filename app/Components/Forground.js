'use client'
import React, { useRef } from 'react'
import Card from './Card'

const Forground = () => {

    const ref = useRef(null)
    
    const data = [
        
        {
        dics: "this is the descriptin of the file and it is comes from database",
        fileSize: "1.4Mb",
        close: true,
        Tag: { isOpen: true, tagTitle: "Download", tagColor: 'green' }
    
    },
        {
        dics: "this is the descriptin of the file and it is comes from database",
        fileSize: "2Mb",
        close: false,
        Tag: { isOpen: true, tagTitle: "Download", tagColor: 'green' }
    
    },
        {
        dics: "this is the descriptin of the file and it is comes from database",
        fileSize: "1.4Mb",
        close: true,
        Tag: { isOpen: false, tagTitle: "Download", tagColor: 'blue' }
    
    },
        {
        dics: "this is the descriptin of the file and it is comes from database",
        fileSize: "1.4Mb",
        close: true,
        Tag: { isOpen: true, tagTitle: "Download", tagColor: 'blue' }
    
    },
     

]

    return (
        <>

            <div ref={ref} className="fixed top-0 right-0 z-[3] w-full h-full flex gap-5 p-5 flex-wrap overflow-x-hidden">

                {data.map((item , index)=>(
                    <Card data = {item} reference={ref}/>
                ))}


            </div>

        </>
    )
}

export default Forground
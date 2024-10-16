import React from 'react'
import { DiRedis } from 'react-icons/di'
import { RiReactjsLine } from 'react-icons/ri'
import { SiMongodb } from 'react-icons/si'
import { TbBrandNextjs } from 'react-icons/tb'

const Technologies = () => {
  return (
    <div className='pb-24'>
        <h2 className="my-20 text-center text-4xl">
            Technologies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4">
            <div>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='py-4'>
                <TbBrandNextjs className='text-7xl'/>
            </div>
            <div className='py-4'>
                <SiMongodb className='text-7xl text-cyan-500'/>
            </div>
            <div className='py-4'>
                <DiRedis className='text-7xl text-red-700'/>
            </div>
        </div>
    </div>
  )
}

export default Technologies
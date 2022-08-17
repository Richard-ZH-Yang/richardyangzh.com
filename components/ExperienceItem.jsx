import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ExperienceItem = ({title, location, timePeriod, bulletPoints}) => {
  return (
    <div className='p-8 relative items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl'>
          <p className='italic' style={{fontSize: 32}}>
            <span className='font-bold italic'>
              {title}
            </span>
          </p>
          <p className='py-1 italic'>{location}  ({timePeriod})</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
           {bulletPoints.map((sentence) => {
            return (<><li>{sentence}</li></>);
           })}
          </ul>
 </div>
  )
}

export default ExperienceItem
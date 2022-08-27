import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import uuid from 'react-uuid'
import { FaGithub, FaLinkedinIn, FaEnvelope, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectItem = ({ title, description, backgroundImg, tech, githubUrl, demoUrl }) => {
  return (
    <div className='relative  items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group' style={{ textAlign: 'center', justifyContent: 'center' }}>
      <Image className='rounded-xl' src={backgroundImg} alt='/' />
      <h3 style={{
        fontWeight: '500',
        letterSpacing: '2px',
        padding: '.3rem 0',
        fontSize: '2.5rem'
      }}>{title}</h3>
      <p style={{
        width: '100%',
        padding: '0 50px',
        color: 'black',
        fontStyle: '2rem',
        lineHeight: '24px',
        fontSize: '20px',
        textAlign: 'justify'
      }}>{description}</p>

      <ul style={{
        display: 'flex',
        justifyContent: 'space-around',
        paddingTop: '1rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',

        display: 'inline-flex',
        'flex-wrap': 'wrap'
      }} >

        {tech.map((technology) => {
          return (
            <li key={uuid()} style={{
              fontSize: '1rem',
              backgroundColor: 'white',
              borderRadius: '0.7rem',
              padding: '0.6rem',
              margin: '0.4rem'
              
            }}>{technology}</li>
          )
        })}
      </ul>

      <ul style={{
        listStyleType: 'none',
        padding: '0',
        display: 'flex',
        justifyContent: 'space-around',
        marginButton: '0.5rem 0',
      }}>

        {githubUrl ? <a style={{
          fontSize: '1.6rem',
          padding: '1rem 1.5rem',
          borderRadius: '15px',
          transition: '0.5s',
          fontSize: '3rem'
        }}
          href={githubUrl}
        >
          <FaGithub />
        </a>
          : null}

        {demoUrl ? <a style={{
          fontSize: '1.6rem',
          padding: '1rem 1.5rem',
          borderRadius: '15px',
          transition: '0.5s',
          fontSize: '3rem',
        }}
          href={demoUrl}
        >
          <FaExternalLinkAlt />
        </a>
          : null}

      </ul>

    </div>
  )
}

export default ProjectItem
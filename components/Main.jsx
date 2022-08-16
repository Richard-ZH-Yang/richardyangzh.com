import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { FaGithub, FaLinkedinIn, FaFileAlt, FaEnvelope } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-widest text-gray-600'>
            LET&#39;S BUILD SOMETHING TOGETHER
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'> Zhonghao (Richard) Yang</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Software Development Engineer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I&apos;m a fourth-year student at UBC majoring in Computer Science with a minor in Data Science. I am currently working as a Backend Developer Intern at IBM and previously worked as a Full Stack Developer Intern at CAE.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/Richard-ZH-Yang'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Richard-ZH-Yang'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a
              href='mailto:richardyangzh@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaEnvelope />
              </div>
            </a>
            <a
              href='https://resume.richardyangzh.com'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaFileAlt />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

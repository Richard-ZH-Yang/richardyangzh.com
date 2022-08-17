import Image from 'next/image';
import React from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';

import C from '../public/assets/skills/c.png'
import Cplusplus from '../public/assets/skills/c++.png'
import java from '../public/assets/skills/java.png'
import javascript from '../public/assets/skills/js.png'
import typescript from '../public/assets/skills/ts.png'
import bash from '../public/assets/skills/bash.png'
import csharp from '../public/assets/skills/csharp.png'
import php from '../public/assets/skills/php.png'
import python from '../public/assets/skills/python.png'
import sql from '../public/assets/skills/sql.png'
import bootstrap from '../public/assets/skills/bootstrap.png'
import node from '../public/assets/skills/node.png'
import django from '../public/assets/skills/django.png'
import dotnet from '../public/assets/skills/dotnet.png'
import xamarin from '../public/assets/skills/xamarin.png'
import mongo from '../public/assets/skills/mongo.png'
import mysql from '../public/assets/skills/mysql.png'
import oracle from '../public/assets/skills/oracle.png'
import selenium from '../public/assets/skills/selenium.png'
import postgre from '../public/assets/skills/postgre.png'


import ReactImg from '../public/assets/skills/react.png';
import Tailwind from '../public/assets/skills/tailwind.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.png'
import AWS from '../public/assets/skills/aws.png';
import azure from '../public/assets/skills/azure.png';
import git from '../public/assets/skills/git.png'
import jenkins from '../public/assets/skills/jenkins.png';
import docker from '../public/assets/skills/docker.png';


const renderLogo = (img, name) => {
  return (
    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
      <div className='grid grid-cols-2 gap-4 justify-center items-center'>
        <div className='m-auto'>
          <Image src={img} width='64px' height='64px' alt='/' />
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h3>{name}</h3>
        </div>
      </div>
    </div>
  )
}


const Skills = () => {
  return (
    <div id='skills' className='w-full  p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full' >
        <h2 className='py-4 tracking-widest uppercase text-[#5651e5]'>
          Skills
        </h2>
        <h2 className='py-6'>Programming Languages</h2>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
          {renderLogo(java, 'Java')}
          {renderLogo(csharp, 'C#')}
          {renderLogo(Cplusplus, 'C++')}
          {renderLogo(C, 'C')}
          {renderLogo(python, 'Python')}
          {renderLogo(typescript, 'TypeScript')}
          {renderLogo(javascript, 'JavaScript')}
          {renderLogo(php, 'PHP')}
          {renderLogo(sql, 'SQL')}
          {renderLogo(bash, 'Bash')}
          {renderLogo(Html, 'HTML')}
          {renderLogo(Css, 'CSS')}
        </div>
      <h2 className='py-6'>Frameworks</h2>
      <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
        {renderLogo(ReactImg, 'React')}
        {renderLogo(NextJS, 'Next')}
        {renderLogo(bootstrap, 'Bootstrap')}
        {renderLogo(Tailwind, 'Tailwind')}
        {renderLogo(node, 'Node')}
        {renderLogo(django, 'Django')}
        {renderLogo(dotnet, 'ASP.NET')}
        {renderLogo(xamarin, 'Xamarin')}
        {renderLogo(selenium, 'Selenium')}
      </div>
        <h2 className='py-6'>Databases</h2>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
          {renderLogo(mongo, 'MongoDB')}
          {renderLogo(mysql, 'MySQL')}
          {renderLogo(postgre, 'PostgreSQL')}
          {renderLogo(oracle, 'Oracle')}
        </div>
        <h2 className='py-6'>Tools</h2>
        <div className='grid grid-cols-2 lg:grid-cols-6 gap-8'>
          {renderLogo(git, 'Git')}
          {renderLogo(docker, 'Docker')}
          {renderLogo(jenkins, 'Jenkins')}
          {renderLogo(azure, 'Azure')}
          {renderLogo(AWS, 'AWS')}
          {renderLogo(Firebase, 'Firebase')}
        </div>
    </div>
    </div>

  );
};

export default Skills;

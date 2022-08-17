import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import werewolfImg from '../public/assets/projects/werewolf.png'
import insightUBCImg from '../public/assets/projects/insightUBC.jpg'
import mewmazonImg from '../public/assets/projects/mewmazon.png'
import shiftyQuandTreeImg from '../public/assets/projects/shifty.png'
import toDoListImg from '../public/assets/projects/toDoList.png'
import portfolioImg from '../public/assets/projects/portfolio.png'
import passowrdImg from '../public/assets/projects/password.png'
import happyImg from '../public/assets/projects/happyCommunity.png'

import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <h2 className='py-4 tracking-widest uppercase text-[#5651e5]'>
          Projects
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
           <ProjectItem
            title='Werewolf'
            description='A popular Chinse board game designed for 6 to 12 players. For the fronend, it uses React and Bootstrap for styling, and utilized Firebase for user authentication. For the backend, it uses Express to develop the controllers and register routes. It uses MongoDB Atlas to store all the information and interact with the backend. It utilizes RESTful APIs to make CRUD operations to actively update player and room information.'
            backgroundImg={werewolfImg}
            tech={['JavaScript', 'React', 'Express', 'Node', 'MongoDB', 'Bootstrap', 'Firebase']}
            githubUrl='https://github.com/Richard-ZH-Yang/Werewolf'
          />
          <ProjectItem
            title='Insight UBC'
            description='A full stack web application that helps UBC students to make insightful decisions. Built a query engine from scratch for the backend using TypeScript, Express, Node that is able to process information from metadata and response to queries with the required EBNF form. And implemented a Google Map frontend to display the shortest path between classrooms with building&apos;abbreviation, as well as a web page that can query the past grade to make better decision for course registration.'
            backgroundImg={insightUBCImg}
            tech={['TypeScript', 'JavaScript', 'Express', 'Node', 'Mocha/Chai', 'HTML' ,'CSS', 'Design Patterns', 'Test Driven Development']}
            githubUrl='https://github.com/Richard-ZH-Yang/InsightUBC'
          />
          <ProjectItem
            title='Mewmazon'
            description='An online shopping platform that provides insightful analysis about the products for customers and sellers. This project contains basic SQL queries such as join, update, insert, delete, as well as advanced queries such as nested aggregation with group by and having, and division.'
            backgroundImg={mewmazonImg}
            tech={['PHP', 'MySQL', 'Linux', 'Apache', 'HTML', 'CSS']}
            githubUrl='https://github.com/Richard-ZH-Yang/Mewmazon'
            demoUrl='https://www.students.cs.ubc.ca/~rzhyang/mewmazon/src/php'
          />
          <ProjectItem
            title='To Do List'
            description='To-Do-List gives you the confidence that everything&apos;s organized and accounted for, so you can make progress on the things that are important to you. It has both a console version as well as a GUI version. And it is implemented with advanced design patterns such as Observable pattern and Iterator pattern to improve the user experience.'
            backgroundImg={toDoListImg}
            tech={['Java', 'Swing', 'JUnit', 'Design Patterns']}
            githubUrl='https://github.com/Richard-ZH-Yang/To-Do-List'
          />
          <ProjectItem
            title='Portfolio Website'
            description='Personal portfolio website to showcase experiences and projects. It is deployed on Vercel and configed to a custom domain.'
            backgroundImg={portfolioImg}
            tech={['React', 'Tailwind', 'Next', 'Vercel', 'Node', 'Firebase']}
            githubUrl='https://github.com/Richard-ZH-Yang/richardyangzh.com'
            demoUrl='https://richardyangzh.com'
          />
          <ProjectItem
            title='Happy Community'
            description='This project aimed to provide an online platform for people to write diaries, share stories, and make friends. User can write daries and our LSTM machine learning model will analyze a happiness score on a scale of 100. User also able to review the history and post stories in the community.'
            backgroundImg={happyImg}
            tech={['JavaScript', 'Python', 'MySQL', 'Flask', 'Machine Learning', 'HTML', 'CSS']}
            githubUrl='https://github.com/Richard-ZH-Yang/happy-community'
          />
          <ProjectItem
            title='Shifty Quad Tree'
            description='Portraits an image with a blocky effect, and applying dynamic programming to speed up the computing process.'
            backgroundImg={shiftyQuandTreeImg}
            tech={['C++', 'GDB', 'Valgrind', 'Linux', 'Dynamic Programming']}
            githubUrl='https://github.com/Richard-ZH-Yang/Shifty-Quadtree'
          />
          <ProjectItem
            title='Password Decoder'
            description='Password decoder can help crack the password stored with hashing and salt strategy given the hash code. It will use a brute force strategy to help systematically search the password. It uses a thread pool to control multiple threads to maximize efficiency.'
            backgroundImg={passowrdImg}
            tech={['C', 'GDB', 'Linux', 'Multi-threading']}
            githubUrl='https://github.com/Richard-ZH-Yang/Password-Decoder'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;

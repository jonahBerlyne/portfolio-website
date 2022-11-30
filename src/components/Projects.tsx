import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import projectsData from '../data/ProjectsData';
import { SocialIcon } from 'react-social-icons';

export default function Projects() {
  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);
  
  return (
    <motion.div
     initial={{
      opacity: 0
     }}
     whileInView={{
      opacity: 1
     }}
     transition={{
      duration: 1.5
     }} 
     className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'
    >
     <h3 className='absolute top-[4.5rem] sm:top-20 xl:top-12 uppercase tracking-[20px] text-gray-500 text-2xl ml-4'>Projects</h3>
     <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-secondary/80 scrollbar-thin'>
      {projectsData.map((project, index) => {
       return (
        <div
          key={index}
          className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-8 md:p-44 mt-12 overflow-y-scroll'
        >
          <motion.img
            initial={{
            y: innerWidth < 700 ? -100 : -300,
            opacity: 0
            }}
            whileInView={{
            y: 0,
            opacity: 1
            }}
            transition={{
            duration: 1.2
            }}
            viewport={{
            once: true
            }}
            src={project.image}
            alt={project.title}
            className='h-[180px] w-[400px] sm:h-2/3 sm:w-2/3 pt-6 sm:pt-0'
          />
         <div className='space-y-4 px-0 md:px-10 max-w-6xl'>
          <div className='flex justify-center items-center gap-0 sm:gap-x-5'>
            <h4 className='text-4xl font-semibold text-center'>
              <a href={project.link} target='_blank' rel='noreferrer'>
                <span className='underline decoration-secondary/50'>
                  {project.title}
                </span>
              </a>
            </h4>
            <div className='-ml-[0.15rem]'>
              <SocialIcon 
                url={project.repo}
                fgColor='gray'
                bgColor='transparent'
                style={{ height: 60, width: 60 }}
              />
            </div>
          </div>
          <p className='text-sm sm:text-lg text-center sm:text-left sm:h-44 lg:h-28 sm:pr-3 sm:overflow-y-scroll sm:scrollbar-thin sm:scrollbar-track-gray-400/20 sm:scrollbar-thumb-secondary/80'>{project.description}</p>
         </div>
        </div>
       );
      })}
     </div>
     <div 
      className='w-full absolute top-[30%] bg-secondary/10 left-0 h-[500px] -skew-y-12'
     />
    </motion.div>
  )
}
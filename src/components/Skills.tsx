import React from 'react';
import { motion } from 'framer-motion';
import Skill from './Skill';
import skillsData from '../data/SkillsData';

type Props = {}

export default function Skills({}: Props) {
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
      className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
     >
     <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>
     <div className='flex flex-col gap-y-8 md:pt-12'>
      <div className='grid grid-cols-4 gap-y-4 gap-x-1'>
        {skillsData.slice(0, skillsData.length / 2).map((skill, index) => {
          return (
            <div key={index}>
              <Skill 
                image={skill.image}
                title={skill.title} 
              />
            </div>
          );
        })}
      </div>
      <div className='grid grid-cols-4 gap-y-4 gap-x-1'>
        {skillsData.slice(skillsData.length / 2, skillsData.length).map((skill, index) => {
          return (
            <div key={index}>
              <Skill
                directionLeft 
                image={skill.image}
                title={skill.title} 
              />
            </div>
          );
        })}
      </div>
     </div>
    </motion.div>
  )
}
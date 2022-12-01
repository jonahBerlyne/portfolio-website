import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
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
     className='flex flex-col relative text-center md:text-left h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
    >
     <h3 className='absolute top-20 sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>
     <div className='space-y-10 pr-3 md:px-10 mt-32 sm:mt-0 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary/80'>
      <h4 className='text-4xl font-semibold'>A bit about <span className='underline decoration-secondary/50'>me</span>...</h4>

      <p className='text-base pb-20 sm:pb-0'>I'm an enthusiastic, self-taught web developer. Through the Odin Project, I've taught myself relevant front-end web development skills. I'm team-oriented, motivated to challenge myself, and am a passionate learner. I've recently completed my first team project as part of Chingu's online, global collaboration platform and I'm looking forward to participating in their next one. Dual citizen of both the UK and the US.</p>
     </div>
    </motion.div>
  )
}
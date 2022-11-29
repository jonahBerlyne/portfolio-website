import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import { Email } from '@mui/icons-material';

export default function Header() {
  return (
    <header className='sticky top-0 flex justify-between max-w-7xl mx-auto z-20 items-center p-5'>
     <motion.div
      initial={{
       x: -500,
       opacity: 0,
       scale: 0.5
      }}
      animate={{
       x: 0,
       opacity: 1,
       scale: 1
      }} 
      transition={{
       duration: 1.5
      }}
      className='flex flex-row items-center'
     >
      <SocialIcon 
       url='http://www.github.com/jonahBerlyne'
       fgColor='gray'
       bgColor='transparent'
      />
      <SocialIcon 
       url='http://www.linkedin.com/jonahBerlyne'
       fgColor='gray'
       bgColor='transparent'
      />
     </motion.div>
     <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }} 
        transition={{
          duration: 1.5
        }} 
        className='flex flex-row items-center text-gray-300 cursor-pointer mr-4'
     >
      <a href="#contact">     
        <Email 
         className='text-[#808080]'
        />
        <p className='uppercase hidden md:inline-flex ml-4 text-sm text-[#808080] decoration-none'>Get in touch</p>
      </a>
     </motion.div>
    </header>
  )
}
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';

export default function Hero() {
  const [text] = useTypewriter({
   words: [
    'Jonah Berlyne',
    'Web Developer'
   ],
   loop: true,
   delaySpeed: 2000
  });

  return (
    <div className='h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden'>
     <BackgroundCircles />
     <img 
      src='/images/personal/profilePicture.jpeg'
      alt="Jonah Berlyne's Profile Pic"
      className='relative rounded-full h-32 w-32 mx-auto object-cover'
     />
     <div className='z-20'>
      <h2 className='text-xs sm:text-sm uppercase text-gray-500 pb-2 tracking-[15px] mt-3 px-2 sm:px-0'>Welcome</h2>
      <h1 className='text-3xl sm:text-5xl lg:text-6xl font-semibold'>
       <span className='mr-3'>{text}</span>
       <Cursor 
        cursorColor='#F7AB0A'
       />
      </h1>
      <div className='px-96 pt-5 flex flex-col sm:flex-row'>
       <a href='#about'>       
        <button className='heroBtn'>About</button>
       </a>
       <a href='#skills'>       
        <button className='heroBtn'>Skills</button>
       </a>
       <a href='#projects'>       
        <button className='heroBtn'>Projects</button>
       </a>
      </div>
     </div>
    </div>
  )
}
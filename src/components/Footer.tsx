import React from 'react'
import { HomeIcon } from '@heroicons/react/24/solid';

export default function Footer() {
  return (
    <footer className='sticky bottom-5 w-full hidden sm:inline'>
     <div className='flex items-center justify-center'>
      <a href="#hero">
       <HomeIcon 
        className='h-10 w-10 cursor-pointer'
       />
      </a>
     </div>
   </footer>   
  );
}
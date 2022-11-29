import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

type Props = {
 directionLeft?: boolean,
 image: string,
 title: string
}

export default function Skill(props: Props) {

  const [innerWidth, setInnerWidth] = useState<number>(0);

  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, []);

  return (
    <div className='group relative flex'>
     <motion.img
      initial={{
       x: props.directionLeft ? (innerWidth < 700 ? -90 : -200) : (innerWidth < 700 ? 90 : 200),
       opacity: 0
      }}
      whileInView={{
       x: 0,
       opacity: 1
      }}
      transition={{
       duration: 1
      }} 
      src={props.image}
      alt={props.title}
      className='rounded-full border border-gray-500 object-fill sm:object-contain w-16 h-16 sm:w-24 sm:h-24 transition duration-300 ease-in-out'
     />
    </div>
  )
}
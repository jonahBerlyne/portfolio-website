import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

export default function About({}: Props) {
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

      <p className='text-base pb-20 sm:pb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore saepe consequuntur ipsam laudantium perspiciatis atque iusto quae, quos, dolor quasi nisi delectus voluptas! Pariatur alias illo reprehenderit facilis, accusamus libero et molestiae asperiores ratione, dicta vitae autem debitis quia optio, est labore ea qui quo! Nam, laboriosam qui, optio quos perferendis sunt voluptatum quas laudantium expedita doloremque laborum illo, quae excepturi eum aut? Autem illum optio aliquam ex, placeat reprehenderit velit molestias dolore esse. Maiores repellat blanditiis doloremque nisi dolores ducimus fugiat in, cupiditate deserunt eligendi qui possimus veritatis doloribus consectetur impedit molestiae beatae, autem mollitia. Unde voluptate id a!</p>
     </div>
    </motion.div>
  )
}
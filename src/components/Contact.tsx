import React from 'react';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function Contact() {

  const { register, handleSubmit, reset } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
   window.location.href = `mailto:${process.env.REACT_APP_EMAIL}?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} ${formData.email}`;
   reset({
    name: '',
    email: '',
    subject: '',
    message: ''
   });
  };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center sm:overflow-y-scroll sm:scrollbar-thin sm:scrollbar-track-gray-400/20 sm:scrollbar-thumb-secondary/80 pb-4 sm:pb-16'>
     <h3 className='absolute top-[4.25rem] sm:top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>
     <div className='flex flex-col space-y-5 sm:space-y-10 mt-36 sm:mt-80'>
      <h4 className='text-xl sm:text-4xl font-semibold text-center mr-4'>I've got just what you need
      <br />
      <span className='decoration-secondary/50 underline'>Let's talk</span></h4>
      <div className='space-y-5 sm:space-y-10'>
       <div className='flex items-center space-x-5 justify-center'>
        <PhoneIcon 
         className='text-secondary h-7 w-7 animate-pulse'
        />
        <p className='text-xl sm:text-2xl'>{process.env.REACT_APP_PHONE_NUMBER}</p>
       </div>
       <div className='flex items-center space-x-5 justify-center'>
        <EnvelopeIcon 
         className='text-secondary h-7 w-7 animate-pulse'
        />
        <p className='text-xl sm:text-2xl'>{process.env.REACT_APP_EMAIL}</p>
       </div>
      </div>
      <form className='flex flex-col space-y-2 w-fit mx-auto pb-7' onSubmit={handleSubmit(onSubmit)}>
       <div className='flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2'>
        <input
         {...register('name')} 
         className='contactInput' 
         type="text" 
         name="name" 
         id="name"
         placeholder='Name' 
         required
        />
        <input
         {...register('email')} 
         className='contactInput' 
         type="email" 
         name="email" 
         id="email"
         placeholder='Email' 
         required
        />
       </div>
       <input
        {...register('subject')} 
        className='contactInput' 
        type="text" 
        name="subject" 
        id="subject"
        placeholder='Subject' 
        required
       />
       <textarea
        {...register('message')} 
        className='contactInput resize-none pb-2 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-secondary/80'
        name='message'
        id='message'
        placeholder='Message'
        required 
       />
       <button 
        type="submit"
        className='bg-secondary py-5 px-10 rounded-md text-black font-bold text-lg'
       >
        Submit
       </button>
      </form>
     </div>
    </div>
  );
}
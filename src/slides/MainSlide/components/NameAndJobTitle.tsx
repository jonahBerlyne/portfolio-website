import React from 'react';
import ShowName from './ShowName';
import ShowTitle from './ShowTitle';
import "../../styles/MainSlide.css";

export default function NameAndJobTitle(): JSX.Element {
 return (
  <div className="name-and-job-title-container">
   <style>
    @import url('https://fonts.googleapis.com/css2?family=Aguafina+Script&family=Open+Sans&display=swap');
   </style>
   <ShowName text='Jonah Berlyne' fontFamily='Aguafina Script, cursive' timeDelay={500} />
   <br />
   <ShowTitle text='Web Developer' fontFamily='Open Sans, sans-serif' timeDelay={1300} />
  </div>
 );
}
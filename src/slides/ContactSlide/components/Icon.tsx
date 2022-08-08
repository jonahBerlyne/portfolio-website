import React from 'react';
import { IconInt } from '../utils/interface';
import "../../styles/ContactSlide.css";

export default function Icon({ alt, imgUrl, openMail, socialLink }: IconInt): JSX.Element {

 return (
  <a href={socialLink} target="_blank" rel="noopener noreferrer">
   <img className='icon-img' src={imgUrl} alt={alt} />
  </a>
 );
}
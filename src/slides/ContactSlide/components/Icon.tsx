import React from 'react';
import { IconInt } from '../utils/interface';
import "../../styles/ContactSlide.css";

export default function Icon({ alt, imgUrl, openMail, socialLink }: IconInt): JSX.Element {

 const openMailWindow = () => {
  window.location.href = `${process.env.REACT_APP_EMAIL}`;
 }

 return (
  <>  
   {!openMail &&
     <>   
      <a href={socialLink} target="_blank" rel="noreferrer">
       <img className='icon-img' src={imgUrl} alt={alt} />
      </a>
     </> 
   }
   {openMail &&
     <div onClick={openMailWindow} style={{ cursor: "pointer" }}>
      <img className='icon-img' src={imgUrl} alt={alt} />
     </div>
   }
  </>
 );
}
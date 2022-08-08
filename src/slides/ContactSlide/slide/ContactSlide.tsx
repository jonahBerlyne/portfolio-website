import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { ContactTitleInt } from '../utils/interface';
import device from '../../../utils/device';

const ContactTitle = styled.div.attrs<ContactTitleInt>(({ scrollPercent }) => ({
  style: {
   transform: `translateX(${(scrollPercent) * 8}%)`
  },
 }))<ContactTitleInt>`
 transition: transform 0.5s ease-out;
 font-family: 'Roboto', sans-serif;
 position: absolute;
 color: #EEE;
 top: 12%;
 @media (max-width: 1023px) {
   display: none;
 }
 @media ${device.laptop} {
   font-size: 180px;
   left: -30%;
 }
 @media ${device.laptop_l} {
   font-size: 200px;
   left: -20%;
 }
 @media ${device.desktop} {
   font-size: 350px;
   left: 0%;
 }
`;

export default function ContactSlide(): JSX.Element {
 const [scrollPercent, setScrollPercent] = useState<number>(0);

 const handleScroll = (e: any): void => {
  const { body, documentElement } = e.srcElement;
  const sd = Math.max(body.scrollTop, documentElement.scrollTop);
  let sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
  const minLimit = (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
  if (sp >= minLimit && sp <= 100) {
    sp -= minLimit;
    setScrollPercent(sp);
  }
 }

 useEffect(() => {
  window.addEventListener('scroll', handleScroll);

  return () => {
   window.removeEventListener('scroll', handleScroll);
  }
 }, []);

 return (
  <div className='contact-slide-container'>
   <style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:wght@500&display=swap');
   </style>
   <ContactTitle scrollPercent={scrollPercent}>CONTACT</ContactTitle>
   <div className="icons-container">
    <Icon 
     alt="Email"
     imgUrl='/images/logos/email_logo.png' 
     socialLink={`${process.env.REACT_APP_EMAIL}`}
    />
    <Icon 
     alt="Github"
     imgUrl='/images/logos/github_logo.png' 
     socialLink='https://github.com/jonahBerlyne'
    />
    <Icon 
     alt="LinkedIn"
     imgUrl='/images/logos/linkedin_logo.png' 
     socialLink='https://www.linkedin.com/in/jonah-b-b7015a100/'
    />
   </div>
  </div>
 );
}
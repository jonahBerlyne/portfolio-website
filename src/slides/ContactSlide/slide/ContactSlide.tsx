import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Icon from '../components/Icon';
import { ContactTitleInt } from '../utils/interface';
import device from '../../../utils/device';

const ContactTitle = styled.div.attrs<ContactTitleInt>(({ scrollPercent }) => ({
  style: {
   transform: `translateX(${(scrollPercent) * 5.5}%)`
  },
 }))<ContactTitleInt>`
 transition: transform 0.5s ease-out;
 font-family: 'Roboto', sans-serif;
 position: absolute;
 color: #EEE;
 top: 5%;
 left: -195%;
 @media (max-width: 1023px) {
   display: none;
 }
 @media ${device.laptop} {
   font-size: 180px;
 }
 @media ${device.laptop_l} {
   font-size: 200px;
 }
 @media ${device.desktop} {
   font-size: 350px;
 }
`;

export default function ContactSlide(): JSX.Element {
 const [scrollPercent, setScrollPercent] = useState<number>(0);

 const handleScroll = (e: any): void => {
  const { body, documentElement } = e.srcElement;
  const sd = Math.max(body.scrollTop, documentElement.scrollTop);
  const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
  const maxLimit = (documentElement.clientHeight * 150) / documentElement.scrollHeight;
  if (sp >= 0 && sp <= maxLimit) setScrollPercent(sp);
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
     alt="Github"
     imgUrl='/images/github_logo.png' 
     socialLink='https://github.com/jonahBerlyne'
    />
    <Icon 
     alt="LinkedIn"
     imgUrl='/images/linkedin_logo.png' 
     socialLink='https://www.linkedin.com/in/jonah-b-b7015a100/'
    />
   </div>
  </div>
 );
}
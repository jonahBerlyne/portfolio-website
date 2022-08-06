import React, { useEffect, useState } from 'react';
import "../../styles/MainSlide.css";
import styled from 'styled-components';
import device from '../../../utils/device';
import { AboutMeTitleInt } from '../utils/interface';

const AboutMeTitle = styled.div.attrs<AboutMeTitleInt>(({ scrollPercent }) => ({
 style: {
  transform: `translateX(${(scrollPercent) * 5.5}%)`
 },
}))<AboutMeTitleInt>`
transition: transform 0.5s ease-out;
font-family: 'Roboto', sans-serif;
position: absolute;
color: #EEE;
top: 5%;
left: -15%;
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

const AboutMeDescription = styled.div`
 align-items: center;
 font-family: 'Open Sans', sans-serif;
 font-weight: 300;
 @media ${device.mobile_s} {
   font-size: 20px;
   text-align: center;
 }
 @media ${device.mobile_m} {
   font-size: 23px;
 }
 @media ${device.mobile_l} {
   font-size: 24px;
 }
 @media ${device.tablet} {
   font-size: 40px;
   text-align: left;
   margin-left: 30%;
   margin-right: 5%;
 }
 @media ${device.laptop} {
   transform: translateY(90%);
   font-size: 30px;
 }
 @media ${device.laptop_l} {
   transform: translateY(87%);
   font-size: 38px;
 }
 @media ${device.desktop} {
   transform: translateY(80%);
   font-size: 70px;
 }
`;

export default function AboutMe(): JSX.Element {
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
  <div className="about-me-container">
   <style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:wght@500&display=swap');
   </style>
   <AboutMeTitle scrollPercent={scrollPercent}>ABOUT ME</AboutMeTitle>
   <AboutMeDescription>
    Self-taught front-end developer via The Odin Project.
    I'm experienced in React.js, TypeScript, Redux, and Firebase.
   </AboutMeDescription>
  </div>
 );
}
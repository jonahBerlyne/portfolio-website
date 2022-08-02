import React, { useEffect, useState } from 'react';
import "../../styles/MainSlide.css";
import styled from "styled-components";
import device from '../../../utils/device';
import { moveUp, WhiteBlock } from "../utils/styled";
import { ShowTextInt } from '../utils/interface';

export default function ShowName({ text, fontFamily, timeDelay}: ShowTextInt): JSX.Element {
 const [reveal, setReveal] = useState<boolean>(false);

 const revealText = (timeout: number): void => {
  setTimeout(() => {
   setReveal(true);
  }, timeout);
 }

 useEffect(() => {
  revealText(timeDelay);
 }, [timeDelay]);

 const TextToReveal = styled.div`
   font-family: ${fontFamily};
   text-align: center;
   @media ${device.tablet} {
     font-size: 90px;
     animation: ${reveal ? moveUp(100) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
     transform: translateY(${100 * 1.4}px);
   }
   @media ${device.laptop} {
     font-size: 120px;
     animation: ${reveal ? moveUp(140) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
     transform: translateY(${140 * 1.4}px);
   }
   @media ${device.laptop_l} {
     font-size: 130px;
     animation: ${reveal ? moveUp(170) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
     transform: translateY(${150 * 1.4}px);
   }
   @media ${device.desktop} {
     font-size: 180px;
     animation: ${reveal ? moveUp(200) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
     transform: translateY(${200 * 1.4}px);
   }
 `;

 return (
  <div className='show-name-container'>
   <TextToReveal>
    {text}
   </TextToReveal>
   <WhiteBlock />
  </div>
 );
}
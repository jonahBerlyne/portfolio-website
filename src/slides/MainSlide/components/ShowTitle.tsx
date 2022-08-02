import React, { useEffect, useState } from 'react';
import { ShowTextInt } from '../utils/interface';
import styled from "styled-components";
import device from '../../../utils/device';
import { moveUp, WhiteBlock } from "../utils/styled";
import "../../styles/MainSlide.css";

export default function ShowTitle({ text, fontFamily, timeDelay }: ShowTextInt): JSX.Element {
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
     font-size: 28px;
     animation: ${reveal ? moveUp(28) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
     transform: translateY(${28 * 1.4}px);
   }
   @media ${device.laptop} {
     font-size: 40px;
     animation: ${reveal ? moveUp(40) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
     transform: translateY(${40 * 1.4}px);
   }
   @media ${device.laptop_l} {
     font-size: 50px;
     animation: ${reveal ? moveUp(50) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
     transform: translateY(${50 * 1.4}px);
   }
   @media ${device.desktop} {
     font-size: 60px;
     animation: ${reveal ? moveUp(60) : 'none'} 1s cubic-bezier(0, 0.1, .12, .99) forwards;
     transform: translateY(${60 * 1.4}px);
   }
 `;

 return (
  <div className='show-title-container'>
   <TextToReveal>
    {text}
   </TextToReveal>
   <WhiteBlock />
  </div>
 );
}
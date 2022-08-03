import React, { useEffect, useState } from 'react';
import "../../../styles/WorkSlide.css";
import { ImageInt } from '../../utils/interface';
import SeinfeldStoreImages from '../images/SeinfeldStoreImages';

export default function Image({ pageSplitTimes }: ImageInt): JSX.Element {
 const [screenHeight, setScreenHeight] = useState<number>(0);
 const [scrollHeight, setScrollHeight] = useState<number>(0);
 const [scrollPercent, setScrollPercent] = useState<number>(0);

 const handleScroll = (): void => {
  const { body, documentElement } = window.document;
  const sd = Math.max(body.scrollTop, documentElement.scrollTop);
  const sp = (sd / (documentElement.scrollHeight - documentElement.clientHeight) * 100);
  const minLimit = (documentElement.clientHeight * 100) / documentElement.scrollHeight;
  const maxLimit = (documentElement.clientHeight * 1040) / documentElement.scrollHeight;
  if (sp >= minLimit && sp <= maxLimit) {
   setScrollPercent(sp);
  }
 }

 useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  setScrollHeight(Math.round(window.document.documentElement.scrollHeight));
  setScreenHeight(Math.round(window.document.documentElement.clientHeight));

  return () => {
   window.removeEventListener('scroll', handleScroll);
  }
 }, []);

 const boxHeight = pageSplitTimes * 100;

 return (
  <div className="image-container">
   <div className="image-box">
    <SeinfeldStoreImages 
     boxHeight={boxHeight}
     index={0}
     screenHeight={screenHeight}
     scrollHeight={scrollHeight}
     scrollPercent={scrollPercent}
    />
   </div>

   
   {/* <div className="image-box"></div>
   <div className="image-box"></div>
   <div className="image-box"></div>
   <div className="image-box"></div> */}
  </div>
 );
}
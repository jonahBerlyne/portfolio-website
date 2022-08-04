import React, { useEffect, useState } from 'react';
import "../../../styles/WorkSlide.css";
import { ImageInt } from '../../utils/interface';
import Images from '../images/Images';

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
    <Images 
     boxHeight={boxHeight}
     imgSrc1='/images/projects/SeinfeldStore/home.png'
     imgAlt1="Seinfeld Store Homepage"
     imgSrc2='/images/projects/SeinfeldStore/checkout.png'
     imgAlt2='Seinfeld Store Checkout'
     index={0}
     screenHeight={screenHeight}
     scrollHeight={scrollHeight}
     scrollPercent={scrollPercent}
    />
   </div>

   <div className="image-box">
    <Images 
     boxHeight={boxHeight}
     imgSrc1='/images/projects/QRCodeApp/qrform.png'
     imgAlt1="QR Form"
     imgSrc2='/images/projects/QRCodeApp/qrcode.png'
     imgAlt2='QR Code'
     index={1}
     screenHeight={screenHeight}
     scrollHeight={scrollHeight}
     scrollPercent={scrollPercent}
    />
   </div>

   <div className="image-box">
    <Images 
     boxHeight={boxHeight}
     imgSrc1='/images/projects/TimezoneTrackingApp/getstarted.png'
     imgAlt1="Get Started Page"
     imgSrc2='/images/projects/TimezoneTrackingApp/team.png'
     imgAlt2='Team Page'
     index={2}
     screenHeight={screenHeight}
     scrollHeight={scrollHeight}
     scrollPercent={scrollPercent}
    />
   </div>

   <div className="image-box">
    <Images 
     boxHeight={boxHeight}
     imgSrc1='/images/projects/TwitterCloneApp/home.png'
     imgAlt1="Twitter Homepage"
     imgSrc2='/images/projects/TwitterCloneApp/signin.png'
     imgAlt2='Twitter Sign-In Page'
     index={3}
     screenHeight={screenHeight}
     scrollHeight={scrollHeight}
     scrollPercent={scrollPercent}
    />
   </div>

   <div className="image-box">
    <Images 
     boxHeight={boxHeight}
     imgSrc1='/images/projects/GmailCloneApp/emailrows.png'
     imgAlt1="Gmail Email Rows"
     imgSrc2='/images/projects/GmailCloneApp/email.png'
     imgAlt2='Gmail E-mail Page'
     index={4}
     screenHeight={screenHeight}
     scrollHeight={scrollHeight}
     scrollPercent={scrollPercent}
    />
   </div>
  </div>
 );
}
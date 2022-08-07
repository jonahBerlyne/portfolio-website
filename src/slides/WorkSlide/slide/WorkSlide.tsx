import React, { useEffect, useState } from 'react';
import "../../styles/WorkSlide.css";
import Text from '../components/content/Text';
import Image from '../components/content/Image';

export default function WorkSlide(): JSX.Element {
 const [vh, setVh] = useState<number>(0);
 const [slideNumber, setSlideNumber] = useState<number>(0);
 const [lastScrollTop, setLastScrollTop] = useState<number>(0);

 const workDetails = [
  {
   number: '',
   projectName: '',
   projectDesc: '',
   appLink: '',
   repoLink: '',
   mobileImgAlt: '',
   mobileImgSrc: ''
  },
  {
   number: '01',
   projectName: 'Seinfeld Store',
   projectDesc: 'This is an e-commerce site sample featuring products seen on Seinfeld.',
   appLink: 'https://seinfeld-store-app.web.app',
   repoLink: 'https://github.com/jonahBerlyne/e-commerce-site',
   mobileImgAlt: 'Seinfeld Logo',
   mobileImgSrc: '/images/mobile/seinfeld_logo.png'
  },
  {
   number: '02',
   projectName: 'QR Code App',
   projectDesc: 'An app where you can create your own QR Codes and save them to your own QR Codes list.',
   appLink: 'https://qr-code-app-d7ae4.web.app',
   repoLink: 'https://github.com/jonahBerlyne/qr-code-app',
   mobileImgAlt: 'QR Code',
   mobileImgSrc: '/images/mobile/mobile_qr_code.png'
  },
  {
   number: '03',
   projectName: 'Timezone Tracking App',
   projectDesc: 'A Timezone Tracking App where you can track the times of members of your team, no matter where they are in the world. Based on timezone.io.',
   appLink: 'https://timezone-tracking-app-1c124.web.app',
   repoLink: 'https://github.com/jonahBerlyne/timezone-tracking-app',
   mobileImgAlt: 'Timezone Logo',
   mobileImgSrc: '/images/mobile/clock.jpeg'
  },
  {
   number: '04',
   projectName: 'Twitter Clone App',
   projectDesc: 'This is a clone of Twitter, where you can create your own Twitter account and send tweets from it in real time.',
   appLink: 'https://twitter-clone-app-dc926.web.app',
   repoLink: 'https://github.com/jonahBerlyne/twitter-clone-app',
   mobileImgAlt: 'Twitter Logo',
   mobileImgSrc: '/images/mobile/twitter_logo.png'
  },
  {
   number: '05',
   projectName: 'Gmail Clone App',
   projectDesc: 'This is a Gmail Clone App, which you can use through your Gmail account. You can send emails to both yourself and other users of the app and receive them in real time.',
   appLink: 'https://clone-app-8877a.web.app',
   repoLink: 'https://github.com/jonahBerlyne/gmail-clone-app',
   mobileImgAlt: 'Gmail Logo',
   mobileImgSrc: '/images/mobile/gmail_logo.png'
  },
  {
   number: '',
   projectName: '',
   projectDesc: '',
   appLink: '',
   repoLink: '',
   mobileImgAlt: '',
   mobileImgSrc: ''
  }
 ];
 
 const pageSplitTimes = 1.4;
 
 const changeTextContentBasedOnScroll = (): JSX.Element => {
  if (workDetails[slideNumber].appLink === undefined) window.location.reload();
  
  return (
   <Text
    appLink={workDetails[slideNumber].appLink}
    mobileImgAlt={workDetails[slideNumber].mobileImgAlt}
    mobileImgSrc={workDetails[slideNumber].mobileImgSrc}
    number={workDetails[slideNumber].number}
    projectName={workDetails[slideNumber].projectName}
    projectDesc={workDetails[slideNumber].projectDesc}
    repoLink={workDetails[slideNumber].repoLink}
   />
  );
 }

 useEffect(() => {
  const handleScroll = (e: any): void => {
   const { body, documentElement } = e.srcElement;
   const scrollDistance = Math.max(body.scrollTop, documentElement.scrollTop);
   setLastScrollTop(scrollDistance);
   if (Math.floor(scrollDistance / vh) !== slideNumber
   && slideNumber < workDetails.length - 1) {
    setSlideNumber(Math.floor(scrollDistance / vh));
   } else if (slideNumber === workDetails.length - 1
   && (Math.floor(scrollDistance / vh) < slideNumber)) {
    setSlideNumber(Math.floor(scrollDistance / vh));
   }
  }

  window.addEventListener('scroll', handleScroll);
  setVh(Math.round(window.document.documentElement.clientHeight * pageSplitTimes));
  
  return () => {
   window.removeEventListener('scroll', handleScroll);
  }
 }, [lastScrollTop, slideNumber, vh, workDetails.length]);

 return (
  <div className='work-slide-container'>
   {changeTextContentBasedOnScroll()}
   <Image pageSplitTimes={pageSplitTimes} />
  </div>
 );
}
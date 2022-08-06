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
   repoLink: ''
  },
  {
   number: '01',
   projectName: 'Seinfeld Store',
   projectDesc: 'This is an e-commerce site sample featuring products seen on Seinfeld. Do you want to order a Big Salad for a friend? Or a Tweety Bird Pez Dispenser to bring to a piano recital? Or do you want your very own copy of the Coffee Table Book about Coffee Tables? If so, then the Seinfeld Store is every Seinfeld fan\'s dream shopping site!',
   appLink: 'https://seinfeld-store-app.web.app',
   repoLink: 'https://github.com/jonahBerlyne/e-commerce-site'
  },
  {
   number: '02',
   projectName: 'QR Code App',
   projectDesc: 'An app where you can create your own QR Codes and save them to your own QR Codes list.',
   appLink: 'https://qr-code-app-d7ae4.web.app',
   repoLink: 'https://github.com/jonahBerlyne/qr-code-app'
  },
  {
   number: '03',
   projectName: 'Timezone Tracking App',
   projectDesc: 'A Timezone Tracking App where you can track the times of members of your team, no matter where they are in the world. You can add as many teams and team members as you\'d like! Based on http://timezone.io.',
   appLink: 'https://timezone-tracking-app-1c124.web.app',
   repoLink: 'https://github.com/jonahBerlyne/timezone-tracking-app'
  },
  {
   number: '04',
   projectName: 'Twitter Clone App',
   projectDesc: 'This is a clone of Twitter, where you can create your own Twitter account and send tweets from it in real time. You can delete your own tweets if you\'d like, and you can view tweets from other users of the app.',
   appLink: 'https://twitter-clone-app-dc926.web.app',
   repoLink: 'https://github.com/jonahBerlyne/twitter-clone-app'
  },
  {
   number: '05',
   projectName: 'Gmail Clone App',
   projectDesc: 'This is a Gmail Clone App, which you can use through your Gmail account. You can send emails to both yourself and other users of the app and receive them in real time. In addition, you can view all your emails together, read them, and delete them.',
   appLink: 'https://clone-app-8877a.web.app',
   repoLink: 'https://github.com/jonahBerlyne/gmail-clone-app'
  },
  {
   number: '',
   projectName: '',
   projectDesc: '',
   appLink: '',
   repoLink: ''
  }
 ];
 
 const pageSplitTimes = 1.4;
 
 const changeTextContentBasedOnScroll = (): JSX.Element => {
  if (workDetails[slideNumber].appLink === undefined) window.location.reload();
  
  return (
   <Text
    appLink={workDetails[slideNumber].appLink}
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
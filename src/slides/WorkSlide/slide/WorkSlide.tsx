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
   projectType: '',
   roles: ['']
  },
  {
   number: '01',
   projectName: 'Seinfeld Store',
   projectDesc: 'Description goes here',
   projectType: 'Placeholder',
   roles: ['I', 'D', 'K']
  },
  {
   number: '02',
   projectName: 'QR Code App',
   projectDesc: 'Description goes here',
   projectType: 'Placeholder',
   roles: ['I', 'D', 'K']
  },
  {
   number: '03',
   projectName: 'Timezone Tracking App',
   projectDesc: 'Description goes here',
   projectType: 'Placeholder',
   roles: ['I', 'D', 'K']
  },
  {
   number: '04',
   projectName: 'Twitter Clone App',
   projectDesc: 'Description goes here',
   projectType: 'Placeholder',
   roles: ['I', 'D', 'K']
  },
  {
   number: '05',
   projectName: 'Gmail Clone App',
   projectDesc: 'Description goes here',
   projectType: 'Placeholder',
   roles: ['I', 'D', 'K']
  },
  {
   number: '',
   projectName: '',
   projectDesc: '',
   projectType: '',
   roles: ['']
  }
 ];
 
 const pageSplitTimes = 1.4;
 
 const changeTextContentBasedOnScroll = (): JSX.Element => {
  return (
   <Text
    number={workDetails[slideNumber].number}
    projectName={workDetails[slideNumber].projectName}
    projectDesc={workDetails[slideNumber].projectDesc}
    projectType={workDetails[slideNumber].projectType}
    roles={workDetails[slideNumber].roles}
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
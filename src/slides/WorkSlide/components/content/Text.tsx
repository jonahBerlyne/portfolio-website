import React from 'react';
import "../../../styles/WorkSlide.css";
import { TextInt } from '../../utils/interface';
import styled from 'styled-components';
import device from '../../../../utils/device';
import { OpenInNew } from '@mui/icons-material';

const ProjectName = styled.div`
  @media (max-width: 767px) {
    text-align: center;
  }
  @media ${device.tablet} {
    font-size: 40px;
  }
  @media ${device.laptop} {
    font-size: 45px;
  }
  @media ${device.laptop_l} {
    font-size: 80px;
  }
  @media ${device.desktop} {
    font-size: 120px;
  }
`;

const ProjectDesc = styled.div`
  padding-top: 2%;
  width: 40vw;
  @media (max-width: 767px) {
    text-align: center;
  }
  @media ${device.laptop} {
    font-size: 20px;
  }
  @media ${device.laptop_l} {
    font-size: 30px;
  }
`;

const ProjectID = styled.div`
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptop_l} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 58px;
  }
  padding: 5%;
`;

export default function Text(props: TextInt): JSX.Element {
 const {
  appLink,
  mobileImgAlt,
  mobileImgSrc,
  number,
  projectName,
  projectDesc,
  repoLink
 } = props;

 return (
  <div className="text-container">

   <style>
    @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300&family=Roboto:wght@500&display=swap');
   </style>

   <ProjectID>
     {number}
   </ProjectID>

   <div className="project-details-container">
    <div className="project-details">

     <ProjectName>
       {projectName}
     </ProjectName>
     
     {mobileImgSrc !== '' && mobileImgAlt !== '' &&      
       <div className="mobile-img-container">
         <img src={mobileImgSrc} alt={mobileImgAlt} />
       </div>
     }

     <ProjectDesc>
       {projectDesc}
     </ProjectDesc>

     {appLink !== '' && repoLink !== '' && 
      <div className='project-links-container'>
       <a href={appLink} target="_blank" rel="noreferrer">
         <OpenInNew />
       </a>
       <a href={repoLink} target="_blank" rel="noreferrer">
         <img className='repo-link' src="/images/logos/github_logo.png" alt={`Repo link for ${projectName}`} />
       </a>
      </div>
     }

    </div>
   </div>

  </div>
 );
}
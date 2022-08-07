import React from 'react';
import "../../../styles/WorkSlide.css";
import { TextInt } from '../../utils/interface';
import styled from 'styled-components';
import device from '../../../../utils/device';
import { OpenInNew } from '@mui/icons-material';

const ProjectName = styled.div`
  font-family: 'AvenirHeavy';
  @media (max-width: 767px) {
    text-align: center;
  }
  @media ${device.laptop} {
    font-size: 70px;
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
  font-family: 'AvenirBook';
  width: 40vw;
  @media (max-width: 767px) {
    text-align: center;
  }
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptop_l} {
    font-size: 30px;
  }
`;

const ProjectID = styled.div`
  font-family: 'AvenirHeavy';
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

const ProjectType = styled.div`
  font-family: 'AvenirHeavy';
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

   <ProjectID>
     {number}
   </ProjectID>

   <div className="project-details-container">
    <div className="project-details">

     <ProjectName>
       {projectName}
     </ProjectName>

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

     <ProjectDesc>
       {projectDesc}
     </ProjectDesc>

     {mobileImgSrc !== '' && mobileImgAlt !== '' &&      
      <div className="mobile-img-container">
        <img src={mobileImgSrc} alt={mobileImgAlt} />
      </div>
     }

    </div>
   </div>

  </div>
 );
}
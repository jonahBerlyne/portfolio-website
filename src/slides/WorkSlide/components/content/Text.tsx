import React from 'react';
import "../../../styles/WorkSlide.css";
import { TextInt } from '../../utils/interface';
import styled from 'styled-components';
import device from '../../../../utils/device';

const ProjectName = styled.div`
  font-family: 'AvenirHeavy';
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
  padding-top:2%;
  font-family: 'AvenirBook';
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptop_l} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 50px;
  }
`;

const MyRole = styled.div`
  padding-top:5%;
  font-family: 'AvenirMedium';
  @media ${device.laptop} {
    font-size: 25px;
  }
  @media ${device.laptop_l} {
    font-size: 30px;
  }
  @media ${device.desktop} {
    font-size: 50px;
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
  number,
  projectName,
  projectDesc,
  projectType,
  roles
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

     <MyRole>
       {roles.map((role, index, arr) => 
        (index === arr.length - 1) ? (
         <span key={role}>
          {role}
         </span>
        ) : (
         <span key={role}>
          {role}
          &nbsp; • &nbsp;
         </span>
        )
       )}
     </MyRole>

     <ProjectDesc>
       {projectDesc}
     </ProjectDesc>

    </div>
   </div>

   <ProjectType>
     {projectType}
   </ProjectType>

  </div>
 );
}
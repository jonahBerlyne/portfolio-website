import React, { useEffect } from 'react';
import "../../../styles/WorkSlide.css";
import { BlockTextInt, TextInt } from '../../utils/interface';
import styled, { keyframes } from 'styled-components';
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

const appearText = () => keyframes`
0%{
  color: #FFF;
}
100%{
  color: #333;
}
`;

const revBlock = () => keyframes`
0%{
    left: 0;
    width: 0%
}
50%{
    left:0%;
    width:100%
}
100%{
    left:100%;
    width:0%
}
`;

let BlockTextReveal = styled.span<BlockTextInt>`
`;

const BlockTextRevealQuick = styled.span<BlockTextInt>`
display:${props => (props.inline ? 'inline' : 'block')};
color: #FFF;
animation: ${appearText} 0.0001s linear forwards;
animation-delay: 0.5s;
position: relative;
&::after{
content:'';
top:0;
left:0;
position:absolute;
width:0%;
height:100%;
background: #222;
animation: ${revBlock} 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
animation-delay:0s;
}
`;

const BlockTextRevealNoAnim = styled.span<BlockTextInt>`
`;

export default function Text(props: TextInt): JSX.Element {
 const {
  number,
  projectName,
  projectDesc,
  projectType,
  roles,
  refreshToggle
 } = props;
 
 useEffect(() => {
  if (refreshToggle) {
   BlockTextReveal = BlockTextRevealNoAnim;
   setTimeout(() => {
    BlockTextReveal = BlockTextRevealQuick;
   }, 5000);
  }
 });

 return (
  <div className="text-container">

   <ProjectID>
    <BlockTextReveal refreshToggle={refreshToggle} inline>
     {number}
    </BlockTextReveal>
   </ProjectID>

   <div className="project-details-container">
    <div className="project-details">

     <ProjectName>
      <BlockTextReveal refreshToggle={refreshToggle} inline>
       {projectName}
      </BlockTextReveal>
     </ProjectName>

     <MyRole>
      <BlockTextReveal refreshToggle={refreshToggle} inline>
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
      </BlockTextReveal>
     </MyRole>

     <ProjectDesc>
      <BlockTextReveal refreshToggle={refreshToggle} inline={false}>
       {projectDesc}
      </BlockTextReveal>
     </ProjectDesc>

    </div>
   </div>

   <ProjectType>
    <BlockTextReveal refreshToggle={refreshToggle} inline>
     {projectType}
    </BlockTextReveal>
   </ProjectType>

  </div>
 );
}
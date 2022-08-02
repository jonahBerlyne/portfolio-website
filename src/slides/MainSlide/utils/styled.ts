import styled, { Keyframes, keyframes } from "styled-components";

const hideWhiteBlocks = (): Keyframes => keyframes`
0% {
 opacity: 1;
 height: 35vh;
}
100% {
 opacity: 0;
 height: 0vh;
}
`;

export const WhiteBlock = styled.div`
position: absolute;
background-color: white;
margin-right: 100%;
width: 120%;
height: 35vh;
animation: ${hideWhiteBlocks} 0.5s linear forwards;
animation-delay: 2s;
`;

export const moveUp = (initialFrames: number): Keyframes => keyframes`
0% {
 transform: translateY(${initialFrames}px);
}
100% {
 transform: translateY(0px);
}
`;
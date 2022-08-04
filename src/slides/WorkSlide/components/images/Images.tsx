import React, { useEffect, useState } from 'react';
import { ImagesInt } from '../../utils/interface';
import styled from 'styled-components';

const ImgOne = styled.img.attrs<ImagesInt>(({ scrollPercent }) => ({
  style: {
    transform: `translate(0px,-${(scrollPercent) * 15}%)`
  }
}))<ImagesInt>`
transition: transform 0.2s ease-out;
position: absolute;
bottom: 0vh;
left: -3vw;
height: 50vh;
width: 50vw;
margin-bottom: 50px;
`;

const ImgTwo = styled.img.attrs<ImagesInt>(({ scrollPercent }) => ({
  style: { 
   transform: `translate(0px,-${(scrollPercent) * 5}%) scale(0.7)`
  }
}))<ImagesInt>`
transition: transform 0.2s ease-out;
bottom: -70vh;
left: -15vw;
position: absolute;
height: 75vh;
width: 75vw;
margin-bottom: 50px;
`;

export default function Images(props: ImagesInt): JSX.Element {
 const {
  boxHeight,
  imgAlt1,
  imgAlt2,
  imgSrc1,
  imgSrc2,
  index,
  scrollPercent,
  scrollHeight,
  screenHeight
 } = props;

 const [heighttoBeReducedinVH, setHeighttoBeReducedinVH] = useState<number>(0);
 const [scrollOffset, setScrollOffset] = useState<number>(0);
 const [scrollOffsetInPercent, setScrollOffsetInPercent] = useState<number>(0);
 const [_scrollPercent, setScrollPercent] = useState<number>(scrollPercent);

 useEffect(() => {
  if (boxHeight && index) {
   setHeighttoBeReducedinVH((boxHeight * index) - 100);
  }
 }, []);

 useEffect(() => {
  if (screenHeight) {
   setScrollOffset((screenHeight * heighttoBeReducedinVH) / 100);
  }
 }, [heighttoBeReducedinVH]);

 useEffect(() => {
  if (scrollHeight) {
   setScrollOffsetInPercent(scrollOffset * 100 / scrollHeight);
  }
 }, [scrollOffset]);

 useEffect(() => {
  setScrollPercent(_scrollPercent - scrollOffsetInPercent);
 }, [scrollOffsetInPercent]);

 return (
  <>
   <ImgOne src={imgSrc1} alt={imgAlt1} scrollPercent={_scrollPercent} />
   <ImgTwo src={imgSrc2} alt={imgAlt2} scrollPercent={_scrollPercent} />
  </>
 );
}
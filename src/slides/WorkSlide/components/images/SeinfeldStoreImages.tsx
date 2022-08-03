import React, { useEffect, useState } from 'react';
import { ImagesInt } from '../../utils/interface';
import styled from 'styled-components';

const HomeImg = styled.img.attrs<ImagesInt>(({ scrollPercent }) => ({
  style: {
    transform: `translate(0px,-${(scrollPercent) * 15}%)`
  }
}))<ImagesInt>`
transition: transform 0.2s ease-out;
position: absolute;
bottom: -90vh;
left:0vw;
/* border: 1px dashed red; */
height: 80vh; 
`;

const CheckoutImg = styled.img.attrs<ImagesInt>(({ scrollPercent }) => ({
  style: { 
   transform: `translate(0px,-${(scrollPercent) * 8}%) scale(0.9)`
  }
}))<ImagesInt>`
transition: transform 0.2s ease-out;
position: absolute;
bottom:-45vh;
right: 2vw;
/* border: 1px dashed red; */
height: 80vh;
filter: blur(0.6px);
`;

export default function SeinfeldStoreImages(props: ImagesInt): JSX.Element {
 const {
  boxHeight,
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
 }, [boxHeight, index]);

 useEffect(() => {
  if (screenHeight) {
   setScrollOffset((screenHeight * heighttoBeReducedinVH) / 100);
  }
 }, [screenHeight, heighttoBeReducedinVH]);

 useEffect(() => {
  if (scrollHeight) {
   setScrollOffsetInPercent(scrollOffset * 100 / scrollHeight);
  }
 }, [scrollHeight, scrollOffset]);

 useEffect(() => {
  setScrollPercent(_scrollPercent - scrollOffsetInPercent);
 }, [_scrollPercent, scrollOffsetInPercent]);

 return (
  <>
   <HomeImg src='/images/projects/SeinfeldStore/home.png' alt='Seinfeld Store Homepage' scrollPercent={_scrollPercent} />
   <CheckoutImg src='/images/projects/SeinfeldStore/checkout.png' alt='Seinfeld Store Checkout' scrollPercent={_scrollPercent} />
  </>
 );
}
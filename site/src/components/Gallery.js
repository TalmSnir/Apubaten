import React from 'react';
import Image1 from '../assets/image1.jpeg';
import Image2 from '../assets/image5.jpeg';
import Image3 from '../assets/image6.jpeg';

import { ReactComponent as Lines } from '../assets/lines.svg';
import { ReactComponent as Waves } from '../assets/waves.svg';
import { Image } from '.';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  inline-size: 500px;
  block-size: 500px;
  position: relative;
  max-inline-size: 100%;

  img:first-child {
    inline-size: 70%;
    aspect-ratio: 3/2;
    position: absolute;
    top: -20px;
    left: 20px;
    border-bottom: 4px solid ${({ theme }) => theme.clrPrimary};
  }
  img:nth-child(2) {
    position: absolute;
    block-size: 100%;
    inline-size: 50%;
    top: 0;
    right: 0;
    z-index: 0;
    border-left: 4px solid ${({ theme }) => theme.clrTertiary};
  }
  img:nth-child(3) {
    position: absolute;
    block-size: 34%;
    aspect-ratio: 3/2;
    bottom: -20px;
    left: -10%;
    z-index: 1;
    border-right: 4px solid ${({ theme }) => theme.clrSecondary};
  }
`;
const AbstractOne = styled(Lines)`
  block-size: 200px;
  aspect-ratio: 1/2;
  position: absolute;
  bottom: 40px;
  opacity: 0.7;
  right: 40%;
  z-index: -2;
`;
const AbstractTwo = styled(Waves)`
  block-size: 200px;
  aspect-ratio: 1/2;
  position: absolute;
  top: -60px;
  opacity: 0.7;
  left: 50%;
  transform: rotate(-30deg);
  z-index: 10000;
`;
export default function Gallery() {
  return (
    <GalleryContainer>
      <Image src={Image1} alt='Asaf sitting in front of a graffiti' />
      <Image src={Image2} alt='Asaf standing in front of a graffiti' />
      <Image src={Image3} alt='Asaf playing guitar next to a painting' />
      <AbstractOne />
      <AbstractTwo />
    </GalleryContainer>
  );
}

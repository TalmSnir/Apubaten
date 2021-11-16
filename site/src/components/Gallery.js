import React from 'react';
import Image1 from '../assets/image1.jpeg';
import Image2 from '../assets/image5.jpeg';
import Image3 from '../assets/image6.jpeg';

import { Image } from '.';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  inline-size: 500px;
  block-size: 500px;
  position: relative;
  max-inline-size: 100%;
  img:first-child {
    block-size: 50%;
    inline-size: 50%;
    position: absolute;
    top: -20px;
    left: 20px;
    /* inline-size: 100%;
    /* transform: translateY(30px); */
    /* z-index: -1; */
  }
  img:nth-child(2) {
    position: absolute;
    block-size: 100%;
    inline-size: 50%;
    top: 0;
    right: 0;
    z-index: 0;
  }
  img:last-child {
    position: absolute;
    block-size: 30%;
    inline-size: 60%;
    bottom: -20px;
    left: 0;
    z-index: 1;
  }
`;
export default function Gallery() {
  return (
    <GalleryContainer>
      <Image src={Image1} alt='Asaf sitting in front of a graffiti' />
      <Image src={Image2} alt='Asaf standing in front of a graffiti' />
      <Image src={Image3} alt='Asaf playing guitar next to a painting' />
    </GalleryContainer>
  );
}

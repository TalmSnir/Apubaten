import React from 'react';
import styled from 'styled-components';
import { FlexContainer, Header2, SectionContainer, Video } from '../components';

import { ReactComponent as ArrowUp } from '../assets/arrowup.svg';
import { ReactComponent as ArrowsLeft } from '../assets/arrowsleft.svg';

const AbstractOne = styled(ArrowUp)`
  block-size: 100px;
  position: absolute;
  bottom: -20px;
  left: 0;
`;
const AbstractTwo = styled(ArrowsLeft)`
  inline-size: 80px;
  position: absolute;

  top: -20px;
  right: 20px;
`;

export default function Videos() {
  return (
    <SectionContainer id='listen'>
      <AbstractOne />
      <AbstractTwo />
      <FlexContainer dir='column' gap='2rem'>
        <Header2>relax & enjoy</Header2>
        <Video title='1' src='https://www.youtube.com/embed/GPHRPHTrRW8' />
        <Video title='2' src='https://www.youtube.com/embed/jt_SIPsvtAw' />
      </FlexContainer>
    </SectionContainer>
  );
}

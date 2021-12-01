import React from 'react';
import styled from 'styled-components';
import {
  FlexContainer,
  Header2,
  Video,
  sectionMixin,
  innerSectionMixin,
} from '../components';

import { ReactComponent as ArrowUp } from '../assets/arrowup.svg';
import { ReactComponent as ArrowsLeft } from '../assets/arrowsleft.svg';

const SectionContainer = styled.section`
  ${sectionMixin};
  background-color: ${({ theme }) => theme.clrSecondary};
  background-image: ${({ theme }) =>
    ` linear-gradient(to top left , ${theme.clrDark} 90%, ${theme.clrSecondary} 90% 100% ), linear-gradient(to top right, ${theme.clrTertiary}  33%, ${theme.clrDark}  33% 100% )`};
  background-repeat: no-repeat;
  background-position: top left, bottom left;
  background-size: 600% 50%, 200vw 50%;
`;
const AbstractOne = styled(ArrowUp)`
  block-size: 100px;
  position: absolute;
  bottom: -20px;
  left: 0;
  z-index: ${({ theme }) => theme.zIndexTop};
  @media screen and (min-width: ${({ theme }) => theme.bpLg}) {
    block-size: 300px;
  }
`;
const AbstractTwo = styled(ArrowsLeft)`
  inline-size: 80px;
  position: absolute;

  top: -20px;
  right: 20px;
  @media screen and (min-width: ${({ theme }) => theme.bpLg}) {
    inline-size: 200px;
  }
`;

const VideosContainer = styled(FlexContainer)`
  position: relative;
  ${innerSectionMixin};
  @media screen and (min-width: ${({ theme }) => theme.bpLg}) {
    gap: ${({ theme }) => theme.spacingLg};
    & > iframe:first-of-type {
      align-self: flex-start;
    }
    & > iframe:nth-of-type(2) {
      align-self: flex-end;
    }
  }
`;

export default function Videos() {
  return (
    <SectionContainer id='listen' bgImage='gradientVideos'>
      <VideosContainer dir='column' gap='2rem'>
        <AbstractOne />
        <AbstractTwo />
        <Header2>relax & enjoy</Header2>
        <Video title='1' src='https://www.youtube.com/embed/GPHRPHTrRW8' />
        <Video title='2' src='https://www.youtube.com/embed/jt_SIPsvtAw' />
      </VideosContainer>
    </SectionContainer>
  );
}

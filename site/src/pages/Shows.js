import React from 'react';
import styled from 'styled-components';
import {
  FlexContainer,
  Header2,
  ShowTicket,
  sectionMixin,
} from '../components';

const SectionContainer = styled.section`
  ${sectionMixin};

  background-image: ${({ theme }) =>
    `linear-gradient(to top left , transparent 80%, ${theme.clrPrimary} 80% 100% ), linear-gradient(to bottom left , transparent 90%, ${theme.clrSecondary} 90% 100% )`};
  background-repeat: no-repeat;
  background-position: left top, left bottom;
  background-size: 300% 100%, 600% 100%;
  min-height: 100vh;
`;

const TicketsContainer = styled.div`
  position: relative;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndexTop};
  & > div {
    & > div {
      :first-child {
        border-width: 8px;
        border-style: solid;
        border-color: ${({ theme }) => theme.clrSecondary} transparent
          transparent ${({ theme }) => theme.clrSecondary};
      }
      :last-child {
        border-width: 8px;
        border-style: solid;
        border-color: transparent ${({ theme }) => theme.clrTertiary}
          ${({ theme }) => theme.clrTertiary} transparent;
      }
    }
  }
`;

const Title = styled(Header2)`
  @media screen and (min-width: ${({ theme }) => theme.bpLg}) {
    writing-mode: vertical-lr;
    transform: rotateZ(180deg);
    font-size: ${({ theme }) => `calc(${theme.fsMd}*${theme.mdFc})`};
  }
`;

export default function Shows() {
  return (
    <SectionContainer id='upcoming-shows' bgImage='gradientShows'>
      <FlexContainer dir='column' gap='2rem' bpLgRow>
        <Title>upcoming shows</Title>
        <TicketsContainer>
          <ShowTicket />
        </TicketsContainer>
      </FlexContainer>
    </SectionContainer>
  );
}

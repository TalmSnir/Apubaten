import React from 'react';
import styled from 'styled-components';
import {
  FlexContainer,
  Header2,
  SectionContainer,
  ShowTicket,
} from '../components';

const TicketsContainer = styled.div`
  position: relative;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    z-index: ${({ theme }) => theme.zIndexBehind};
    top: -8px;
    left: -8px;
    inline-size: 60%;
    aspect-ratio: 1/1;
    background-color: transparent;
    border-width: 16px;
    border-style: solid;
    border-color: ${({ theme }) => theme.clrTertiary} transparent transparent
      ${({ theme }) => theme.clrTertiary};
    border-radius: ${({ theme }) => theme.brRound};
  }
  &::after {
    content: '';
    position: absolute;
    z-index: ${({ theme }) => theme.zIndexBehind};
    bottom: -8px;
    right: -8px;
    inline-size: 60%;
    aspect-ratio: 1/1;
    background-color: transparent;
    border-width: 16px;
    border-style: solid;
    border-color: transparent ${({ theme }) => theme.clrSecondary}
      ${({ theme }) => theme.clrSecondary} transparent;
    border-radius: ${({ theme }) => theme.brRound};
  }
`;
export default function Shows() {
  return (
    <SectionContainer id='upcoming-shows'>
      <FlexContainer dir='column' gap='2rem'>
        <Header2>upcoming shows</Header2>
        <TicketsContainer>
          <ShowTicket />
        </TicketsContainer>
      </FlexContainer>
    </SectionContainer>
  );
}

import React from 'react';
import styled from 'styled-components';
import { FlexContainer, ButtonLink } from '.';
const Location = styled.h3`
  font-size: ${({ theme }) => theme.fsMd};
  & + span {
    font-size: calc(${({ theme }) => theme.fsMd} * 0.6);
  }
`;
const DateTime = styled.h4``;
const Ticket = styled(FlexContainer)`
  box-shadow: ${({ theme }) => theme.cardShadow};
  overflow: hidden;
  border-radius: ${({ theme }) => theme.brRound};
  & > * {
    width: 100%;
    background-color: ${({ theme }) => theme.clrLight};
  }
  @media screen and (min-width: ${({ theme }) => theme.bpMd}) {
    & > div:first-child {
      flex: 1;
    }
    & > div:nth-child(2) {
      flex: 2;
    }
  }
`;
const showsData = [
  {
    location: { city: 'Tel Aviv', place: 'some bar' },
    date: '03:10',
    time: '20:00',
  },
  {
    location: { city: 'Tel Aviv', place: 'some bar' },
    date: '03:10',
    time: '20:00',
  },
  {
    location: { city: 'Tel Aviv', place: 'some bar' },
    date: '03:10',
    time: '20:00',
  },
];
export default function ShowTicket() {
  return (
    <FlexContainer gap='2rem' dir='column' inlineSize='100%' ai='stretch'>
      {showsData.map((show, id) => (
        <Ticket gap='0.5rem' dir='column' key={id} bpLgRow>
          <FlexContainer inlineSize='100%' dir='column' padding='2rem'>
            <Location>{show.location.city}</Location>
            <span>{show.location.place}</span>
          </FlexContainer>
          <FlexContainer dir='column' padding='2rem'>
            <DateTime>
              {show.date}
              {show.time}
            </DateTime>
            <ButtonLink fullWidth>event page</ButtonLink>
          </FlexContainer>
        </Ticket>
      ))}
    </FlexContainer>
  );
}

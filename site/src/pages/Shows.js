import React from 'react';
import { FlexContainer, Header2, ShowTicket } from '../components';

export default function Shows() {
  return (
    <section>
      <FlexContainer dir='column' padding='1rem'>
        <Header2>upcoming shows</Header2>
        <ShowTicket />
      </FlexContainer>
    </section>
  );
}

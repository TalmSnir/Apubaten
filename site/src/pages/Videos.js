import React from 'react';
import { FlexContainer, Header2, Video } from '../components';
export default function Videos() {
  return (
    <section style={{ padding: '2rem 1rem' }}>
      <FlexContainer dir='column' gap='2rem'>
        <Header2>relax & enjoy</Header2>
        <Video title='1' src='https://www.youtube.com/embed/GPHRPHTrRW8' />
        <Video title='2' src='https://www.youtube.com/embed/jt_SIPsvtAw' />
      </FlexContainer>
    </section>
  );
}

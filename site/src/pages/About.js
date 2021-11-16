import React from 'react';

import {
  FlexContainer,
  Gallery,
  Header2,
  Paragraph,
  Blur,
  SectionContainer,
} from '../components';

export default function About() {
  return (
    <SectionContainer id='about'>
      <Blur top='-5%' />
      <Blur color='tertiary' bottom='-2%' right='0px' />
      <FlexContainer dir='column' gap='4rem'>
        <FlexContainer dir='column' gap='1rem'>
          <Header2>about</Header2>
          <Paragraph textAlign='center'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            doloribus qui consequatur rem libero consequuntur voluptas quibusdam
            nostrum itaque hic aliquam eius sit non, quaerat cum, nobis repellat
            ipsam reprehenderit. Similique aliquam quasi dolorum ducimus aut
            totam voluptatibus necessitatibus. Labore eos esse iste facere
            voluptatibus animi vel nesciunt aut tempora, temporibus officiis
            porro nulla?
          </Paragraph>
        </FlexContainer>
        <Gallery />
      </FlexContainer>
    </SectionContainer>
  );
}

import React from 'react';
import {
  FlexContainer,
  Gallery,
  Header2,
  Paragraph,
  Blur,
} from '../components';

export default function About() {
  return (
    <section style={{ position: 'relative' }}>
      <Blur top='-5%' />
      <Blur color='secondary' bottom='10%' right='0px' />
      <FlexContainer dir='column' padding='1rem' gap='2rem'>
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
    </section>
  );
}

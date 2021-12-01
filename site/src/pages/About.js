import React from 'react';
import styled from 'styled-components';
import {
  FlexContainer,
  Gallery,
  Header2,
  Paragraph,
  Blur,
  sectionMixin,
} from '../components';

const SectionContainer = styled.section`
  ${sectionMixin};
  background-color: ${({ theme }) => theme.clrPrimary};
  background-image: ${({ theme }) =>
    `linear-gradient(to bottom right , ${theme.clrDark} 80%, ${theme.clrPrimary} 80% 100% )`};
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: 300% 100%;
  height: 100vh;
`;
const Flex = styled(FlexContainer)`
  height: 100%;
  & > div:first-child {
    align-self: flex-start;
    flex: 2;
    margin-inline-start: -10vw;
    z-index: ${({ theme }) => theme.zIndexTop};
  }
  & > div:nth-child(2) {
    align-self: flex-end;
    flex: 2.5;
  }
`;
export default function About() {
  return (
    <SectionContainer id='about' bgImage='gradientAbout'>
      <Blur top='-5%' />
      <Blur color='tertiary' bottom='-2%' right='0px' />
      <Flex dir='column' gap='1rem' bpLgRow reverse>
        <FlexContainer dir='column' gap='1rem' bpLgCol>
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
      </Flex>
    </SectionContainer>
  );
}

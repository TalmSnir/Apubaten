import React, { useRef } from 'react';
import {
  SocialMenu,
  Image,
  Badges,
  Header,
  FlexContainer,
} from '../components';
import HeroImage from '../assets/image3.jpeg';
import AlbumCover from '../assets/albumImage.png';
import styled from 'styled-components';
import { useIntersection } from '../hooks';
const Container = styled.main`
  height: 100vh;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.clrDark};
  background-blend-mode: overlay;

  display: grid;
  padding: 0 1rem 1rem;
  grid-template: auto 1fr 1fr 1fr / repeat(3, 1fr);
  align-items: center;
  position: relative;
  @media screen and (min-width: ${({ theme }) => theme.bpMd}) {
    padding: ${({ theme }) => `${theme.spacingSm} ${theme.spacingMd}`};
  }
  header {
    grid-row: 1;
    grid-column: 1/-1;
  }
  .landing-socials {
    grid-row: 2/4;
    grid-column: 1;
    justify-self: start;
  }
  @media screen and (min-width: ${({ theme }) => theme.bpSm}) {
    .landing-socials {
      grid-row: 3/4;
      gap: ${({ theme }) => theme.spacingSm};
    }
  }
`;
const Banner = styled.div`
  font-size: clamp(2.5rem, 8vw, 10rem);
  opacity: 0.3;
  color: ${({ theme }) => theme.clrPrimary};
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.fwLg};
  position: absolute;
  inline-size: 100%;
  transform: rotate(-20deg);
  left: 10%;
`;
const AlbumMusicContainer = styled(FlexContainer)`
  grid-row: 3/-1;
  grid-column: 2;
  @media screen and (min-width: ${({ theme }) => theme.bpSm}) {
    & > .badges {
      flex-direction: row;
    }
  }
  @media screen and (min-width: ${({ theme }) => theme.bpLg}) {
    grid-column: 3;
  }
  & > img {
    box-shadow: 8px 8px 0 ${({ theme }) => theme.clrPrimary},
      16px 16px 0 ${({ theme }) => theme.clrTertiary},
      -4px -4px 0 ${({ theme }) => theme.clrSecondary};
  }
  & > .badges {
    grid-row: 4;
    grid-column: 1/-1;
    margin-block-start: ${({ theme }) => theme.spacingMd};

    a {
      filter: drop-shadow(0 0 6px ${({ theme }) => theme.clrPrimary});
    }
  }
`;

export default function Landing() {
  const ref = useRef(null);
  const isIntersecting = useIntersection(ref, {
    threshold: 0,
    rootMargin: '-70px 0px 0px 0px',
  });
  return (
    <Container id='home'>
      <Header scrolled={isIntersecting} />
      <div
        ref={ref}
        style={{ gridRow: 2, gridColumn: 1, visibility: 'hidden' }}></div>
      <SocialMenu
        className='landing-socials'
        direction='column'
        iconSize='32px'
        ai='flex-start'
      />
      <AlbumMusicContainer dir='column'>
        <Image
          src={AlbumCover}
          maxInlineSize='400px'
          inlineSize='60vw'
          ratio='1/1'
        />

        <Badges className='badges' dir='column' />
      </AlbumMusicContainer>
      <Banner>
        it's not the time
        <br /> to fall in love
      </Banner>
    </Container>
  );
}

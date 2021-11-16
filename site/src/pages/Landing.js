import React from 'react';
import { Logo, SocialMenu, Image, Badges, Nav } from '../components';
import HeroImage from '../assets/image3.jpeg';
import AlbumCover from '../assets/albumImage.png';
import styled from 'styled-components';

const Container = styled.main`
  height: 100vh;
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.clrDark};
  background-blend-mode: overlay;

  display: grid;
  padding: 1rem;
  grid-template: auto 1fr 1fr 1fr / repeat(3, 1fr);
  align-items: center;
  position: relative;
  nav {
    grid-row: 1;
    grid-column: 3;
    justify-self: end;
    svg {
      fill: ${({ theme }) => theme.clrLight};
      block-size: 24px;
      inline-size: 24px;
    }
  }
  .landing-socials {
    grid-row: 2/4;
    grid-column: 1;
    justify-self: start;
  }
  .logo {
    color: white;
    grid-row: 1;
    grid-column: 1;
  }
  .badges {
    grid-row: 4;
    grid-column: 1/-1;
    margin-block-start: ${({ theme }) => theme.spacingMd};
    a {
      filter: drop-shadow(0 0 6px ${({ theme }) => theme.clrPrimary});
    }
    & > svg {
      inline-size: 180px;
      block-size: 60px;
    }
  }

  img {
    grid-row: 3;
    grid-column: 1/-1;
    justify-self: center;
    box-shadow: 8px 8px 0 ${({ theme }) => theme.clrPrimary},
      16px 16px 0 ${({ theme }) => theme.clrTertiary},
      -4px -4px 0 ${({ theme }) => theme.clrSecondary};
  }
`;
const Banner = styled.div`
  font-size: 2.5rem;
  opacity: 0.3;
  color: ${({ theme }) => theme.clrPrimary};
  text-transform: capitalize;
  font-weight: ${({ theme }) => theme.fwLg};
  position: absolute;
  inline-size: 100%;
  transform: rotate(-20deg);
  top: 28%;
  left: 10%;
  z-index: ${({ theme }) => theme.zIndexTop};
`;
export default function Landing() {
  return (
    <Container>
      <Nav />
      <Logo className='logo'>Apubaten</Logo>
      <SocialMenu
        className='landing-socials'
        direction='column'
        iconSize='32px'
        ai='flex-start'
      />

      <Image src={AlbumCover} inlineSize='80%' blockSize='100%' />
      <Badges className='badges' dir='column' />
      <Banner>
        it's not the time
        <br /> to fall in love
      </Banner>
    </Container>
  );
}

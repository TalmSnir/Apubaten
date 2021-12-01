import React from 'react';
import { SocialMenu, Logo, Badges, Soundwave } from '../components';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  gap: ${({ theme }) => theme.spacingMd};
  padding: ${({ theme }) => `${theme.spacingSm} ${theme.spacingXs}`};
  background-color: ${({ theme }) => theme.clrTertiary};
  background-image: ${props =>
    ` linear-gradient(to bottom left, ${props.theme.clrTertiary}  33%, ${props.theme.clrPrimary}   33% 100% )`};
  background-repeat: no-repeat;
  & > * {
    z-index: ${({ theme }) => theme.zIndexTop2};
  }
  background-position: right top;
  background-size: 200vw 100%;
  &::before {
    content: '';
    position: absolute;
    inset: 3vmin;
    background-color: ${({ theme }) => theme.clrDark};
    backdrop-filter: blur(10px);
    mix-blend-mode: screen;
  }
  & > .badges > svg {
    inline-size: 180px;
    block-size: 60px;
  }
  & > div:last-child {
    position: absolute;
    z-index: ${({ theme }) => theme.zIndexTop};
    top: 40%;
  }

  @media screen and (min-width: ${({ theme }) => theme.bpLg}) {
    flex-direction: row;
    justify-content: space-between;
    padding: ${({ theme }) => `${theme.spacingMd} ${theme.spacingMd}`};
    & > div:last-child {
      top: 50%;
      transform: translateY(-50%);
      right: ${({ theme }) => theme.spacingSm};
    }
    & > div:nth-child(2) {
      gap: ${({ theme }) => theme.spacingMd};
    }
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Logo>Apubaten</Logo>
      <SocialMenu iconSize='32px' footer />
      <Badges dir='column' className='badges' />
      <Soundwave />
    </FooterContainer>
  );
}

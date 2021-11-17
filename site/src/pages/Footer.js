import React from 'react';
import { SocialMenu, Logo, Badges, Soundwave } from '../components';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: ${({ theme }) => theme.zIndexBase};
  gap: ${({ theme }) => theme.spacingMd};
  padding: ${({ theme }) => `${theme.spacingSm} ${theme.spacingXs}`};
  background-color: ${({ theme }) => theme.clrTertiary};
  & > .badges > svg {
    inline-size: 180px;
    block-size: 60px;
  }
  & > div:last-child {
    position: absolute;
    z-index: ${({ theme }) => theme.zIndexBehind};
    top: 40%;
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

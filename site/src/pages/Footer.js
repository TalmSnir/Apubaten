import React from 'react';
import { SocialMenu, Logo, Badges } from '../components';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacingSm};
  padding: ${({ theme }) => theme.spacingXs};
  background-image: ${({ theme }) =>
    `linear-gradient(20deg,${theme.clrPrimary},${theme.clrSecondary})`};

  & > .badges > svg {
    inline-size: 180px;
    block-size: 60px;
  }
`;
export default function Footer() {
  return (
    <FooterContainer>
      <Logo light>Apubaten</Logo>
      <SocialMenu iconSize='32px' footer />
      <Badges dir='column' className='badges' />
    </FooterContainer>
  );
}

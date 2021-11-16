import React from 'react';

import styled, { keyframes } from 'styled-components';
import { Badges } from '.';

const Open = keyframes`
to{
    opacity:1;
    visibility:visible;
}
`;
const Close = keyframes`
to{
    opacity:0;
    visibility:hidden;
}
`;
const Navigation = styled.nav`
  position: fixed;
  inset: 0;
  height: 100%;
  padding-block-start: ${({ theme }) => theme.spacingSm};
  background-color: ${({ theme }) => theme.clrDark};
  z-index: ${({ theme }) => theme.zIndexNav};
  visibility: hidden;
  opacity: 0;
  animation: ${props => (props.show ? Open : Close)} 0.2s ease-in-out forwards;
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  height: 100vh;
`;
const NavListItem = styled.li`
  padding: 0.5em;
  width: 100%;
  text-align: center;
  font-size: ${({ theme }) => theme.fsMd};
  &:hover a {
    color: ${({ theme }) => theme.clrSecondary};
  }
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.clrLight};
    text-transform: capitalize;
    transition: color 0.2s ease-in-out;
  }
`;

const links = ['home', 'about', 'upcoming shows', 'listen'];
export default function Nav({ show, onClick }) {
  return (
    <Navigation show={show}>
      <NavList>
        {links.map(link => {
          return (
            <NavListItem key={link}>
              <a href={`#${link.replace(' ', '-')}`} onClick={onClick}>
                {link}
              </a>
            </NavListItem>
          );
        })}
        <NavListItem>
          <Badges dir='column' />
        </NavListItem>
      </NavList>
    </Navigation>
  );
}

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
  padding-block-start: ${({ theme }) => theme.spacingLg};
  background-color: ${({ theme }) => theme.clrDark};
  z-index: ${({ theme }) => theme.zIndexNav};
  visibility: hidden;
  opacity: 0;
  animation: ${props => (props.show ? Open : Close)} 0.2s ease-in-out forwards;

  @media screen and (min-width: ${({ theme }) => theme.bpLg}) {
    position: relative;
    visibility: visible;
    opacity: 1;
    animation: unset;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: unset;
    ul {
      flex-direction: row;
      gap: ${({ theme }) => theme.spacingSm};
      li {
        width: unset;
        font-size: ${({ theme }) => `calc(${theme.fsSm}*${theme.mdFc})`};
      }
      li:last-child {
        display: none;
      }
    }
  }
`;
const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
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

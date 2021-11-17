import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Nav, Logo } from '.';
import { FaBars, FaTimes } from 'react-icons/fa';

const HeaderContainer = styled.header`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndexHeader};
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${({ theme }) => theme.spacingXs};
  background-color: ${props => (props.scrolled ? '' : props.theme.clrDark)};
  transition: background-color 0.1s ease-in;
`;
const MenuButton = styled.button`
  appearance: none;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndexHeader};
  & > * {
    inline-size: 40px;
    block-size: 40px;
    fill: ${({ theme }) => theme.clrLight};
    z-index: ${({ theme }) => theme.zIndexHeader};
  }
`;
export default function Header({ scrolled }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(prev => !prev);
  };
  useEffect(() => {
    document.body.style.overflowY = showMenu ? 'hidden' : 'visible';
  }, [showMenu]);
  return (
    <HeaderContainer scrolled={scrolled}>
      <Logo className='logo'>Apubaten</Logo>
      <MenuButton onClick={handleClick}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </MenuButton>
      <Nav show={showMenu} onClick={handleClick} />
    </HeaderContainer>
  );
}

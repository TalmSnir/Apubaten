import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Nav, Logo } from '.';
import { FaBars, FaTimes } from 'react-icons/fa';
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(prev => !prev);
  };
  useEffect(() => {
    document.body.style.overflowY = showMenu ? 'hidden' : 'visible';
  }, [showMenu]);
  return (
    <HeaderContainer>
      <Logo className='logo'>Apubaten</Logo>
      <MenuButton onClick={handleClick}>
        {showMenu ? <FaTimes /> : <FaBars />}
      </MenuButton>
      <Nav show={showMenu} onClick={handleClick} />
    </HeaderContainer>
  );
}

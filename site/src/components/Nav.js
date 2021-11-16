import React from 'react';
import { FaBars } from 'react-icons/fa';
import styled from 'styled-components';

const MenuButton = styled.button`
  appearance: none;
  border: 0;
  background-color: transparent;
  cursor: pointer;
  & > svg {
    inline-size: 32px;
    block-size: 32px;
    fill: red;
  }
`;
export default function Nav() {
  return (
    <nav>
      <MenuButton>
        <FaBars />
      </MenuButton>
      <ul style={{ display: 'none' }}>
        <li>
          <a href='#fds'>home</a>
        </li>
        <li>
          <a href='#fsd'>about</a>
        </li>
        <li>
          <a href='#fsd'>shows</a>
        </li>
        <li>
          <a href='#fsd'>listen</a>
        </li>
      </ul>
    </nav>
  );
}

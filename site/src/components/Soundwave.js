import React from 'react';
import styled, { keyframes } from 'styled-components';

const Waves = keyframes`
10% { 
    transform: scale(1);
 }
 80%{
    transform: scale(0);
  } 
  100% { transform: scale(0);
   }
`;
const SoundwaveContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
const Line = styled.span`
  height: ${props => `calc(10px * ${props.number})`};
  transform: scale(0);
  width: 4px;
  border-radius: 3rem;
  background: ${({ theme }) => theme.clrLight};
  animation: ${Waves} ${props => ` 0.9s infinite calc(${props.number}* 0.02s)`};
`;

export default function Soundwave() {
  return (
    <SoundwaveContainer>
      <Line number={22} />
      <Line number={20} />
      <Line number={18} />
      <Line number={16} />
      <Line number={14} />
      <Line number={12} />
      <Line number={10} />
      <Line number={8} />
      <Line number={6} />
      <Line number={4} />
      <Line number={6} />
      <Line number={8} />
      <Line number={10} />
      <Line number={12} />
      <Line number={14} />
      <Line number={16} />
      <Line number={18} />
      <Line number={20} />
      <Line number={22} />
    </SoundwaveContainer>
  );
}

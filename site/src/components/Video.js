import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe`
  border-width: 4px;
  inline-size: 80vw;
  max-inline-size: 800px;
  aspect-ratio: 16/9;
  user-select: none;
  &:first-of-type {
    border-image: ${({ theme }) =>
      `linear-gradient(${theme.clrPrimary},${theme.clrTertiary}) 30`};
  }
  &:nth-of-type(2) {
    border-image: ${({ theme }) =>
      `linear-gradient(${theme.clrTertiary}, ${theme.clrPrimary}) 30`};
  }
`;
export default function Video({ src, title }) {
  return (
    <Iframe
      src={src}
      title={title}
      frameBorder='0'
      allowFullScreen
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'></Iframe>
  );
}

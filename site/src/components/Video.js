import React from 'react';
import styled from 'styled-components';

const Iframe = styled.iframe``;
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

import React from 'react';
import styled from 'styled-components';
import { FlexContainer, StyledLink } from '.';
import { ReactComponent as AppleMusicBadge } from '../assets/appleMusicBadge.svg';
import SpotifyBadge from '../assets/spotifyBadge.svg';

const Link = styled(StyledLink)`
  & > * {
    inline-size: 220px;
  }
`;
export default function Badges({ className, dir }) {
  return (
    <FlexContainer gap='1rem' className={className} dir={dir}>
      <Link href='https://open.spotify.com/artist/0GMJNhdnYVH4CuPFMRaK6o?si=E8_LFml2Sjy_sN70NYxT-Q'>
        <img src={SpotifyBadge} alt='' />
      </Link>
      <Link href='https://music.apple.com/us/artist/apubaten/1592109434'>
        <AppleMusicBadge />
      </Link>
    </FlexContainer>
  );
}

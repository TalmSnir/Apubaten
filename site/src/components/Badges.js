import React from 'react';
import { FlexContainer, StyledLink } from '.';
import { ReactComponent as AppleMusicBadge } from '../assets/appleMusicBadge.svg';
import { ReactComponent as SpotifyBadge } from '../assets/spotifyBadge.svg';

export default function Badges({ className, dir }) {
  return (
    <FlexContainer gap='1rem' className={className} dir={dir}>
      <StyledLink href='https://music.apple.com/us/artist/apubaten/1592109434'>
        <AppleMusicBadge />
      </StyledLink>
      <StyledLink href='https://open.spotify.com/artist/0GMJNhdnYVH4CuPFMRaK6o?si=E8_LFml2Sjy_sN70NYxT-Q'>
        <SpotifyBadge />
      </StyledLink>
    </FlexContainer>
  );
}

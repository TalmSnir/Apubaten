import { FlexContainer, StyledLink } from '.';
import styled from 'styled-components';
import { socialLinks } from '../data';

import {
  FaYoutube,
  FaInstagram,
  FaSpotify,
  FaFacebook,
  FaMusic,
} from 'react-icons/fa';

const IconContainer = styled(FlexContainer)`
  & > svg {
    inline-size: ${props => props.size || '16px'};
    block-size: ${props => props.size || '16px'};
    fill: ${props =>
      props.footer ? props.theme.clrDark : props.theme.clrLight};
    filter: ${props => (props.footer ? '' : 'brightness(50%)')};
  }
  a:hover {
    filter: invert(180deg);
  }
`;
export default function SocialMenu({
  iconSize,
  direction,
  footer,
  className,
  ai,
}) {
  return (
    <FlexContainer dir={direction} gap='1.5rem' className={className} ai={ai}>
      {socialLinks.map(link => {
        const iconName = {
          facebook: FaFacebook,
          instagram: FaInstagram,
          youtube: FaYoutube,
          spotify: FaSpotify,
          appleMusic: FaMusic,
        };
        const Icon = iconName[link.name];

        return (
          <StyledLink href={link.url} key={link.name}>
            <IconContainer size={iconSize} footer={footer}>
              <Icon />
            </IconContainer>
          </StyledLink>
        );
      })}
    </FlexContainer>
  );
}

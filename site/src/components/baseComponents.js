import styled, { css } from 'styled-components';

export const StyledLink = styled.a.attrs(props => {
  return { target: '_blank', rel: 'no-referrer' };
})`
  text-decoration: none;
  color: inherit;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Image = styled.img`
  max-width: 100%;
  /* max-height: 100%; */
  inline-size: ${props => (props.inlineSize ? props.inlineSize : '')};
  block-size: ${props => (props.blockSize ? props.blockSize : '')};
  object-fit: ${props => props.objectFit || 'cover'};
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => props.dir || 'row'};
  align-items: ${props => props.ai || 'center'};
  justify-content: ${props => props.jc || 'center'};
  gap: ${props => props.gap || ''};
  padding: ${props => props.padding || ''};
  margin: ${props => props.margin || ''};
  inline-size: ${props => props.inlineSize || ''};
  flex: ${props => props.flexSelf || ''};
  & > * {
    flex: ${props => props.flexChildren || ''};
  }
  /* ${({ bpSmCol }) => {
    if (bpSmCol)
      return css`
        @media screen and (max-width: ${({ theme }) => theme.bpSm}) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `;
  }} */
  /* ${({ bpMdCol }) => {
    if (bpMdCol)
      return css`
        @media screen and (max-width: ${({ theme }) => theme.bpMd}) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `;
  }}  */
  /* ${({ bpLgCol }) => {
    if (bpLgCol)
      return css`
        @media screen and (max-width: ${({ theme }) => theme.bpLg}) {
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
        }
      `;
  }} */
`;

export const Header1 = styled.h1`
  font-size: ${({ theme }) => theme.fsHeadingH1};
  /* @media screen and (min-width: ${({ theme }) => theme.bpSm}) {
    font-size: ${({ theme }) => `calc(${theme.fsHeadingH1}*${theme.smFc})`};
  }
  @media screen and (min-width: ${({ theme }) => theme.bpMd}) {
    font-size: ${({ theme }) => `calc(${theme.fsHeadingH1}*${theme.mdFc})`};
  } */
`;
export const Header2 = styled.h2`
  font-size: ${({ theme }) => theme.fsMd};
  color: ${({ theme }) => theme.clrLight};
  font-weight: ${({ theme }) => theme.fwMd};
  text-transform: capitalize;
  transform: ${props => (props.rotate ? `rotate(${props.rotate}deg)` : '')};
  /* @media screen and (min-width: ${({ theme }) => theme.bpSm}) {
    font-size: ${({ theme }) => `calc(${theme.fsHeadingH2}*${theme.smFc})`};
  }
  @media screen and (min-width: ${({ theme }) => theme.bpMd}) {
    font-size: ${({ theme }) => `calc(${theme.fsHeadingH2}*${theme.mdFc})`};
  } */
`;
export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fsBodyB1};
  max-width: 600px;
  line-height: 1.6em;
  color: ${({ theme }) => theme.clrLight};
  text-align: ${props => (props.textAlign ? props.textAlign : '')};
  /* @media screen and (min-width: ${({ theme }) => theme.bpMd}) {
    font-size: ${({ theme }) => `calc(${theme.fsBodyB1}*${theme.xsFc})`};
  } */
`;

export const ButtonLink = styled(StyledLink)`
  border-radius: ${({ theme }) => theme.brPill};
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.clrPrimary};
  color: ${({ theme }) => theme.clrLight};
  //adding vertical align to text
  padding: ${({ theme }) => `${theme.spacingXxs} ${theme.spacingSm}`};
  inline-size: ${props => (props.fullWidth ? '100%' : '')};
  text-transform: capitalize;
  cursor: pointer;
`;

export const SectionContainer = styled.section`
  margin: 0 auto;
  max-inline-size: 1200px;
  padding: ${({ theme }) => `${theme.spacingSm} ${theme.spacingXs}`};
  margin: ${props => props.margin || ''};
  position: relative;
`;

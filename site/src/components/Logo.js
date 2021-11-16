import styled from 'styled-components';

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  filter: ${props => (props.light ? 'invert(180deg)' : '')};
`;
export default Logo;

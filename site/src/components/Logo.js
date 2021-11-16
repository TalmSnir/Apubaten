import styled from 'styled-components';

const Logo = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.clrLight};
  z-index: ${({ theme }) => theme.zIndexHeader};
`;
export default Logo;

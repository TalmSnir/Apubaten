import styled from 'styled-components';

const Blur = styled.div`
  inline-size: ${props => props.size || '100px'};
  block-size: ${props => props.size || '100px'};
  filter: blur(30px);

  border-radius: ${({ theme }) => theme.brCircle};
  position: absolute;
  z-index: ${({ theme }) => theme.zIndexModal};
  top: ${props => (props.top ? props.top : '')};
  left: ${props => (props.left ? props.left : '')};
  bottom: ${props => (props.bottom ? props.bottom : '')};
  right: ${props => (props.right ? props.right : '')};

  background-color: ${props => {
    switch (props.color) {
      case 'secondary':
        return props.theme.clrSecondary;
      case 'tertiary':
        return props.theme.clrTertiary;
      default:
        return props.theme.clrPrimary;
    }
  }};
`;

export default Blur;

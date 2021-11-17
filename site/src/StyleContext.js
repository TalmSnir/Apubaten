import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
    overscroll-behavior: none;
    overflow-x:hidden;
    height:100%;
    
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => ` ${theme.clrDark} ${theme.clrLight} `};
    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-track {
      background:${({ theme }) => theme.clrDark};
      
      
    }
    &::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.clrLight};
      border-radius:3rem;
    }
  }
  body {
    min-height: 100vh;
    height:100%;
    font-family: 'Segoe UI', Arial, sans-serif;
    overflow-x:hidden;
    overscroll-behavior: none;
    background-color: ${({ theme }) => theme.clrDark};
  }
  #root{
    isolation:isolate;
    overscroll-behavior: none;
    height:100%;
  }
`;

const theme = {
  clrPrimary: '#68ACC1',
  clrSecondary: '#FDA863',
  clrTertiary: '#B95D65',
  clrDark: '#17171F',
  clrLight: '#FFFFFF',

  fsLg: '3rem',
  fsMd: '2rem',
  fsSm: '1rem',
  fsXs: '0.8rem',

  fwXl: '800',
  fwLg: '700',
  fwMd: '500',
  fwSm: '400',
  fwXs: '300',

  brPill: '3rem',
  brRound: '0.5rem',
  brCircle: '50%',

  cardShadow:
    '0px 4px 6px -2px hsla(0, 0%, 0%, 0.05), 0px 10px 15px -3px hsla(0, 0%, 0%, 0.1)',

  spacingXl: '8rem',
  spacingLg: '6rem',
  spacingMd: '4rem',
  spacingSm: '2rem',
  spacingXs: '1rem',
  spacingXxs: '0.5rem',

  zIndexHeader: '1300',
  zIndexNav: '1200',
  zIndexPanel: '1100',
  zIndexModal: '1000',
  zIndexTop: '800',
  zIndexTab: '700',

  bpSm: '375px',
  bpMd: '700px',
  bpLg: '1000px',
  bpXl: '1200px',
  bpXxl: '1440px',

  xsFc: '1.1',
  smFc: '1.2',
  mdFc: '1.5',
  lgFc: '1.7',
};
export default function StyleContext({ children }) {
  return (
    <ThemeProvider theme={theme}>
      {' '}
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
}

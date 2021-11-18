import { useEffect } from 'react';
import { Landing, Shows, About, Footer, Videos } from './pages';
import StyleContext from './StyleContext';

function App() {
  useEffect(() => {
    window.scrollTo(0, 1);
    return () => {};
  }, []);
  return (
    <StyleContext>
      <Landing />
      <About />
      <Shows />
      <Videos />
      <Footer />
    </StyleContext>
  );
}

export default App;

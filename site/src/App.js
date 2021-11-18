import React, { useEffect } from 'react';
import { Landing, Shows, About, Footer, Videos } from './pages';
import StyleContext from './StyleContext';

function App() {
  useEffect(() => {
    document.body.scrollTo(0, 400);
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

import { Landing, Shows, About, Footer, Videos } from './pages';
import StyleContext from './StyleContext';
function App() {
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

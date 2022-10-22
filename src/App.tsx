import { ThemeProvider } from '@emotion/react';
import { BrowserRouter, Link } from 'react-router-dom';
import Router, { URL_PATHS } from './pages/Router';
import { theme } from './theme';

function App() {
  const { HOME, LOGIN, NAME_CARDS } = URL_PATHS;
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="App">
          <header>Thai Programmers in USA</header>
          <nav>
            <Link to={HOME}>Home</Link>
            <br />
            <Link to={LOGIN}>Login</Link>
            <br />
            <Link to={NAME_CARDS}>Name Cards</Link>
          </nav>
          <a href="#">See Our Name Cards</a>
        </div>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

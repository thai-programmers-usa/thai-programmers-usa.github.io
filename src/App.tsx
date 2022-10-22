import { BrowserRouter, Link } from 'react-router-dom';
import Router, { URL_PATHS } from './pages/Router';

function App() {
  const { HOME, LOGIN, NAME_CARDS } = URL_PATHS;
  return (
    <BrowserRouter>
      <div className="App">
        <header>Thai Programmers in USA</header>
        <nav>
          <Link to={HOME}>Home</Link>
          <br />
          <Link to={LOGIN}>Login</Link>
          <br />
          <Link to={NAME_CARDS}>Name Cards</Link>
        </nav>
      </div>
      <Router />
    </BrowserRouter>
  );
}

export default App;

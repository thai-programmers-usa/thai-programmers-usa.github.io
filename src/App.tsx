import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NameCards from './pages/NameCards';

const URL_PATHS = {
  HOME: '/',
  LOGIN: 'login',
  NAME_CARDS: 'name-cards',
};

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
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={NAME_CARDS} element={<NameCards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

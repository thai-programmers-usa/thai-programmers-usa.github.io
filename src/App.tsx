import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import NameCards from './pages/NameCards';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>Thai Programmers in USA</header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="name-cards">Login</Link>
          <Link to="name-cards">Name Cards</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/" element={<NameCards />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

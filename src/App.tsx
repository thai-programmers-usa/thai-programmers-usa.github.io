import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';
import Router from './pages/Router';
import { ThemeProvider } from '@mui/styles';

import { theme } from './theme';

function App() {

  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar />
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

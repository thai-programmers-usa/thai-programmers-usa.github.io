import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Link } from 'react-router-dom';
import NavBar from './components/NavBar';
import Router, { URL_PATHS } from './pages/Router';
import { Container, Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

import { theme } from './theme';

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    marginTop: theme.spacing(3),
  },
}));

function App() {
  const { HOME, LOGIN, NAME_CARDS } = URL_PATHS;
  const classes = useStyles();

  return (
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <NavBar />
        <Container maxWidth={false} className={classes.container}>
          <header>Thai Programmers in USA</header>
          <nav>
            <Link to={HOME}>Home</Link>
            <br />
            <Link to={LOGIN}>Login</Link>
            <br />
            <Link to={NAME_CARDS}>Name Cards</Link>
          </nav>
          <a href="#">See Our Name Cards</a>
        </Container>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

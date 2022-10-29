import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import NameCards from '../NameCards';

export const URL_PATHS = [
  {
    label: 'HOME',
    path: '/',
    page: <Home />,
  },
  {
    label: 'CARDS',
    path: 'name-cards',
    page: <NameCards />,
  },
  {
    label: 'LOGIN',
    path: 'login',
    page: <Login />,
  },
];

const Router = () => {
  return (
    <Routes>
      {URL_PATHS.map(({ label, path, page }) => (
        <Route key={label} path={path} element={page} />
      ))}
    </Routes>
  );
};

export default Router;

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
    label: 'SING IN',
    path: 'signin',
    page: <Login />,
  },
  {
    label: 'CARDS',
    path: 'name-cards',
    page: <NameCards />,
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

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import NameCards from '../NameCards';

export const URL_PATHS = {
  HOME: '/',
  LOGIN: 'login',
  NAME_CARDS: 'name-cards',
};

const Router = () => {
  const { HOME, LOGIN, NAME_CARDS } = URL_PATHS;
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={LOGIN} element={<Login />} />
      <Route path={NAME_CARDS} element={<NameCards />} />
    </Routes>
  );
};

export default Router;

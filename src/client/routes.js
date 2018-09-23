import React from 'react';
import Home from './pages/home';
import UsersList from './pages/users-list';
import AdminsList from './pages/admins-list';
import NotFound from './pages/not-found';
import App from './app';

export default [{
  ...App,
  routes: [{
    ...Home,
    path: '/',
    exact: true
  }, {
    ...UsersList,
    path: '/users',
  }, {
    ...AdminsList,
    path: '/admins',
  }, {
    ...NotFound
  }]
}];

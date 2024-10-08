import React from 'react';
import { Loading } from '@/components';
import loadable from '../utils/loadable';

// Login Page
export const Login = loadable(() => import('./Login'), {
  fallback: <Loading />,
});
// Dashboard Page
export const AdminDashboard = loadable(() => import('./AdminDashboard'), {
  fallback: <Loading />,
});

//User Page
export const Users = loadable(() => import('./Users'), {
  fallback: <Loading />,
});
//User Page
export const UserDetails = loadable(() => import('./UserDetails'), {
  fallback: <Loading />,
});

// Static Pages
export const NotFound = loadable(() => import('./NotFound'), {
  fallback: <Loading />,
});

import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Layout from '../Layout/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
    ],
  },
]);

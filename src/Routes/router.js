import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import HeadingAbout from '../components/HeadingAbout';
import Layout from '../Layout/Layout';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <>
            <HeadingAbout text="Hey, I’m Eduardo Arakaki and I love building beautiful websites" />
            <App />,
          </>
        ),
      },
    ],
  },
]);

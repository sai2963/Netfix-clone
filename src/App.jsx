import React from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Browser from './components/Browser';
import Signup from './components/Signup';
import Header from './components/Header';
import './index.css';

const AppLayout = () => {
  return (
    <div>
      
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Login />
      },
      {
        path: '/browse',
        element: <Browser />
      },
      {
        path: '/signup',
        element:<Signup/>
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={appRouter} />;
};

export default App;

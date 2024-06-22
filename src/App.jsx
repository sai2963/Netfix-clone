import React, { useEffect } from 'react';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './components/Login';
import Browser from './components/Browser';
import Signup from './components/Signup';
//import Header from './components/Header';
import './index.css';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Utils/Firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from './Utils/UserSlice';

const AppLayout = () => {
  const dispatch=useDispatch();
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {

        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
        
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
       
      }
    });
  },[])
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

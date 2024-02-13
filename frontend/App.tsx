import {
  SignedInOrRedirect,
  SignedOut,
  SignedOutOrRedirect,
  Provider,
} from '@gadgetinc/react';
import React from 'react';
import { Suspense, useEffect } from 'react';
import {
  Outlet,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  useNavigate,
  Link,
} from 'react-router-dom';
import './App.css';
import { api } from './api';
import Index from './routes/index';
import SignedInPage from './routes/signed-in';
import SignInPage from './routes/sign-in';
import SignUpPage from './routes/sign-up';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';

const App = () => {
  useEffect(() => {
    document.title = `Home - ${process.env.GADGET_PUBLIC_APP_SLUG} - Gadget`;
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <SignedOutOrRedirect>
              <Index />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path='signed-in'
          element={
            <SignedInOrRedirect>
              <SignedInPage />
            </SignedInOrRedirect>
          }
        />
        <Route
          path='sign-in'
          element={
            <SignedOutOrRedirect>
              <SignInPage />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path='sign-up'
          element={
            <SignedOutOrRedirect>
              <SignUpPage />
            </SignedOutOrRedirect>
          }
        />
      </Route>
    )
  );

  return (
    <Suspense fallback={<></>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};

const Layout = () => {
  const navigate = useNavigate();

  return (
    <Provider
      api={api}
      navigate={navigate}
      auth={window.gadgetConfig.authentication}
    >
      <div className='grid grid-cols-[auto_1fr] grid-rows-[auto_minmax(0,1fr)_auto] w-full h-full'>
        <div className='col-span-1 col-start-1 row-span-2 row-start 1'>
          <Sidebar />
        </div>
        <div className='col-span-1 col-start-2 row-span-1 row-start-1'>
          <Header />
        </div>
        <div className='col-span-1 col-start-2 row-span-1 row-start-2'>
          <Outlet />
        </div>
        <div className='col-span-2 col-start-1 row-span-1 row-start-3'>
          <Footer />
        </div>
      </div>
    </Provider>
  );
};

export default App;

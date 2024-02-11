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
import ResetPasswordPage from './routes/reset-password';
import VerifyEmailPage from './routes/verify-email';
import ChangePassword from './routes/change-password';
import ForgotPassword from './routes/forgot-password';
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
          path='change-password'
          element={
            <SignedInOrRedirect>
              <ChangePassword />
            </SignedInOrRedirect>
          }
        />
        <Route
          path='forgot-password'
          element={
            <SignedOutOrRedirect>
              <ForgotPassword />
            </SignedOutOrRedirect>
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
        <Route path='reset-password' element={<ResetPasswordPage />} />
        <Route path='verify-email' element={<VerifyEmailPage />} />
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
      <div className='flex flex-col bg-white w-full h-full text-themeBlack'>
        <div className='flex flex-grow '>
          <Sidebar />
          <div className='flex flex-col w-full h-full'>
            <Header />
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default App;

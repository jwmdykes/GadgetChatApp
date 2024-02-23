import {
  SignedInOrRedirect,
  SignedOutOrRedirect,
  Provider,
} from '@gadgetinc/react';
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
import JoinRoomPage from './routes/join-room';
import LeaveRoomPage from './routes/leave-room';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import { RoomContextProvider } from './contexts/RoomContext';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route
          index
          element={
            <SignedOutOrRedirect path='/signed-in'>
              <Index />
            </SignedOutOrRedirect>
          }
        />
        <Route
          path='/join-room/:roomid'
          element={
            <SignedInOrRedirect path='/'>
              <JoinRoomPage />
            </SignedInOrRedirect>
          }
        />
        <Route
          path='/leave-room/:roomid'
          element={
            <SignedInOrRedirect path='/'>
              <LeaveRoomPage />
            </SignedInOrRedirect>
          }
        />
        <Route
          path='signed-in'
          element={
            <SignedInOrRedirect path='/'>
              <SignedInPage />
            </SignedInOrRedirect>
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
    <RoomContextProvider>
      <Provider
        api={api}
        navigate={navigate}
        auth={window.gadgetConfig.authentication}
      >
        <div className='grid grid-cols-[auto_1fr] grid-rows-[auto_minmax(0,1fr)_auto] w-full h-full'>
          <div className='col-span-1 col-start-1 row-span-1 row-start-2 flex h-full'>
            <Sidebar />
          </div>
          <div className='col-span-2 col-start-1 row-span-1 row-start-1'>
            <Header />
          </div>
          <div className='col-span-1 col-start-2 row-span-1 row-start-2 flex h-full w-full'>
            <Outlet />
          </div>
          <div className='col-span-2 col-start-1 row-span-1 row-start-3'>
            <Footer />
          </div>
        </div>
      </Provider>
    </RoomContextProvider>
  );
};

export default App;

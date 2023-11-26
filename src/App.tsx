// import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomeLayout from './pages/HomeLayout';
import TestPage from './pages/TestPage';
import Chart from './pages/Chart';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <TestPage />,
      },
      {
        path: '/paper',
        index: true,
        element: <TestPage />,
      },
      {
        path: '/text',
        index: true,
        element: <TestPage />,
      },
      {
        path: '/chart',
        index: true,
        element: <Chart />,
      },
      {
        path: '/profile',
        index: true,
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

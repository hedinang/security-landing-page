/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../components/layouts/PublicLayout';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <PublicLayout>
        <Home />
      </PublicLayout>
    ),
  },
  {
    path: 'login',
    element: <Login />,
  },
]);
export default router;

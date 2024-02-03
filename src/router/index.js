/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../components/layouts/PublicLayout';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import AuthLayout from '../components/layouts/AuthLayout';
import { Applicant } from '../pages/Applicant/Applicant';

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
  {
    path: '/applicant',
    element: (
      <AuthLayout>
        <Applicant />
      </AuthLayout>
    ),
  },
]);
export default router;

/* eslint-disable react/react-in-jsx-scope */
import { createBrowserRouter } from 'react-router-dom';
import PublicLayout from '../components/layouts/PublicLayout';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';
import AuthLayout from '../components/layouts/AuthLayout';
import { ApplicantList } from '../pages/Applicant/ApplicantList';
import { ServiceList } from '../pages/Service/ServiceList';
import ServiceDetail from '../pages/Service/ServiceDetail';
import { RequirementList } from '../pages/Requirement/RequirementList';
import SocialNetwork from '../pages/SocialNetwork/SocialNetwork';

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
    // path: '/',
    element: <AuthLayout />,
    // errorElement: <ErrorElement />,
    children: [
      {
        path: '/applicant/list',
        element: (
          <ApplicantList />
        ),
      },
      {
        path: '/requirement/list',
        element: (
          <RequirementList />
        ),
      },
      {
        path: '/service/list',
        element: (
          <ServiceList />
        ),
      },
      {
        path: '/service/add',
        element: (
          <ServiceDetail different={{ type: 'add' }} />
        ),
      },
      {
        path: '/service/edit/:id',
        element: <ServiceDetail
          different={{ type: 'edit' }} />
      },
      {
        path: '/service/:id',
        element: <ServiceDetail
          different={{ type: 'view' }} />
      },

      {
        path: '/requirement/list',
        element: (
          <RequirementList />
        ),
      },
      {
        path: '/social',
        element: (
          <SocialNetwork different={{ type: 'view' }} />
        ),
      },
      {
        path: '/social/edit',
        element: (
          <SocialNetwork different={{ type: 'edit' }} />
        ),
      }
    ]
  },

]);
export default router;

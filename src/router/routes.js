import { ProtectedOne, ProtectedTwo, Home, NotFound, Unprotected } from '../containers';
import { AUTH_ONLY } from '../router/types';

const getRoutes = () => [
  {
    path: '/',
    exact: true,
    component: Home,
    loading: 'Custom loading for home page...',
    error: 'Custom error for home page',
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: '/protected-one',
    exact: true,
    component: ProtectedOne,
    meta: {
      [AUTH_ONLY]: true,
    },
  },
  {
    path: '/protected-two',
    exact: true,
    component: ProtectedTwo
  },
  {
    path: '/unprotected',
    exact: true,
    component: Unprotected
  },
  {
    path: '*',
    component: NotFound,
    ignoreGlobal: true,
  },
];

export default getRoutes;
import { UserAbout, UserCart, Home, Unprotected } from '../containers';
import NotFound from '../containers/NotFound';
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
    }
  },
  {
    path: '/user-about/:user?',
    exact: true,
    component: UserAbout,
    meta: {
      [AUTH_ONLY]: true,
    }
  },
  {
    path: '/user-cart',
    exact: true,
    component: UserCart,
    meta: {
      [AUTH_ONLY]: true,
    }
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
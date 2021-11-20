import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';
import { NotFound } from '../containers';
import requireLogin from './guards/requireLogin';
import getRoutes from './routes';


const Router = ({ children }) => {
  const routes = useMemo(() => getRoutes(), []);
  return (
    <BrowserRouter>
      <GuardProvider guards={[requireLogin]} loading="Loading..." error={NotFound}>
        <Route
          render={routeProps =>
            children(
              <Switch>
                {routes.map(({ component, error, exact, ignoreGlobal, loading, meta, path }, i) => (
                  <GuardedRoute
                    key={i}
                    component={component}
                    exact={exact}
                    error={error}
                    ignoreGlobal={ignoreGlobal}
                    loading={loading}
                    meta={meta}
                    path={path}
                  />
                ))}
              </Switch>,
              routeProps,
            )
          }
        />
      </GuardProvider>
    </BrowserRouter>
  );
};

Router.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Router;

import { useState } from 'react';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Link, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';

import { HomePage, UnprotectedPage, ProtectedPageOne,ProtectedPageTwo, NotFound, Loading } from '../../pages';
import LogIn from '../LogIn';

import './style.css';

const history = createBrowserHistory();

const App = () => { 
  const [isRegistered, setIsRegistered] = useState(false);
  // const isRegistered = false;

  console.log(isRegistered)
  const requireLogin = (to, from, next) => {
    console.log(isRegistered)
    if (to.meta.auth) {
      console.log(isRegistered)
      if (isRegistered) {
        next();
      }
      next.redirect('/');
    } else {
      next();
    }
  };

  return (
    <Router history={history}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid px-5">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-lg-5">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/protected-one">Protected page 1</Link>
                </li>
                {isRegistered && 
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/protected-two">Protected page 2</Link>
                  </li>
                }
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/unprotected">Unprotected page</Link>
              </li>
            </ul> 
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Log in
            </button>
          </div>
        </div>
      </nav>
      <LogIn logInFunc={() => setIsRegistered(true)} logOutFunc={() => setIsRegistered(false)}/>
      <GuardProvider guards={requireLogin} loading={Loading} error={NotFound}>
        <Switch>
          <GuardedRoute exact path="/" component={HomePage}/>
          <GuardedRoute path="/unprotected" component={UnprotectedPage} />
          <GuardedRoute path="/protected-one" exact component={ProtectedPageOne} meta={{auth: true}}/>
          <GuardedRoute path="/protected-two" exact component={ProtectedPageTwo} meta={{auth: true}}/>
        </Switch>
      </GuardProvider>
    </Router>
  );
}

export default App;
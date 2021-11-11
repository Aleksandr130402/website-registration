import { useState } from 'react';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { Link, Route, Switch } from 'react-router-dom';
import { GuardProvider, GuardedRoute } from 'react-router-guards';

import { HomePage, UnprotectedPage, ProtectedPageOne } from '../../pages';
import LogIn from '../LogIn';

import './style.css';

const history = createBrowserHistory();

const App = () => { 
  const [isRegistered, setIsRegistered] = useState(false);

  const requireLogin = (to, from, next) => {
    if (to.meta.auth) {
      console.log("auth true");
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
                  <Link className="nav-link active" aria-current="page" to="/protected-one">Protected page</Link>
                </li>
                {isRegistered && 
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/protected-two">Protected page</Link>
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
      <GuardProvider guards={[requireLogin]}>
        <Switch>
          <GuardedRoute exact path="/" component={HomePage}/>
          <GuardedRoute path="/unprotected" exact component={UnprotectedPage} meta={{auth: true}}/>
          <GuardedRoute path="/protected-one" exact component={ProtectedPageOne} meta={{auth: true}}/>
        </Switch>
      </GuardProvider>
    </Router>
  );
}

export default App;
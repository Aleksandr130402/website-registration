import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import GuardedRoute from '../GuardedRoute';

import { HomePage, UnprotectedPage, ProtectedPageOne, ProtectedPageTwo } from '../../pages';

import './style.css';
import LogIn from '../LogIn';

const App = () => { 
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <>
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
            {isRegistered && 
              <>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/protected-one">Protected page</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/protected-two">Protected page</Link>
                </li>
              </>
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
    <Switch>
      <Route exact path='/' component={HomePage}/>
      <GuardedRoute path='/protected-one' component={ProtectedPageOne} auth={isRegistered}/>
      <GuardedRoute path='/protected-two' component={ProtectedPageTwo} auth={isRegistered}/>
      <Route path='/unprotected' component={UnprotectedPage}/>
    </Switch>
    </>
  );
}

export default App;
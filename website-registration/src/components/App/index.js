import { useState } from 'react';
import { Link, Route, Switch, useHistory } from 'react-router-dom';

import GuardedRoute from '../GuardedRoute';
import { HomePage, UnprotectedPage, UserAbout, UserCart } from '../../pages';
import LogIn from '../LogIn';

import './style.css';


const App = () => { 
  const [isRegistered, setIsRegistered] = useState(false);
  const [user, setUser] = useState('');

  const history = useHistory();

  const logIn = () => {
    if(user !== '') {
      setIsRegistered(true);
      history.push(`/user-about/${user}`);
    }
  }

  const logOut = () => {
    setUser('');
    setIsRegistered(false);
  }

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
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={`/user-about/${user}`}>User about</Link>
              </li>
              {isRegistered && 
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/user-cart">Cart</Link>
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
      <LogIn 
        logInFunc={() => logIn()} 
        logOutFunc={() => logOut()}
        inputValue={user}
        handleInputChange={(e) => setUser(e.target.value)}
      />
      <Switch>
        <Route
          exact
          path='/'
          component={HomePage}
        />
        <GuardedRoute path='/user-about/:user?' component={UserAbout} auth={isRegistered}/>
        <GuardedRoute path='/user-cart' component={UserCart} auth={isRegistered}/>
        <Route path='/unprotected' component={UnprotectedPage}/>
      </Switch>
    </>
  );
}

export default App;
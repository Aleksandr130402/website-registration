import { useState } from 'react';
import PropTypes from 'prop-types';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {Box, Typography} from '@mui/material';
import {IconButton} from '@mui/material';

import { getIsLoggedIn } from '../../utils';
import Login from '../Login';
import NavLink from '../NavLink';

import './page.scss';


const Page = ({ children }) => {
  
  const isLoggedIn = getIsLoggedIn();
	const [open, setOpen] = useState(false);
  const [user, setUser] = useState('');

  return (
    <div className="page">
      <nav>
        <ul>
        <NavLink to="/">Home</NavLink>
        <NavLink to={`/user-about/${user}`}>Protected 1</NavLink>
        {
          isLoggedIn &&
          <NavLink to="/user-cart">Protected 2</NavLink>
        }
				<NavLink to="/unprotected">Unprotected</NavLink>			
        </ul>
        <IconButton className="icon-button" onClick={() => setOpen(true)}>
          <AccountCircleIcon/>
        </IconButton>	
      </nav>
      <Login 
        open={open}
        handleClose={() => setOpen(false)}
        inputValue={user}
        handleInputChange={(e) => setUser(e.target.value)}
      />
      <main>
				{children}
			</main>
      <footer />
    </div>
  );
};

Page.propTypes = {
  children: PropTypes.node,
};

export default Page;
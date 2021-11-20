import { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {IconButton} from '@mui/material';

import Login from '../Login';

import './page.scss';


const Page = ({ children }) => {
  
	const [open, setOpen] = useState(false);

  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/protected-one">Protected 1</Link>
        <Link to="/protected-two">Protected 2</Link>
				<Link to="/unprotected">Unprotected</Link>
				<IconButton onClick={() => setOpen(true)}>
					<AccountCircleIcon/>
				</IconButton>				
      </nav>
      <Login 
        open={open}
        handleClose={() => setOpen(false)}
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
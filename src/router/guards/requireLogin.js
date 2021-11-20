import { getIsLoggedIn } from '../../utils';
import { AUTH_ONLY } from '../types';

const requireLogin = (to, from, next) => {
    
	if (to.meta[AUTH_ONLY] && !getIsLoggedIn()) {
		next.redirect('/');
	}
	next();
};

export default requireLogin;
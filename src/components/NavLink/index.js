import { Link } from 'react-router-dom';
import './style.scss'

const NavLink = (props) => {
	return (
		<li className="nav-link">
			<Link {...props}/>
		</li>
	)
}

export default NavLink;
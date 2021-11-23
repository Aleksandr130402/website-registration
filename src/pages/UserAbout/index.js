import { useParams } from "react-router-dom";

import './style.css';

const UserAbout = () => {

	let {user} = useParams();
	
	return (
		<div className="user-about page">Hello, {user}</div>
	)
}

export default UserAbout;
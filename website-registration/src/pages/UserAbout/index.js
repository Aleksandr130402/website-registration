import { useParams } from "react-router-dom";

import './style.css';

const UserAbout = () => {

	let {user} = useParams();
	return (
		<div>Hello, {user}</div>
	)
}

export default UserAbout;
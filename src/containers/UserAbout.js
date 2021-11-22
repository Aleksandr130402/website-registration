import { useParams } from "react-router-dom";

const UserAbout = () => {

	const { user } = useParams();
	
	return (
		<div>Hello, {user}</div>	
	)
}

export default UserAbout;
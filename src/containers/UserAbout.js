import { useParams } from "react-router-dom";

const UserAbout = () => {

	const { user } = useParams();
	
	return (
		<div 
			className="page" 
			style={{background: "green", paddingTop: "12px"}}
		>
			Hello, {user}
		</div>	
	)
}

export default UserAbout;
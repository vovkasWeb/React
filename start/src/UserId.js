import { Link, useParams } from "react-router-dom";

function UsersId(){
	let {userName} = useParams();
	return(
		<div>
			<h1>User: {userName}</h1>
			<Link to="/users">Назад</Link>
		</div>
	)
}

export default UsersId;
import {Link, useLocation} from  "react-router-dom";
function Users() {
	let url= useLocation();
  return (
    <>
	 <h1>Users</h1>
	 <ul>
		<li><Link to={`${url.pathname}/ivanov`}>ivanov</Link></li>
		<li><Link to={`${url.pathname}/petrov`}>petrov</Link></li>
	 </ul>
	 </>
  );
}

export default Users;

/** @format */
import About from "./About";
import "./App.css";
import Users from "./Users";
import Main from "./Main";
import UsersId from "./UserId";
import Error from "./Error";
import {BrowserRouter as Router, Routes,Route, NavLink} from  "react-router-dom"

function App() {
  return (
    <>
      {/* <Header /> */}
		<Router>
			<nav>
				<ul>
				<li><NavLink  to="/">Main</NavLink></li>
				<li><NavLink to="/about">Aboute</NavLink></li>
				<li><NavLink to="/users">Users</NavLink></li>
				</ul>
			</nav>
      <Routes>
				<Route exect path="/" element={<Main/>}/>
				<Route path="/about" element={<About/>}/>
				<Route exect path="/users" element={<Users/>}/>
				<Route path="/users/:userName" element={<UsersId/>}/>
				<Route path="*" element={<Error/>}/>
		</Routes>
		</Router>
    </>
  );
}

export default App;

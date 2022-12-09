import './App.css';
import Header from './Header';
import About from './About';
import Users from './Users';
import Main from './Main';
import {BrowserRouter , Route, Routes, Link} from  "react-router-dom"
import UsersId from './UserId';
import Error from './Error';

function App() {
  return (
    <>
	 <Header/>
	<BrowserRouter>
	<Routes>
		<Route exact path="/"  element={<Main/>}/>
		<Route path="/about"  element={<About/>}/>
		<Route exact path="/users"  element={<Users/>}/>
		<Route exact path="/users/:userName"  element={<UsersId/>}/>
		<Route path='*' element={<Error/>}/>
	</Routes>
	</BrowserRouter>
	 </>
  );
}

export default App;


import state, { subscribe } from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {addPost, updateNewPostText} from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireThree = ()=>{
	root.render(
		<React.StrictMode>
		  <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
		  
		</React.StrictMode>
	 );
}
subscribe(rerenderEntireThree);
rerenderEntireThree(state);
reportWebVitals();


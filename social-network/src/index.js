import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let messages=[
	{id:1, message:'Hi'},
	{id:2, message:'How are your?'},
	{id:3, message:'Yo'},
	{id:4, message:'Yo'},
	{id:5, message:'YO'}
];
let dialogs=[
	{id:1, name:'Vova'},
	{id:2, name:'Andrey'},
	{id:3, name:'Sveta'},
	{id:4, name:'Shasha'},
	{id:5, name:'Viltor'}
];
let posts=[
	{id:1, message:'Hi, how are you?',likesCount:12},
	{id:2, message:'It is my first post',likesCount:11},
	{id:3, message:'Blabla',likesCount:11},
	{id:4, message:'Dada',likesCount:11},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App message={messages} dialogs={dialogs} posts={posts}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

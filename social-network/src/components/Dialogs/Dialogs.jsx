import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';


const DialogItem =(props)=>{
return(
	<div className={s.dialog + ' ' + s.active}>
	<NavLink to={"/dialogs/"+ props.id}>{props.name}</NavLink>
	</div>
);
};

const Message =(props)=>{
return(
<div className={s.message}>{props.message}</div>
)
};

let dialogsData=[
	{id:1, name:'Vova'},
	{id:2, name:'Andrey'},
	{id:3, name:'Sveta'},
	{id:4, name:'Shasha'},
	{id:5, name:'Viltor'}
];
let messagesData=[
	{id:1, message:'Hi'},
	{id:2, message:'How are your?'},
	{id:3, message:'Yo'},
	{id:4, message:'Yo'},
	{id:5, message:'YO'}
];


const Dialogs =(props)=>{
return(
<div className={s.dialogs}>
   <div className={s.dialogsItems}>
     <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
	  <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
	 
	</div>
	<div className={s.messages}>
		<Message message={messagesData[0].message} />
		<Message message={messagesData[1].message} />
		<Message message={messagesData[2].message} />
		
	</div>
</div>
);
};

export default Dialogs;
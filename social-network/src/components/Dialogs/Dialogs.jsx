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


let dialogs=[
	{id:1, name:'Vova'},
	{id:2, name:'Andrey'},
	{id:3, name:'Sveta'},
	{id:4, name:'Shasha'},
	{id:5, name:'Viltor'}
];

let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);

let messages=[
	{id:1, message:'Hi'},
	{id:2, message:'How are your?'},
	{id:3, message:'Yo'},
	{id:4, message:'Yo'},
	{id:5, message:'YO'}
];

let messagesElememts = messages.map(m=> <Message message={m.message} key={m.id}/>);


const Dialogs =(props)=>{
return(
<div className={s.dialogs}>
   <div className={s.dialogsItems}>
   {dialogsElements}
	</div>
	<div className={s.messages}>
	{messagesElememts}
	</div>
</div>
);
};

export default Dialogs;
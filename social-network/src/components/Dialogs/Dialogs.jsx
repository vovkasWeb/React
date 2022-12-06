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

const Dialogs =(props)=>{
return(
<div className={s.dialogs}>
   <div className={s.dialogsItems}>
     <DialogItem name="Vova" id={1}/>
	  <DialogItem name="Andrey" id={2}/>
	  <DialogItem name="Sveta" id={3}/>
	  <DialogItem name="Shasha" id={4}/>
	  <DialogItem name="Viktor" id={5}/>
	</div>
	<div className={s.messages}>
		<Message message="Hi"/>
		<Message message="How are your?"/>
		<Message message="Yo"/>
		
	</div>
</div>
);
};

export default Dialogs;
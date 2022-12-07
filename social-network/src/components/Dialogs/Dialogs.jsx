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
	let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>);
	let messagesElememts = props.state.messages.map(m=> <Message message={m.message} key={m.id}/>);

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
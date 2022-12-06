import React from "react";
import { NavLink } from "react-router-dom";
import s from './Dialogs.module.css';

const Dialogs =(props)=>{
return(
<div className={s.dialogs}>
   <div className={s.dialogsItems}>
      <div className={s.dialog + ' ' + s.active}>
		<NavLink to='/dialogs/1'>Vova</NavLink>
      </div>
		<div className={s.dialog}>
		<NavLink to='/dialogs/2'>Andrey</NavLink>
      </div>
		<div className={s.dialog}>
		<NavLink to='/dialogs/3'>Sasha</NavLink>
      </div>
		<div className={s.dialog}>
		<NavLink to='/dialogs/4'>Viktor</NavLink>
      </div>
		<div className={s.dialog}>
		<NavLink to='/dialogs/5'>Valera</NavLink>
      </div>
	</div>
	<div className={s.messages}>
		<div className={s.message}>
			Hi
		</div>
		<div className={s.message}>
			How are your?
		</div>
		<div className={s.message}>
			Yo
		</div>
	</div>
</div>
);
};

export default Dialogs;
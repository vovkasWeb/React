import React from "react";
import s from './Post.module.css';

const Post = (props)=>{
return(
		 <div className={s.item}>
		 <img src="https://mena.org.ua/wp-content/uploads/2014/03/avatar.png" alt="" />
		 {props.message}
		 <div>
		 <span> like</span> {props.likesCount}
		 </div>
		 </div>
)
};

export default Post;
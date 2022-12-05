import React from "react";
import s from './Post.module.css';

const Post = ()=>{
return(
		 <div className={s.item}>
		 <img src="https://mena.org.ua/wp-content/uploads/2014/03/avatar.png" alt="" />
		 post 1
		 <div>
		 <span>1 like</span>
		 </div>
		 </div>
)
};

export default Post;
import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";


// let posts=[
// 	{id:1, message:'Hi, how are you?',likesCount:12},
// 	{id:2, message:'It is my first post',likesCount:11},
// 	{id:3, message:'Blabla',likesCount:11},
// 	{id:4, message:'Dada',likesCount:11},


const MyPosts = (props)=>{
	// ];
let postsElement= props.posts.map(p=><Post message={p.message} likesCount={p.likesCount} key={p.id}/>)
	
return(
	
	<div className={s.postsBlock}>
	  <h3>My posts</h3>
	  <div>
		<div>
		<textarea></textarea>
		</div>
		<div>
		<button>add post</button>
		</div>
		</div>
	  <div className={s.posts}>
		 {postsElement }
	  </div>
	</div>
 
)
};

export default MyPosts;
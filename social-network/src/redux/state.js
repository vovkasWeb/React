
let rerenderEntireThree= ()=>{
	console.log('STATE');
}
let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are your?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "YO" },
    ],
    newPostText: '',
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Vova" },
      { id: 2, name: "Andrey" },
      { id: 3, name: "Sveta" },
      { id: 4, name: "Shasha" },
      { id: 5, name: "Viltor" },
    ],
    messages: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are your?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "YO" },
    ],
  },
};
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText="";
  rerenderEntireThree(state);
};

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText= newText;
  rerenderEntireThree(state);
};

export const subscribe = (observer)=>{

}


export default state;

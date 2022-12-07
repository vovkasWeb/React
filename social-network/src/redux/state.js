/** @format */

import { rerenderEntireThree } from "../render";

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "Hi" },
      { id: 2, message: "How are your?" },
      { id: 3, message: "Yo" },
      { id: 4, message: "Yo" },
      { id: 5, message: "YO" },
    ],
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
export let addPost = (postMessage) => {
  let newPost = {
    id: 5,
    message: postMessage,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireThree(state);
};
export default state;

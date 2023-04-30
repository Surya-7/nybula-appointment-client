import { createSlice } from "@reduxjs/toolkit";
// redux toolkit has slice which is composed of state , actions and reducers.

//defining the state of each variable
const initialState = {
  mode: "light",
  user: null,
  token: null,
  posts: [],
};

//creating the slice

export const authSlice = createSlice({
  name: "auth",
  initialState,//declaring the state

  //declaring the reducers
  reducers: {
    //Inside reducers we define actions
    setMode: (state) => {
      //toggling the mode 
      state.mode = state.mode === "light" ? "dark" : "light";
    },
    //action is like a parameters to the function
    setLogin: (state, action) => {
      //when logged in setting the user and tokens 
      state.user = action.payload.user;
      state.token = action.payload.token;
    },
    setLogout: (state) => {
      //when logged out setting the user and token to null.
      state.user = null;
      state.token = null;
    },
    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error("user friends non-existent :(");
      }
    },
    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },
    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;
export default authSlice.reducer;

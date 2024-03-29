import { combineReducers } from 'redux';
import orderReducer from ''; // Assuming you have an order reducer defined in orderRedux.js
// Import other reducers if you have them

// Define your initial state for posts if needed
const initialPostsState = {
  posts: [],
};

// Define your posts reducer function
const postsReducer = (state = initialPostsState, action) => {
  // Your logic for posts reducer
  return state;
};

// Combine all reducers
const rootReducer = combineReducers({
  order: orderReducer,
  posts: postsReducer, // Add your posts reducer here
  // Add other reducers here if you have them
});

export default rootReducer;

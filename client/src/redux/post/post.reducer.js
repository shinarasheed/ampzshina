import { GET_POSTS, POST_ERROR } from './post.types';

const initialState = {
  posts: [],
  loading: false,
};

const postReducer = (state = initialState, action) => {
  const { payload, type } = action;
  switch (type) {
    case GET_POSTS:
      return {
        ...state,
        posts: payload,
        loading: false,
      };

    case POST_ERROR:
      return {
        ...state,
        posts: [],
        loading: false,
      };

    default:
      return state;
  }
};

export default postReducer;

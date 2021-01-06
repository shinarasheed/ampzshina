import { GET_POSTS, POST_ERROR } from './post.types';
import posts from '../../data/post';

export const getPosts = () => async (dispatch) => {
  const theposts = posts;

  try {
    dispatch({
      type: GET_POSTS,
      payload: theposts,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: POST_ERROR,
    });
  }
};

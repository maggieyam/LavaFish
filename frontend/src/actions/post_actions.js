import * as APIUtil from './post_actions';
import { receivePostErrors } from "./session_actions";
import { videoUpload } from "./"

export const RECEIVE_POST = 'RECEIVE_POST';
export const RECEIVE_POST_ERRORS = 'RECEIVE_POST_ERRORS';
export const CLEAR_POST_ERRORS = 'CLEAR_POST_ERRORS';

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
})

export const receivePostErrors = errors => ({
  type: RECEIVE_POST_ERRORS,
  errors
})

export const clearPostErrors = () => ({
  type: CLEAR_POST_ERRORS,
})


export const createPost = post => dispatch => {
    try {
      const signedUrl = videoUpload(post.file);
      post.url = signedUrl;

      debugger
      return APIUtil.createPost(post).then(
          post => dispatch(receivePost(post)),
          err => receiveErrors(err.response.data)
        )
      
    }
    catch(err) {
      console.log(err)
    }
}


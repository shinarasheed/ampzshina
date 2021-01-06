import React from 'react';
import { AiOutlineEllipsis } from 'react-icons/ai';
// this is where i want to use post or a skeleton screen
// import Spinner from '../../assets/img/home/spinner.gif';

import PostModal from './PostModal';
import commenticon from '../../assets/img/home/comment.png';
// import viewicon from '../../assets/img/eye.png';
import likeicon from '../../assets/img/home/star.png';
import '../../styles/post.scss';

const Post = ({ post }) => {
  return (
    <article className="post">
      <PostModal post={post} />
      <div className="px-4">
        <div className="d-flex justify-content-between align-items-center pb-4">
          <small className="post__time">2 mins ago</small>
          <div className="d-flex align-items-center post__comments__views">
            <div className="d-flex align-items-center">
              <img
                style={{ width: '15px' }}
                className="post__comment__icon"
                src={commenticon}
                alt="comment"
              />
              <span className="post__comment">210</span>
            </div>
            <div className="d-flex align-items-center">
              <img
                style={{ width: '15px' }}
                className="post__view__icon"
                src={likeicon}
                alt="likes"
              />
              <span className="post__views">210</span>
            </div>
            <div className="d-flex align-items-center">
              <img
                style={{ width: '15px' }}
                className="post__view__icon"
                src={commenticon}
                alt="views"
              />
              <span className="post__views">210</span>
            </div>
          </div>
          <div>
            <AiOutlineEllipsis
              style={{ fontSize: '25px', cursor: 'pointer' }}
            />
          </div>
        </div>
      </div>
    </article>
  );
};

export default Post;

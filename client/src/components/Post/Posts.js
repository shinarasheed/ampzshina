import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getPosts } from '../../redux/post/post.action';
import Spinner from '../../components/Spinner/Spinner';
import Post from './Post';

const Posts = ({ getPosts, posts }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);
  return posts.length > 0 ? (
    <section className="posts">
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </section>
  ) : (
    <Spinner />
  );
};

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  loading: state.post.posts,
});

export default connect(mapStateToProps, { getPosts })(Posts);

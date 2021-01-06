import React from 'react';
import styled from 'styled-components';
import Posts from '../components/Post/Posts';
import Events from '../components/Event/Events';

import '../styles/layout.scss';

const Layout = () => {
  return (
    <PostWrapper className="post__wrapper">
      <section>
        <Posts />
      </section>
      <section>
        <Events />
      </section>
    </PostWrapper>
  );
};

const PostWrapper = styled.section`
  width: 90vw;
  margin: 10rem auto 5rem auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  column-gap: 7rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export default Layout;

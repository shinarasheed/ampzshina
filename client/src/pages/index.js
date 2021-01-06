import React from 'react';
import IndexHero from '../components/Index/Hero';
import Layout from '../components/Layout';

const IndexPage = () => {
  return (
    <section className="indexpage">
      <article className="indexpage__herobanner">
        <IndexHero />
      </article>
      <Layout />
    </section>
  );
};

export default IndexPage;

import React, { Fragment } from 'react'
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Hero from '../../components/Hero/Hero';

const Home = (props) => {
  return (
    <Fragment>
      <Layout>
        <Header />
        <Hero />
      </Layout>
    </Fragment>
  );
}

export default Home;

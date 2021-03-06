import React from 'react';
import Layout from '../components/Layout';
import Hero from '../components/Hero';
import Lists from '../components/Lists';
import About from '../components/About';
import Description from '../components/Description';
import CenterHero from '../components/CenterHero';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Hero />
        <Lists />
        <About />
        <Description />
        <CenterHero />
      </Layout>
    );
  }
}

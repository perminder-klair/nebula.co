import React from 'react';

import config from '../utils/config';
import Seo from '../components/Seo';
import Layout from '../components/Layout';

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <Seo
          title="Home"
          description="Welcome to Nebula"
          url={`${config.siteUrl}`}
        />
        <section className="hero is-success is-fullheight">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Fullheight title</h1>
              <h2 className="subtitle">Fullheight subtitle</h2>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

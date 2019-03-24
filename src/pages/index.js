import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Seo';

const Container = styled.section`
  min-height: 118vh !important;

  background-image: url('../images/background.png');
  background-repeat: no-repeat;
  background-position: 81% 0%;
`;

const Wrapper = styled.div`
  margin-top: 56px;
  margin-left: 64px;
  img {
    width: 176px;
    height: 54px;
  }
`;


export default class IndexPage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Seo
          title="Home"
          description="Welcome to Nebula"
          url={`${config.siteUrl}`}
        />
        <Container className="hero is-fullheight">
          <Wrapper>
            <img src="/images/logo.png" alt="logo" />
          </Wrapper>
          <div className="hero-body">
            <div className="container">
              <h1 className="has-text-weight-bold">
                We are digital product creators
              </h1>
              <h2>From concept phase to customer validation, all the way through to developing the finished product on the app store</h2>
              <a className="button is-danger is-rounded">Lets's talk</a>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

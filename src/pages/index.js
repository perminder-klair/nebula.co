import React from 'react';
import styled from 'styled-components';

import config from '../utils/config';
import Seo from '../components/Seo';

const Container = styled.section`
  background-image: url('../images/background.png');
  background-repeat: no-repeat;
  background-position: top right;
  @media screen and (max-width: 768px) {
    background-image: none;
  }
  .container {
    margin: 0px 6.5% 0;
    position: fixed;
    top: 29.4%;
    width: 100%;
    @media screen and (max-width: 768px) {
      position: relative;
      margin: 0px;
    }
  }
  h1 {
    font-size: 40px;
    letter-spacing: normal;
    line-height: 4.6rem;
    color: #100065;
    font-family: 'Roboto', Helvetica, sans-serif !important;
    @media screen and (max-width: 768px) {
      line-height: 1;
    }
  }
  h2 {
    padding-right: 58%;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: normal;
    color: #100065;
    margin-left: 0.46%;
    font-family: 'Roboto', Helvetica, sans-serif !important;
    @media screen and (max-width: 768px) {
      padding-right: 0rem;
      margin-top: 1.5rem;
      margin-bottom: 1.5rem;
    }
  }
  .button {
    border-radius: 24px;
    background-color: #f50058;
    width: 272px;
    height: 64px;
    border: solid 0px;
    margin-top: 3%;
    z-index: 1;
  }
  .button-shadow {
    width: 272px;
    height: 60px;
    opacity: 0.64;
    border-radius: 23.7px;
    -webkit-filter: blur(7.7px);
    filter: blur(7.7px);
    background-color: #a48a93;
    margin-top: -3rem;
  }
`;

const Wrapper = styled.div`
  margin-top: 56px;
  margin-left: 64px;
  @media screen and (max-width: 768px) {
    justify-content: center;
    display: flex;
    margin-left: 0px;
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
              <h1>We are digital product creators</h1>
              <h2>
                From concept phase to customer validation, all the way through
                to developing the finished product on the app store
              </h2>
              <div className="button-wrapper">
                <a className="button has-text-white is-borderless is-size-5">
                  Let's talk
                </a>
                <div className="button-shadow" />
              </div>
            </div>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

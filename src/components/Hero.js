import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';


const Container = styled.section`
  background-image: url('../images/background.png');
  background-repeat: no-repeat;
  background-position: top right;
  @media screen and (max-width: 768px) {
    background-image: none;
  }
  .container {
    margin: 0px 6.5% 0;
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
    @media screen and (max-width: 768px) {
      line-height: 1;
    }
  }
  h2 {
    padding-right: 58%;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: normal;
    color: ${props => props.theme.blue};
    margin-left: 0.46%;
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

const HeroQuery = graphql`
  query {
    contentfulHero {
      title
      description
    }
  }
`;

const Hero = () => (
  <Container className="hero is-fullheight">
    <Wrapper>
      <img src="/images/logo.png" alt="logo" />
    </Wrapper>
    <div className="hero-body">
      <div className="container">
        <StaticQuery
          query={HeroQuery}
          render={data => (
            <React.Fragment>
              <h1 className="has-text-weight-semibold">
                {data.contentfulHero.title}
              </h1>
              <h2 className="has-text-weight-normal is-size-6">
                {data.contentfulHero.description}
              </h2>
            </React.Fragment>
          )}
        />
        <div className="button-wrapper">
          <a className="button has-text-white is-borderless is-size-5">
            Let's talk
          </a>
          <div className="button-shadow" />
        </div>
      </div>
    </div>
  </Container>
);

export default Hero;

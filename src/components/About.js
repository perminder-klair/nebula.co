import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .content {
    padding: 6rem 7rem;
  }
  .title {
    color: ${props => props.theme.blue};
  }
  .description {
    color: ${props => props.theme.blue};
  }
`;
const Description = styled.div`
  background-image: url('/images/Postits.png');
  background-repeat: no-repeat;
  background-position: 99% 0%;
  @media screen and (max-width: 600px) {
    background-position: 100% 454%;
  }
`;

const About = () => (
  <Container className="">
    <div className="container">
      <div className="columns">
        <div className="column">
          <img src="/images/HeroImageMiddle.svg" className="image" />
        </div>
        <div className="column">
          <Description>
            <div className="media-content">
              <div className="content">
                <h1 className="title is-size-4 has-text-weight-semibold">
                  Moving Fast...
                </h1>
                <p className="description is-size-5 has-text-weight-normal">
                  Kicking things off with the Nebula design sprint sets the bar
                  for our prize process, quality work and rapid results.
                </p>
              </div>
            </div>
          </Description>
        </div>
      </div>
    </div>
  </Container>
);

export default About;

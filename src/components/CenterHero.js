import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .title {
    color: black;
  }
`;

const CenterHero = () => (
  <Container className="">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h1 className="title">title</h1>
          <h5 className="Subtitle">Subtitle</h5>
        </div>
        <div className="column">
          <img src="/images/HeroImageBottom.svg" className="image" />
        </div>
      </div>
    </div>
  </Container>
);

export default CenterHero;

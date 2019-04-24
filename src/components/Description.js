import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  .container {
    padding: 8rem 1rem;
  };
  .title {
    color: ${props => props.theme.blue};
  }
  .description {
    color: ${props => props.theme.blue};
  }
  .content {
    width: 64%;
    margin-left: 15rem;
    @media screen and (max-width: 600px) {
      margin-left: 5rem;
    }
  }
`;

const Description = () => (
  <Container className="Section">
  <div className ="container">
    <div className="columns has-text-justified">
      <div className="content has-text-left">
        <h1 className="title is-size-2 has-text-weight-semibold">
          Your MVP...
        </h1>
        <p className="description is-size-4 has-text-weight-normal">
          Very soon will be able to see concepts come to lige in a fully
          interactive prototype. Here we test functionality of design solutions.
          gain valuable feedback from your users first experience with your
          product and provide a shared vision amongst team and stakeholders .
        </p>
        </div>
      </div>
    </div>
  </Container>
);

export default Description;

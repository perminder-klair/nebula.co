import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  margin-left: 7rem;
  @media screen and (max-width: 600px) {
    margin-left: 4rem;
  }
  .container {
    padding: 8rem 1rem;
    @media screen and (max-width: 600px) {
      padding: 0rem 0rem;
    }
  }
  ul {
    list-style-type: disc;
    color: ${props => props.theme.blue};
  }
  h2 {
    color: ${props => props.theme.blue};
  }
`;

const Lists = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <h2 className="is-size-3 has-text-weight-semibold">Discover</h2>
          <ul className="List">
            <li className="is-size-5 has-text-weight-normal">Design sprints</li>
            <li className="is-size-5 has-text-weight-normal">Data Driven</li>
            <li className="is-size-5 has-text-weight-normal">
              Hesiristic analysis
            </li>
            <li className="is-size-5 has-text-weight-normal">
              Defined proposition
            </li>
          </ul>
        </div>
        <div className="column">
          <h2 className="is-size-3 has-text-weight-semibold">Design</h2>
          <ul className="List">
            <li className="is-size-5 has-text-weight-normal">
              User experience
            </li>
            <li className="is-size-5 has-text-weight-normal">
              Branding and identity
            </li>
            <li className="is-size-5 has-text-weight-normal">Prototyping</li>
            <li className="is-size-5 has-text-weight-normal">Lab testing</li>
          </ul>
        </div>
        <div className="column">
          <h2 className="is-size-3 has-text-weight-semibold ">Deliver</h2>
          <ul className="List">
            <li className="is-size-5 has-text-weight-normal">
              React native development
            </li>
            <li className="is-size-5 has-text-weight-normal">
              App Store deployment
            </li>
            <li className="is-size-5 has-text-weight-normal">
              UX documentation
            </li>
            <li className="is-size-5 has-text-weight-normal">Design system</li>
            <li className="is-size-5 has-text-weight-normal">
              Component libraries{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Container>
);

export default Lists;

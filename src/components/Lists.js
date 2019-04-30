import React from 'react';
import styled from 'styled-components';

const Container = styled.section`
  .container {
    margin: 6rem 2rem;
    @media screen and (max-width: 600px) {
      margin: 0rem 0rem;
    }
  }
  ul {
    list-style-type: disc;
    color: ${props => props.theme.blue};
  }
  h2 {
    color: ${props => props.theme.blue};
  }
  .ListName {
    background-image: url('/images/BackgroundBlob1.svg');
    background-repeat: no-repeat;
    background-position: top center;
  }
  .ListName2 {
    background-image: url('/images/BackgroundBob2.svg');
    background-repeat: no-repeat;
  }
  .ListName3 {
    background-image: url('/images/BackgroundBlob3.svg');
    background-repeat: no-repeat;
  }
`;

const ListBoxOne = styled.div`
  padding-left: 28%;
  padding-top: 15%;
  padding-bottom: 11%;
  @media screen and (max-width: 600px) {
    margin-top: 0rem;
  }
`;

const ListBoxTwo = styled.div`
  margin-top: 85%;
  padding-top: 18%;
  padding-left: 27%;
  padding-bottom: 23%;
  @media screen and (max-width: 600px) {
    margin-top: 0rem;
  }
`;
const ListBoxThree = styled.div`
  padding-left: 28%;
  padding-top: 15%;
  padding-bottom: 11%;
  @media screen and (max-width: 600px) {
    margin-top: 0rem;
  }
`;

const Lists = () => (
  <Container className="section">
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="ListName">
            <ListBoxOne>
              <h2 className="is-size-3 has-text-weight-semibold">Discover</h2>
              <ul className="List">
                <li className="is-size-5 has-text-weight-normal">
                  Design sprints
                </li>
                <li className="is-size-5 has-text-weight-normal">
                  Data Driven
                </li>
                <li className="is-size-5 has-text-weight-normal">
                  Hesiristic analysis
                </li>
                <li className="is-size-5 has-text-weight-normal">
                  Defined proposition
                </li>
              </ul>
            </ListBoxOne>
          </div>
        </div>
        <div className="column">
          <div className="ListName2">
            <ListBoxTwo ClassName="">
              <h2 className="is-size-3 has-text-weight-semibold has-text-white">
                Design
              </h2>
              <ul className="List has-text-white">
                <li className="is-size-5 has-text-weight-normal">
                  User experience
                </li>
                <li className="is-size-5 has-text-weight-normal">
                  Branding and identity
                </li>
                <li className="is-size-5 has-text-weight-normal">
                  Prototyping
                </li>
                <li className="is-size-5 has-text-weight-normal">
                  Lab testing
                </li>
              </ul>
            </ListBoxTwo>
          </div>
        </div>
        <div className="column">
          <div className="ListName3">
            <ListBoxThree>
              <h2 className="is-size-3 has-text-weight-semibold ">Deliver</h2>
              <ul className="List">
                <li className="is-size-5 has-text-weight-normal ">
                  React native development
                </li>
                <li className="is-size-5 has-text-weight-normal">
                  App Store deployment
                </li>
                <li className="is-size-5 has-text-weight-normal">
                  UX documentation
                </li>
                <li className="is-size-5 has-text-weight-normal">
                  Design system
                </li>
                <li className="is-size-5 has-text-weight-normal">
                  Component libraries{' '}
                </li>
              </ul>
            </ListBoxThree>
          </div>
        </div>
      </div>
    </div>
  </Container>
);

export default Lists;

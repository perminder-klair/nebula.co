import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const Container = styled.div`
  background-image: url('/images/yourmbp.svg');
  background-repeat: no-repeat;
  background-position: center;
  margin: 11% 0%;
  .container {
    padding: 8rem 1rem;
  }
  .title {
    color: ${props => props.theme.white};
  }
  .description {
    color: ${props => props.theme.white};
  }
  .content {
    width: 64%;
    margin-left: 15rem;
    @media screen and (max-width: 600px) {
      margin-left: 5rem;
    }
  }
`;

const DescriptionQuery = graphql`
  query {
    contentfulDescription {
      title
      description {
        description
      }
    }
  }
`;

const Description = () => (
  <Container className="Section">
    <div className="container">
      <div className="columns has-text-justified">
        <div className="content has-text-left">
          <StaticQuery
            query={DescriptionQuery}
            render={data => (
              <React.Fragment>
                <h1 className="title is-size-2 has-text-weight-semibold">
                  {data.contentfulDescription.title}
                </h1>
                <p className="description is-size-4 has-text-weight-normal">
                  {data.contentfulDescription.description.description}
                </p>
              </React.Fragment>
            )}
          />
        </div>
      </div>
    </div>
  </Container>
);

export default Description;

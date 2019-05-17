import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

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
    background-position: 100% 430%;
  }
`;

const Image = styled.img`
  height: auto;
  max-width: 86%;
  margin: 13% 12%;
`;

const AboutQuery = graphql`
  query {
    contentfulAbout {
      title
      description {
        description
      }
      image {
        file {
          url
        }
      }
    }
  }
`;

const About = () => (
  <Container className="">
    <StaticQuery
      query={AboutQuery}
      render={data => (
        <React.Fragment>
          <div className="container">
            <div className="columns">
              <div className="column">
                <Image src={data.contentfulAbout.image.file.url} />
              </div>
              <div className="column">
                <Description>
                  <div className="media-content">
                    <div className="content">
                      <h1 className="title is-size-4 has-text-weight-semibold">
                        {data.contentfulAbout.title}
                      </h1>
                      <p className="description is-size-5 has-text-weight-normal">
                        {data.contentfulAbout.description.description}
                      </p>
                    </div>
                  </div>
                </Description>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    />
  </Container>
);

export default About;

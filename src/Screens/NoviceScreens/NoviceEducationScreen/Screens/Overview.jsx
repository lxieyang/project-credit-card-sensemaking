import React, { Component } from 'react';
import { NavLink as Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Template from './ComponentTemplate';

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  font-size: 1.1rem;
`;

class Overview extends Component {
  render() {
    return (
      <Template>
        <TitleContainer>
          <h2>Overview</h2>
        </TitleContainer>

        <ContentContainer>
          <p>
            Here are some qucik education materials about{' '}
            <strong>credit cards</strong>, <strong>credit score</strong>, and
            some <strong>pro tips</strong> that we think can benefit you!{' '}
          </p>

          <h4>
            <Link
              to={`${this.props.match.url}/creditcard`}
              className="edu-route-in-overview"
            >
              Credit Card
            </Link>
          </h4>
          <p>
            A payment card that allows the holder to purchase goods or services
            and pay for them later.{' '}
          </p>

          <h4>
            <Link
              to={`${this.props.match.url}/creditscore`}
              className="edu-route-in-overview"
            >
              Credit Score
            </Link>
          </h4>
          <p>
            A number from 300-850 summarizing how well a person has handled
            credit and debt, generated from his or her credit report.
          </p>

          <h4>
            <Link
              to={`${this.props.match.url}/protips`}
              className="edu-route-in-overview"
            >
              Pro Tips
            </Link>
          </h4>
          <p>
            Obtaining and using a credit card is one of the best ways to begin
            building your credit history. Here we teach you all about it!
          </p>
        </ContentContainer>
      </Template>
    );
  }
}

export default withRouter(Overview);

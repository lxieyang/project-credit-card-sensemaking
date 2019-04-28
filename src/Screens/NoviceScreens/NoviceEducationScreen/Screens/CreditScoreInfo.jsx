import React, { Component } from 'react';
import styled from 'styled-components';
import Template from './ComponentTemplate';

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  font-size: 1.1rem;
`;

class CreditScoreInfo extends Component {
  render() {
    return (
      <Template>
        <ContentContainer>
          <h4>Credit History</h4>
          <p>Records on a person’s lending and payment history.</p>

          <h4>Credit Report</h4>
          <p>A generated report of a person’s credit history.</p>

          <h4>Credit Score</h4>
          <p>
            A number from 300-850 summarizing how well a person has handled
            credit and debt, generated from the credit report.
          </p>

          <h4>Credit utilization ratio</h4>
          <p>Amount owed over total credit limit.</p>
        </ContentContainer>
      </Template>
    );
  }
}

export default CreditScoreInfo;

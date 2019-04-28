import React, { Component } from 'react';
import styled from 'styled-components';
import Template from './ComponentTemplate';

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  font-size: 1.1rem;
`;

class ProTips extends Component {
  render() {
    return (
      <Template>
        <ContentContainer>
          <h4>Build a Credit History</h4>
          <p>
            Obtaining and using a credit card is one of the best ways to begin
            building your credit history.
          </p>

          <h4>Use Credit Responsibly</h4>
          <p>
            While credit cards can help build credit history, they can also be
            easy to misuse. Applying for too many credit cards, exceeding your
            credit limit and falling behind on payments can all negatively
            affect your credit score. In addition, closing old cards you no
            longer use can impact your credit history. Keeping your credit cards
            open will help build your credit history.
          </p>

          <h4>Manage Your Debt</h4>
          <p>
            Managing loans and will help keep you in the good graces of your
            lender and improve your credit score.
          </p>

          <h4>Pay Your Bills On Time</h4>
          <p>
            Paying your bills on time signals to creditors that you’re
            responsible and establishes you as a good credit risk.
          </p>

          <h4>Watch your Credit Report</h4>
          <p>
            Keeping an eye on your credit score is important. Identity theft,
            credit card fraud and other scams can all lead to inaccurate
            information on your credit report. You can get a free report once
            every 12 months from each of the three nationwide consumer credit
            reporting companies. Request it at www.AnnualCreditReport.com.
          </p>
        </ContentContainer>
      </Template>
    );
  }
}

export default ProTips;

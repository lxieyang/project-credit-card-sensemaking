import React, { Component } from 'react';
import styled from 'styled-components';
import Template from './ComponentTemplate';

const TitleContainer = styled.div`
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  font-size: 1.1rem;
`;

class CreditCardInfo extends Component {
  render() {
    return (
      <Template>
        {/* <TitleContainer>
          <h2>Credit Card</h2>
        </TitleContainer> */}

        <ContentContainer>
          <h4>Credit Card</h4>
          <p>
            A payment card that allows the holder to purchase goods or services
            and pay for them later.
          </p>

          <h4>Credit Line & Credit Limit</h4>
          <p>The maximum amount of money the card issuer will lend you.</p>

          <h4>Balance</h4>
          <p>The amount you’ve spent but have not yet paid for.</p>

          <h4>Balance Transfer</h4>
          <p>
            Transfer the outstanding balance from one credit card to another,
            usually due from one with high interest rate to one with lower
            interest rate.
          </p>

          <h4>Annual Percentage Rate (APR)</h4>
          <p>
            The annual interest rate you will be charged if you carry balances
            on a card.
          </p>

          <h4>Due Date</h4>
          <p>
            Due date for your payment. You may be assessed a late payment fee
            after this date.
          </p>

          <h4>Minimum Payment </h4>
          <p>The lowest amount you need to pay to satisfy a current bill.</p>

          <h4>Secured Credit Card</h4>
          <p>
            Cards that require collateral such as deposit. Good for building and
            rebuilding credit.
          </p>
        </ContentContainer>
      </Template>
    );
  }
}

export default CreditCardInfo;

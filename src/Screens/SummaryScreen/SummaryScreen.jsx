import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Screen from '../Screen';
import {
  benefitCategories,
  incomeRanges,
  creditScoreRanges
} from '../../shared/constants';

import { connect } from 'react-redux';

const SummaryContainer = styled.div`
  margin-top: 30px;
`;

class SummaryScreen extends Component {
  render() {
    const {
      selfRating,
      incomeRange,
      creditScoreRage,
      recommendedUserType,
      chosenUserType,
      chosenBenefits,
      chosenCard
    } = this.props;

    let chosenBenefitCategories = benefitCategories.filter(
      b => chosenBenefits[b.title]
    );

    return (
      <Screen>
        <div className="container">
          <SummaryContainer>
            <h4>Self Rated Expertise (1 - 7):</h4>
            <p>{selfRating}</p>

            <h4>Annual Income Range:</h4>
            <p>{incomeRanges[incomeRange]}</p>

            <h4>Credit Score Range:</h4>
            <p>{creditScoreRanges[creditScoreRage]}</p>

            <h4>Recommended User Type:</h4>
            <p>{recommendedUserType}</p>

            <h4>Chosen User Type:</h4>
            <p>{chosenUserType}</p>

            <h4>Chosen Benefit Categories:</h4>
            <ul>
              {chosenBenefitCategories.map((b, idx) => {
                return <li key={idx}>{b.title}</li>;
              })}
            </ul>

            <h4>Chosen Card:</h4>
            <p>{chosenCard}</p>
          </SummaryContainer>
        </div>
      </Screen>
    );
  }
}

const mapStateToProps = state => {
  return {
    selfRating: state.quiz.selfRating,
    incomeRange: state.quiz.incomeRange,
    creditScoreRage: state.quiz.creditScoreRage,
    recommendedUserType: state.userType.recommendedUserType,
    chosenUserType: state.userType.chosenUserType,
    chosenBenefits: state.benefits.chosenBenefits,
    chosenCard: state.cardChoice.chosenCard
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(SummaryScreen));

import React, { Component } from 'react';
import styled from 'styled-components';
import { sortBy, reverse } from 'lodash';
import {
  benefitCategories,
  creditScoreRangesDetail
} from '../../shared/constants';
import cardData from '../../shared/cardData';
import OverAllIcon from '../../assets/images/card-rec-overall.png';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const PromptContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const RecommendationContainer = styled.div`
  margin-top: 30px;
  width: 100%;
`;

const BenefitCategoryContainer = styled.div`
  height: 200px;
  margin-top: 30px;
  margin-bottom: 30px;
  /* padding: 30px 30px; */
  border-radius: 5px;
  background-color: rgb(247, 247, 247);
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  display: flex;
`;

const BenefitTitleContainer = styled.div`
  height: 100%;
  width: 200px;
`;

const BenefitCardIconContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const BenefitCardIcon = styled.img`
  max-height: 80%;
  max-width: 80%;
  width: auto;
  height: auto;
`;

const BenefitCardTitleContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class CardRecommendation extends Component {
  state = {
    benefitCategoriesToDisplay: []
  };

  componentDidMount() {
    let benefitCategoriesToDisplay = [
      {
        title: 'Overall',
        icon: OverAllIcon,
        codename: 'overall',
        description: []
      }
    ];
    benefitCategoriesToDisplay = benefitCategoriesToDisplay.concat(
      benefitCategories.filter(cat => this.props.chosenBenefits[cat.title])
    );

    let allCards = Object.values(cardData);

    let userCreditScore =
      this.props.creditScoreRage === null || this.props.creditScoreRage === 0
        ? creditScoreRangesDetail[2][1]
        : creditScoreRangesDetail[this.props.creditScoreRage][1];

    let filteredCards = allCards
      .filter(card => card.credit_min <= userCreditScore)
      .map(card => {
        return {
          ...card,
          annual_fee: card.annual_fee === 'yes' ? 0 : 10,
          bonus_purchase:
            card.bonus_purchase === 'large'
              ? 10
              : card.bonus_purchase === 'small'
              ? 5
              : 0
        };
      })
      .map(card => {
        let totalScore =
          card.cashback +
          card.gas +
          card.grocery +
          card.travel +
          card.balance_transfer +
          card.dining +
          card.student +
          card.annual_fee +
          card.bonus_purchase;
        return {
          ...card,
          totalScore
        };
      });

    // console.log(filteredCards);

    for (let i = 0; i < benefitCategoriesToDisplay.length; i++) {
      let codename = benefitCategoriesToDisplay[i].codename;
      let cardToSort = filteredCards;
      if (codename !== 'overall') {
        // one of the categories
        cardToSort = filteredCards.filter(card => card[codename] > 0);
      }
      let sortedCards = reverse(
        sortBy(cardToSort, ['totalScore', 'name', 'bank'])
      );
      // console.log(sortedCards);
      benefitCategoriesToDisplay[i]['sortedCards'] = sortedCards;
    }

    console.log(benefitCategoriesToDisplay);

    this.setState({ benefitCategoriesToDisplay });
  }

  render() {
    const { benefitCategoriesToDisplay } = this.state;
    const { mode } = this.props;

    return (
      <React.Fragment>
        <PromptContainer>
          <h3>
            Congratulations! Based on your answers, we recommend you with the
            following credit cards:
          </h3>
        </PromptContainer>

        <RecommendationContainer>
          {benefitCategoriesToDisplay.map((cat, idx) => {
            return (
              <BenefitCategoryContainer key={idx}>
                <BenefitTitleContainer>
                  <BenefitCardIconContainer>
                    <BenefitCardIcon src={cat.icon} />
                  </BenefitCardIconContainer>
                  <BenefitCardTitleContainer>
                    Best {cat.title}
                  </BenefitCardTitleContainer>
                </BenefitTitleContainer>
              </BenefitCategoryContainer>
            );
          })}
        </RecommendationContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    chosenBenefits: state.benefits.chosenBenefits,
    creditScoreRage: state.quiz.creditScoreRage
  };
};

export default connect(
  mapStateToProps,
  null
)(CardRecommendation);

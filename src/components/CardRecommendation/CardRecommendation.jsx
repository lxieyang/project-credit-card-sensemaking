import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import { sortBy, reverse } from 'lodash';
import NextButton from '../UI/Buttons/NextButton/NextButton';
import {
  benefitCategories,
  creditScoreRangesDetail
} from '../../shared/constants';
import cardData from '../../shared/cardData';
import OverAllIcon from '../../assets/images/card-rec-overall.png';
import MyChoice from '../../assets/images/my-choice.png';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import appRoutes from '../../shared/appRoutes';

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
  font-weight: 600;
`;

const CardsContainerWrapper = styled.div`
  padding: 20px 0px;
  flex: 1;
  height: 100%;
  overflow-x: hidden;
`;

const CardsContainer = styled.div`
  display: flex;
  overflow-x: hidden;

  &:hover {
    overflow-x: auto;
  }
`;

const CardContainer = styled.div`
  flex-shrink: 0;
  height: 100%;
  /* width: 300px; */
  margin: 0 20px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;

  transition: all 0.1s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const CardImageContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardImage = styled.img`
  height: 120px;
  width: auto;
`;

const CardMyChoice = styled.img`
  z-index: 5000;
  width: 60px;

  border-radius: 6px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  position: absolute;
  top: 10px;
  left: -20px;

  transform: rotateZ(-45deg);
`;

const CardNameContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '600px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none'
  }
});

const ModalContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
`;

const ModalCardImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCardImage = styled.img`
  height: 250px;
  width: auto;
`;

const ModalMyChoice = styled.img`
  z-index: 500;
  width: 100px;

  border-radius: 10px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  position: absolute;
  top: 10px;
  left: -35px;

  transform: rotateZ(-45deg);
`;

const ModalCardName = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 1.3rem;
`;

const ModalCardBank = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCardInfoContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCardSelectContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

const NextButtonContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

class CardRecommendation extends Component {
  state = {
    benefitCategoriesToDisplay: [],
    open: false,
    cardInModal: null
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
    this.setCardInModal(null);
  };

  setCardInModal = card => {
    this.setState({ cardInModal: card });
  };

  handleCardClicked = (event, card) => {
    this.setCardInModal(card);
    this.handleOpen();
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
          annual_fee: card.annual_fee === 'yes' ? 0 : 3,
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
      let sortedCards = reverse(
        sortBy(cardToSort, ['totalScore', 'name', 'bank'])
      );
      if (codename !== 'overall') {
        // one of the categories
        cardToSort = filteredCards.filter(card => card[codename] > 0);
        sortedCards = reverse(sortBy(cardToSort, [codename, 'name', 'bank']));
      }

      // console.log(sortedCards);
      benefitCategoriesToDisplay[i]['sortedCards'] = sortedCards;
    }

    // console.log(benefitCategoriesToDisplay);

    this.setState({ benefitCategoriesToDisplay });
  }

  handleNext = e => {
    this.props.history.push(appRoutes.summary);
  };

  render() {
    const { benefitCategoriesToDisplay, cardInModal } = this.state;
    const { classes, mode, chosenCard } = this.props;

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

                <CardsContainerWrapper>
                  <CardsContainer>
                    {cat.sortedCards.map((card, idx) => {
                      return (
                        <CardContainer
                          key={idx}
                          onClick={e => this.handleCardClicked(e, card)}
                        >
                          <CardImageContainer>
                            <div style={{ position: 'relative' }}>
                              <CardImage src={card.card_img_link} />
                              {chosenCard && chosenCard === card.name && (
                                <CardMyChoice src={MyChoice} />
                              )}
                            </div>
                          </CardImageContainer>
                          <CardNameContainer>{card.name}</CardNameContainer>
                        </CardContainer>
                      );
                    })}
                  </CardsContainer>
                </CardsContainerWrapper>
              </BenefitCategoryContainer>
            );
          })}
        </RecommendationContainer>

        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          {cardInModal && (
            <div style={getModalStyle()} className={classes.paper}>
              <ModalContainer>
                <ModalCardImageContainer>
                  <div style={{ position: 'relative' }}>
                    <ModalCardImage src={cardInModal.card_img_link} />
                    {chosenCard && chosenCard === cardInModal.name && (
                      <ModalMyChoice src={MyChoice} />
                    )}
                  </div>
                </ModalCardImageContainer>
                <ModalCardName>{cardInModal.name}</ModalCardName>
                <ModalCardBank>(issued by {cardInModal.bank})</ModalCardBank>
                <ModalCardInfoContainer>
                  <div>
                    <p>
                      Recommended annual income needed for application:{' '}
                      <strong>
                        $
                        {parseInt(
                          cardInModal.annual_income_min
                        ).toLocaleString()}
                      </strong>
                    </p>

                    {cardInModal.annual_fee > 0 ? (
                      <p>This card does not have an annual fee. 😍</p>
                    ) : (
                      <p>This card has an annual fee. 😧</p>
                    )}

                    <p>
                      Want to apply? Click{' '}
                      <a href={cardInModal.apply_link} target="_blank">
                        here
                      </a>
                      !
                    </p>
                  </div>
                </ModalCardInfoContainer>
                <ModalCardSelectContainer>
                  {chosenCard && chosenCard === cardInModal.name ? (
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-lg btn-block"
                      onClick={() => this.props.setChosenCard(null)}
                    >
                      I don't want to choose this card any more!
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="btn btn-outline-success btn-lg btn-block"
                      onClick={() => this.props.setChosenCard(cardInModal.name)}
                    >
                      I'd like to choose this card!
                    </button>
                  )}
                </ModalCardSelectContainer>
              </ModalContainer>
            </div>
          )}
        </Modal>

        <NextButtonContainer>
          <NextButton
            // disabled={chosenCard !== null}
            handleNext={this.handleNext}
            title={'Get a Summary of This Session'}
          />
        </NextButtonContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    chosenBenefits: state.benefits.chosenBenefits,
    creditScoreRage: state.quiz.creditScoreRage,
    chosenCard: state.cardChoice.chosenCard
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setChosenCard: val => dispatch(actionCreators.setChosenCard(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withStyles(styles)(CardRecommendation)));

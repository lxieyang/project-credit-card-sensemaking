import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import Screen from '../../Screen';
import NextButton from '../../../components/UI/Buttons/NextButton/NextButton';

import CardRedommendation from '../../../components/CardRecommendation/CardRecommendation';

const NextButtonContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

class NoviceCardRecommendationScreen extends Component {
  handleNext = e => {
    console.log(e);
  };

  render() {
    return (
      <Screen>
        <div className="container">
          <CardRedommendation mode={'novice'} />

          <NextButtonContainer>
            <NextButton disabled={false} handleNext={this.handleNext} />
          </NextButtonContainer>
        </div>
      </Screen>
    );
  }
}

export default withRouter(NoviceCardRecommendationScreen);

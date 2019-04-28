import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

import ChooseBenefits from '../../../components/ChooseBenefits/ChooseBenefits';

import appRoutes from '../../../shared/appRoutes';

import Screen from '../../Screen';
import NextButton from '../../../components/UI/Buttons/NextButton/NextButton';

const NextButtonContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

class ExpertChooseCategoriesScreen extends Component {
  handleNext = e => {
    this.props.history.push(appRoutes.expertCardRecommendation);
  };

  render() {
    return (
      <Screen>
        <div className="container">
          <ChooseBenefits mode={'expert'} />

          <NextButtonContainer>
            <NextButton disabled={false} handleNext={this.handleNext} />
          </NextButtonContainer>
        </div>
      </Screen>
    );
  }
}

export default withRouter(ExpertChooseCategoriesScreen);

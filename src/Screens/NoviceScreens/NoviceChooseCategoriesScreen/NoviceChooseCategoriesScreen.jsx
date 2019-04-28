import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import ChooseBenefits from '../../../components/ChooseBenefits/ChooseBenefits';

import styled from 'styled-components';
// import appRoutes from '../../../shared/appRoutes';

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

class NoviceChooseCategoriesScreen extends Component {
  handleNext = e => {
    console.log(e);
  };

  render() {
    return (
      <Screen>
        <div className="container">
          <ChooseBenefits mode={'novice'} />

          <NextButtonContainer>
            <NextButton disabled={false} handleNext={this.handleNext} />
          </NextButtonContainer>
        </div>
      </Screen>
    );
  }
}

export default withRouter(NoviceChooseCategoriesScreen);

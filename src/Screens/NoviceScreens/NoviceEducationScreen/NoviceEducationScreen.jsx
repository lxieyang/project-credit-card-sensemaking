import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import NextButton from '../../../components/UI/Buttons/NextButton/NextButton';
import appRoutes from '../../../shared/appRoutes';
import Screen from '../../Screen';

const NextButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

class NoviceEducationScreen extends Component {
  handleNext = event => {
    console.log(event);
  };

  render() {
    return (
      <Screen>
        <div className="container">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '400px',
              width: '100%'
            }}
          >
            edu material
          </div>

          <NextButtonContainer>
            <NextButton disabled={false} handleNext={this.handleNext} />
          </NextButtonContainer>
        </div>
      </Screen>
    );
  }
}

export default NoviceEducationScreen;

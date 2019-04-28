import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import NextButton from '../../../../components/UI/Buttons/NextButton/NextButton';
import styled from 'styled-components';

import appRoutes from '../../../../shared/appRoutes';

const NextButtonContainer = styled.div`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

class ComponentTemplate extends Component {
  handleNext = event => {
    this.props.history.push(appRoutes.noviceChooseBenefitCategory);
  };

  render() {
    return (
      <React.Fragment>
        {this.props.children}
        <NextButtonContainer>
          <NextButton disabled={false} handleNext={this.handleNext} />
        </NextButtonContainer>
      </React.Fragment>
    );
  }
}

export default withRouter(ComponentTemplate);

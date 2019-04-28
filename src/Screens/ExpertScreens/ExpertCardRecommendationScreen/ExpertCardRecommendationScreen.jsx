import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Screen from '../../Screen';

import CardRedommendation from '../../../components/CardRecommendation/CardRecommendation';

class ExpertCardRecommendationScreen extends Component {
  handleNext = e => {
    console.log(e);
  };

  render() {
    return (
      <Screen>
        <div className="container">
          <CardRedommendation mode={'expert'} />
        </div>
      </Screen>
    );
  }
}

export default withRouter(ExpertCardRecommendationScreen);

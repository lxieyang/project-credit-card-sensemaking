import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Screen from '../../Screen';

import CardRedommendation from '../../../components/CardRecommendation/CardRecommendation';

class NoviceCardRecommendationScreen extends Component {
  render() {
    return (
      <Screen>
        <div className="container">
          <CardRedommendation mode={'novice'} />
        </div>
      </Screen>
    );
  }
}

export default withRouter(NoviceCardRecommendationScreen);

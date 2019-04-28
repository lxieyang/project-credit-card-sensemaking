import React, { Component } from 'react';
import styled from 'styled-components';
import { benefitCategories } from '../../shared/constants';

class CardRecommendation extends Component {
  render() {
    return <React.Fragment>card rec {this.props.mode}</React.Fragment>;
  }
}

export default CardRecommendation;

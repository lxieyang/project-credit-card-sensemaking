import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import qs from 'query-string';
import Screen from '../Screen';

import appRoutes from '../../shared/appRoutes';

class UserCategoryRecScreen extends Component {
  state = {
    recUserType: null
  };

  componentDidMount() {
    const parse = qs.parse(this.props.location.search);
    if (parse.rec !== undefined && parse.rec !== null) {
      this.setState({ recUserType: parse.rec });
    } else {
      this.setState({ recUserType: null });
    }
  }

  render() {
    const { recUserType } = this.state;
    return (
      <Screen>
        <div className="container">
          <h2>
            Based on your answers, we would recommend choosing the {recUserType}{' '}
            interface:
          </h2>
        </div>
      </Screen>
    );
  }
}

export default withRouter(UserCategoryRecScreen);

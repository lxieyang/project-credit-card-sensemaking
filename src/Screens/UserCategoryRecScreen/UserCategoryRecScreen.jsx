import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Screen from '../Screen';

import appRoutes from '../../shared/appRoutes';

class UserCategoryRecScreen extends Component {
  render() {
    return (
      <Screen>
        <div className="container">
          <h1>Recommendation page</h1>
        </div>
      </Screen>
    );
  }
}

export default UserCategoryRecScreen;

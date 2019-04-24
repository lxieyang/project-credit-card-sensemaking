import React, { Component } from 'react';
import { withRouter } from 'react-router';

import { Link } from 'react-router-dom';
import ArrowLeftCircle from 'mdi-material-ui/ArrowLeftCircle';
import styled from 'styled-components';

const Topbar = styled.header`
  position: fixed;
  left: 0;
  right: 0;
  height: 60px;
  background-image: linear-gradient(90deg, #5bb4c0, #63c9a4);
  box-shadow: rgba(50, 50, 93, 0.2) 0px 1px 15px;
  display: flex;
  align-items: center;
`;

const Main = styled.main`
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 72px;
`;

class Screen extends Component {
  render() {
    return (
      <div>
        <Topbar>
          <div style={{ marginLeft: '8px' }}>
            <ArrowLeftCircle
              style={{ fontSize: '44px', color: 'white', cursor: 'pointer' }}
              onClick={() => {
                this.props.history.goBack();
              }}
            />
          </div>
          <div style={{ flex: 1 }} />
          <div />
        </Topbar>
        <Main>{this.props.children}</Main>
      </div>
    );
  }
}

export default withRouter(Screen);

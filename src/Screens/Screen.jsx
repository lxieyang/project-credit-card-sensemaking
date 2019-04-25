import React, { Component } from 'react';
import { withRouter } from 'react-router';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import { ArrowLeftCircle } from 'mdi-material-ui';
import './Screen.css';

import appRoutes from '../shared/appRoutes';

const LogoContainer = styled.div`
  margin-left: 8px;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SwitchButtonContainer = styled.div`
  margin-right: 16px;
  cursor: pointer;
  font-weight: 600;
  color: #fff;
  transition: all 0.1s ease-in;

  &:hover {
    text-shadow: 1px 0px 1px #ccc;
  }
`;

class Screen extends Component {
  state = {
    mode: null
  };

  componentDidMount() {
    let paths = window.location.pathname.split('/').filter(str => str !== '');
    if (paths.indexOf('novice') !== -1) {
      this.setState({ mode: 'novice' });
    } else if (paths.indexOf('expert') !== -1) {
      this.setState({ mode: 'expert' });
    }
  }

  handleSwitch = e => {
    if (this.state.mode === 'novice') {
      this.props.history.push(appRoutes.expertChooseBenefitCategory);
    } else if (this.state.mode === 'expert') {
      this.props.history.push(appRoutes.noviceEducation);
    }
  };

  render() {
    const { mode } = this.state;
    return (
      <div>
        <div className="Topbar">
          <LogoContainer>
            <ArrowLeftCircle
              style={{ fontSize: '44px', color: 'white', cursor: 'pointer' }}
              onClick={() => {
                this.props.history.goBack();
              }}
            />
          </LogoContainer>
          <div style={{ flex: 1 }} />
          {mode !== null && (
            <SwitchButtonContainer onClick={this.handleSwitch}>
              Switch to {mode === 'novice' ? 'Expert' : 'Novice'} View
            </SwitchButtonContainer>
          )}
        </div>
        <div className="Main">{this.props.children}</div>
      </div>
    );
  }
}

export default withRouter(Screen);

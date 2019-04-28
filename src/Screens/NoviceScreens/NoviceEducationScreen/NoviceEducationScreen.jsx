import React, { Component } from 'react';
import { Route, NavLink as Link, withRouter } from 'react-router-dom';
// import { css } from 'glamor';
import { AnimatedSwitch, spring } from 'react-router-transition';
import styled from 'styled-components';
// import NextButton from '../../../components/UI/Buttons/NextButton/NextButton';
import appRoutes from '../../../shared/appRoutes';
import Screen from '../../Screen';

import Overview from './Screens/Overview';
import CreditCardInfo from './Screens/CreditCardInfo';
import CreditScoreInfo from './Screens/CreditScoreInfo';
import ProTips from './Screens/ProTips';

import './NoviceEducationScreen.css';

function zoom(val) {
  return spring(val, {
    stiffness: 135,
    damping: 15
  });
}

const switchConfig = {
  atEnter: {
    opacity: 0,
    offset: -50
  },
  atLeave: {
    opacity: 0,
    offset: zoom(50)
  },
  atActive: {
    opacity: 1,
    offset: zoom(0)
  }
};

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateY(${styles.offset}px)`
  };
}

const TitleContainer = styled.div`
  margin-top: 20px;
`;

// const NextButtonContainer = styled.div`
//   margin-top: 4rem;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin-bottom: 30px;
// `;

class NoviceEducationScreen extends Component {
  handleNext = event => {
    console.log(event);
  };

  render() {
    return (
      <Screen>
        <div className="container">
          <div>
            <TitleContainer>
              <h1>Let's learn more about credit cards!</h1>
            </TitleContainer>
            <div
              style={{
                display: 'flex',
                justifyContent: null,
                alignItems: 'center',
                height: '60px',
                width: '100%'
              }}
            >
              <Link
                to={`${this.props.match.url}`}
                exact={true}
                className="edu-route"
                activeClassName="active-edu-route"
              >
                Overview
              </Link>
              <Link
                to={`${this.props.match.url}/creditcard`}
                className="edu-route"
                activeClassName="active-edu-route"
              >
                Credit Card
              </Link>

              <Link
                to={`${this.props.match.url}/creditscore`}
                className="edu-route"
                activeClassName="active-edu-route"
              >
                Credit Score
              </Link>

              <Link
                to={`${this.props.match.url}/protips`}
                className="edu-route"
                activeClassName="active-edu-route"
              >
                Pro Tips
              </Link>
            </div>
            <div style={{ marginTop: 20 }}>
              <AnimatedSwitch
                {...switchConfig}
                mapStyles={mapStyles}
                className="switch-wrapper-novice-edu"
              >
                <Route
                  exact={true}
                  path={`${this.props.match.url}`}
                  component={Overview}
                />
                <Route
                  path={`${this.props.match.url}/creditcard`}
                  component={CreditCardInfo}
                />
                <Route
                  path={`${this.props.match.url}/creditscore`}
                  component={CreditScoreInfo}
                />
                <Route
                  path={`${this.props.match.url}/protips`}
                  component={ProTips}
                />
              </AnimatedSwitch>
            </div>
          </div>

          {/* <NextButtonContainer>
            <NextButton disabled={false} handleNext={this.handleNext} />
          </NextButtonContainer> */}
        </div>
      </Screen>
    );
  }
}

export default withRouter(NoviceEducationScreen);

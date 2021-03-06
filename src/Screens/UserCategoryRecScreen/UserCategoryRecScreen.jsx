import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import qs from 'query-string';
import Screen from '../Screen';

import appRoutes from '../../shared/appRoutes';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

const CategoryContainer = styled.div`
  cursor: pointer;

  margin-top: 20px;
  margin-bottom: 20px;
  width: 90%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 10px;

  transition: all 0.1s ease-in;

  &:hover {
    background-color: rgba(0, 123, 255, 0.6);
  }
`;

const CategoryCard = styled.div`
  width: 100%;
  background-color: #fff;
  /* border-radius: 10px; */
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const CategoryTitle = styled.div`
  height: 60px;
  width: 100%;
  font-weight: 600;
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryContentContainer = styled.div`
  /* height: 200px; */
  width: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const CategoryContentPrompt = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CategoryContent = styled.div`
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

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

  handleCategoryClick = (event, category) => {
    this.setState({ recUserType: category });
    if (category === 'novice') {
      this.props.setChosenUserType('novice');
      this.props.history.push(appRoutes.noviceEducation);
    } else if (category === 'expert') {
      this.props.setChosenUserType('expert');
      this.props.history.push(appRoutes.expertChooseBenefitCategory);
    }
  };

  render() {
    const { recUserType } = this.state;
    return (
      <Screen>
        <div className="container">
          <br />
          <h2>
            Based on your answers, we would recommend choosing the{' '}
            {recUserType || 'novice'} interface:
          </h2>

          <div className="row" style={{ marginTop: '40px' }}>
            <div
              className="col-md-6"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <CategoryContainer
                style={{
                  backgroundColor:
                    recUserType === 'novice' ? 'rgba(0, 123, 255, 0.6)' : null
                }}
                onClick={e => this.handleCategoryClick(e, 'novice')}
              >
                <CategoryCard>
                  <CategoryTitle
                    style={{ backgroundColor: '#63C9A4', color: '#fff' }}
                  >
                    Novice
                  </CategoryTitle>
                  <CategoryContentContainer>
                    <CategoryContentPrompt>
                      <h5>
                        We think that at least of one these categories describes
                        you:
                      </h5>
                    </CategoryContentPrompt>

                    <CategoryContent>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Minimal Credit History</li>
                        <li>Limited Credit Score</li>
                        <li>Learning about Credit Card Benefits</li>
                      </ul>
                    </CategoryContent>
                  </CategoryContentContainer>
                </CategoryCard>
              </CategoryContainer>
            </div>

            <div
              className="col-md-6"
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <CategoryContainer
                style={{
                  backgroundColor:
                    recUserType === 'expert' ? 'rgba(0, 123, 255, 0.6)' : null
                }}
                onClick={e => this.handleCategoryClick(e, 'expert')}
              >
                <CategoryCard>
                  <CategoryTitle
                    style={{ backgroundColor: '#ffc107', color: '#000' }}
                  >
                    Expert
                  </CategoryTitle>
                  <CategoryContentContainer>
                    <CategoryContentPrompt>
                      <h5>
                        We think that at least of one these categories describes
                        you:
                      </h5>
                    </CategoryContentPrompt>
                    <CategoryContent>
                      <ul style={{ fontSize: '1.2rem' }}>
                        <li>Extensive Credit History</li>
                        <li>High Credit Score</li>
                        <li>Take Advantage of Credit Card Benefits</li>
                      </ul>
                    </CategoryContent>
                  </CategoryContentContainer>
                </CategoryCard>
              </CategoryContainer>
            </div>
          </div>
        </div>
      </Screen>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setChosenUserType: val => dispatch(actionCreators.setChosenUserType(val))
  };
};

export default withRouter(
  connect(
    null,
    mapDispatchToProps
  )(UserCategoryRecScreen)
);

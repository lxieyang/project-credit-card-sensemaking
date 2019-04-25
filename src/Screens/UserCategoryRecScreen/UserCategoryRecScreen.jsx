import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import qs from 'query-string';
import Screen from '../Screen';

import appRoutes from '../../shared/appRoutes';

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
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
  };

  render() {
    const { recUserType } = this.state;
    return (
      <Screen>
        <div className="container">
          <h2>
            Based on your answers, we would recommend choosing the {recUserType}{' '}
            interface:
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
                    <p style={{ color: 'red' }}>what to put here</p>
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
                    <p style={{ color: 'red' }}>what to put here</p>
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

export default withRouter(UserCategoryRecScreen);

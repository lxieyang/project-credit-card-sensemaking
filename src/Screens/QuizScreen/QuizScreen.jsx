import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Radio } from 'antd';
import styled from 'styled-components';
import Screen from '../Screen';
import { incomeRanges, creditScoreRanges } from '../../shared/constants';
import NextButton from '../../components/UI/Buttons/NextButton/NextButton';

import appRoutes from '../../shared/appRoutes';

const AlertContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const QuizQuestionContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 50px;
  padding: 30px 30px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

const RadioGroupContainer = styled.div`
  margin-top: 20px;
`;

const NextButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

class QuizScreen extends Component {
  state = {
    incomeRange: null,
    creditScoreRage: null
  };

  handleIncomeRangeChange = event => {
    let val = event.target.value;
    if (this.state.incomeRange !== val) {
      this.setState({ incomeRange: val });
    } else {
      this.setState({ incomeRange: null });
    }
  };

  handleCreditScoreRangeChange = event => {
    let val = event.target.value;
    if (this.state.creditScoreRage !== val) {
      this.setState({ creditScoreRage: val });
    } else {
      this.setState({ creditScoreRage: null });
    }
  };

  handleNext = event => {
    this.props.history.push(
      appRoutes.userTypeRecommendation + '?rec=' + 'novice'
    );
  };

  render() {
    const { incomeRange, creditScoreRage } = this.state;

    return (
      <Screen>
        <div className="container">
          <AlertContainer>
            <div className="alert alert-success" role="alert">
              <h4 className="alert-heading">Rest assured!</h4>
              <p>
                This application is completely client-side, which means we do
                NOT collect any of your personal data.
              </p>
            </div>
          </AlertContainer>

          <QuizQuestionContainer>
            <h2>1. Annual Income</h2>
            <h6>Please specify you annual income range:</h6>
            <RadioGroupContainer>
              <Radio.Group
                value={incomeRange}
                buttonStyle="solid"
                onChange={this.handleIncomeRangeChange}
              >
                {incomeRanges.map((range, idx) => {
                  return (
                    <Radio.Button value={range} key={idx}>
                      {range}
                    </Radio.Button>
                  );
                })}
              </Radio.Group>
            </RadioGroupContainer>
          </QuizQuestionContainer>

          <QuizQuestionContainer>
            <h2>2. FICO Credit Score</h2>
            <h6>Please specify you FICO credit score range:</h6>
            <RadioGroupContainer>
              <Radio.Group
                value={creditScoreRage}
                buttonStyle="solid"
                onChange={this.handleCreditScoreRangeChange}
              >
                {creditScoreRanges.map((range, idx) => {
                  return (
                    <Radio.Button value={range} key={idx}>
                      {range}
                    </Radio.Button>
                  );
                })}
              </Radio.Group>
            </RadioGroupContainer>
          </QuizQuestionContainer>

          <NextButtonContainer>
            <NextButton
              disabled={incomeRange === null || creditScoreRage === null}
              handleNext={this.handleNext}
            />
          </NextButtonContainer>
        </div>
      </Screen>
    );
  }
}

export default withRouter(QuizScreen);

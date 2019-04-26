import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import appRoutes from '../../../shared/appRoutes';
import { benefitCategories } from '../../../shared/constants';
import CheckCircle from 'mdi-material-ui/CheckCircle';

import Screen from '../../Screen';

import NextButton from '../../../components/UI/Buttons/NextButton/NextButton';

const PromptContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const BenefitSContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const BenefitCard = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  margin: 10px;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);

  position: relative;
`;

const BenefitCardChosenContainer = styled.div`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #28a745;
`;

const BenefitCardIconContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const BenefitCardIcon = styled.img`
  max-height: 80%;
  max-width: 80%;
  width: auto;
  height: auto;
`;

const BenefitCardTitleContainer = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NextButtonContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

class ExpertChooseCategoriesScreen extends Component {
  state = {
    chosenBenefits: benefitCategories.reduce((obj, v) => {
      obj[v.title] = false;
      return obj;
    }, {})
  };

  toggleBenefitChosenStatus = title => {
    let benefits = { ...this.state.chosenBenefits };
    benefits[title] = !benefits[title];
    this.setState({ chosenBenefits: benefits });
  };

  handleNext = e => {
    console.log(e);
  };

  render() {
    const { chosenBenefits } = this.state;

    return (
      <Screen>
        <div className="container">
          <PromptContainer>
            <h3>Select which benefits are the most important to you:</h3>
          </PromptContainer>

          <BenefitSContainer>
            {benefitCategories.map((cat, idx) => {
              return (
                <BenefitCard
                  key={idx}
                  style={{
                    outline:
                      chosenBenefits[cat.title] === true
                        ? '#28a745 solid 3px'
                        : null
                  }}
                  onClick={() => this.toggleBenefitChosenStatus(cat.title)}
                >
                  {chosenBenefits[cat.title] === true && (
                    <BenefitCardChosenContainer>
                      <CheckCircle sytle={{ fontSize: 22 }} />
                    </BenefitCardChosenContainer>
                  )}

                  <BenefitCardIconContainer>
                    <BenefitCardIcon src={cat.icon} />
                  </BenefitCardIconContainer>
                  <BenefitCardTitleContainer>
                    {cat.title}
                  </BenefitCardTitleContainer>
                </BenefitCard>
              );
            })}
          </BenefitSContainer>

          <NextButtonContainer>
            <NextButton disabled={false} handleNext={this.handleNext} />
          </NextButtonContainer>
        </div>
      </Screen>
    );
  }
}

export default ExpertChooseCategoriesScreen;

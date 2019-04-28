import React, { Component } from 'react';
import styled from 'styled-components';
import { benefitCategories } from '../../shared/constants';
import CheckCircle from 'mdi-material-ui/CheckCircle';
import HelpCircleOutline from 'mdi-material-ui/HelpCircleOutline';

import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import { withStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';

const PromptContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
`;

const BenefitsContainer = styled.div`
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
  transition: all 0.1s ease-in;
`;

const BenefitCardQuestionMarkContainer = styled.div`
  position: absolute;
  top: 3px;
  right: 3px;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(220, 220, 220);
  transition: all 0.1s ease-in;
  cursor: default;

  &:hover {
    color: rgb(180, 180, 180);
  }
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

const styles = theme => ({
  htmlTooltip: {
    // backgroundColor: '#f5f5f9',
    // color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(14),
    border: '1px solid #dadde9',
    '& b': {
      fontWeight: theme.typography.fontWeightMedium
    }
  }
});

class ChooseBenefits extends Component {
  // state = {
  //   chosenBenefits: benefitCategories.reduce((obj, v) => {
  //     obj[v.title] = false;
  //     return obj;
  //   }, {})
  // };

  toggleBenefitChosenStatus = title => {
    let benefits = { ...this.props.chosenBenefits };
    benefits[title] = !benefits[title];
    this.props.setChosenBenefits(benefits);
    // this.setState({ chosenBenefits: benefits });
  };

  render() {
    const { chosenBenefits, mode } = this.props;

    return (
      <React.Fragment>
        <PromptContainer>
          <h3>Select which benefits are the most important to you:</h3>
        </PromptContainer>

        <BenefitsContainer>
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

                {mode === 'novice' && (
                  <Tooltip
                    classes={{
                      tooltip: this.props.classes.htmlTooltip
                    }}
                    title={
                      <React.Fragment>
                        <ul
                          style={{
                            paddingLeft: '1rem'
                            // listStyle: 'none'
                          }}
                        >
                          {cat.description.map((des, idx) => (
                            <li key={idx}>{des}</li>
                          ))}
                        </ul>
                      </React.Fragment>
                    }
                  >
                    <BenefitCardQuestionMarkContainer>
                      <HelpCircleOutline sytle={{ fontSize: 22 }} />
                    </BenefitCardQuestionMarkContainer>
                  </Tooltip>
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
        </BenefitsContainer>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    chosenBenefits: state.benefits.chosenBenefits
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setChosenBenefits: val => dispatch(actionCreators.setChosenBenefits(val))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ChooseBenefits));

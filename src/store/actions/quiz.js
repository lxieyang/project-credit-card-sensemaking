import * as actionTypes from './actionTypes';

export const setSelfRatedExpertise = value => {
  return {
    type: actionTypes.SET_SELF_RATED_EXPERTISE,
    val: value
  };
};

export const setAnnualIncomeRange = value => {
  return {
    type: actionTypes.SET_ANNUAL_INCOME_RANGE,
    val: value
  };
};

export const setCreditScoreRange = value => {
  return {
    type: actionTypes.SET_CREDIT_SCORE_RANGE,
    val: value
  };
};

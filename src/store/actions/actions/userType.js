import * as actionTypes from '../actionTypes';

export const setRecommendedUserType = value => {
  return {
    type: actionTypes.SET_RECOMMENDED_USER_TYPE,
    val: value
  };
};

export const setChosenUserType = value => {
  return {
    type: actionTypes.SET_CHOSEN_USER_TYPE,
    val: value
  };
};

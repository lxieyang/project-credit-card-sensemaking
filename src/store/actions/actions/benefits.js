import * as actionTypes from '../actionTypes';

export const setChosenBenefits = value => {
  return {
    type: actionTypes.SET_CHOSEN_BENEFITS,
    val: value
  };
};

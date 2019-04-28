import * as actionTypes from '../actionTypes';

export const setChosenCard = value => {
  return {
    type: actionTypes.SET_CHOSEN_CARD,
    val: value
  };
};

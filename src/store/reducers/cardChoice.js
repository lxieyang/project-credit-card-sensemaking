import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utilities';

const initialState = {
  chosenCard: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHOSEN_CARD:
      return updateObject(state, { chosenCard: action.val });
    default:
      break;
  }
  return state;
};

export default reducer;

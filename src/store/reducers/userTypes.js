import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utilities';

const initialState = {
  recommendedUserType: null,
  chosenUserType: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_RECOMMENDED_USER_TYPE:
      return updateObject(state, { recommendedUserType: action.val });
    case actionTypes.SET_CHOSEN_USER_TYPE:
      return updateObject(state, { chosenUserType: action.val });
    default:
      break;
  }
  return state;
};

export default reducer;

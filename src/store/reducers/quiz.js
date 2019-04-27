import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utilities';

const initialState = {
  selfRating: null,
  incomeRange: null,
  creditScoreRage: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_SELF_RATED_EXPERTISE:
      return updateObject(state, { selfRating: action.val });
    case actionTypes.SET_ANNUAL_INCOME_RANGE:
      return updateObject(state, { incomeRange: action.val });
    case actionTypes.SET_CREDIT_SCORE_RANGE:
      return updateObject(state, { creditScoreRage: action.val });
    default:
      break;
  }
  return state;
};

export default reducer;

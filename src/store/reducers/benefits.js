import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utilities';
import { benefitCategories } from '../../shared/constants';

const initialState = {
  chosenBenefits: benefitCategories.reduce((obj, v) => {
    obj[v.title] = false;
    return obj;
  }, {})
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CHOSEN_BENEFITS:
      return updateObject(state, { chosenBenefits: action.val });
    default:
      break;
  }
  return state;
};

export default reducer;

import { SET_UNIT } from '../actions/actionTypes';

const initialState = {
  value: 'imperial'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_UNIT:
      return {
        value: action.value
      };
    default:
      return state;
  }
};

export default reducer;

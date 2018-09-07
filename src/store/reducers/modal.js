import { SET_MODAL } from '../actions/actionTypes';

const initialState = {
  value: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODAL:
      return {
        value: action.value
      };
    default:
      return state;
  }
};

export default reducer;

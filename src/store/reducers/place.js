import { SET_PLACE } from '../actions/actionTypes';

const initialState = {
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACE:
      return action.place;
    default:
      return state;
  }
};

export default reducer;

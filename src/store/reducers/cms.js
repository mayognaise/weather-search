import { SET_CMS } from '../actions/actionTypes';

const initialState = {
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CMS:
      return action.cms;
    default:
      return state;
  }
};

export default reducer;

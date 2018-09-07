import { UI_START_LOADING, UI_STOP_LOADING } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
  loadingType: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UI_START_LOADING:
      return {
        isLoading: true,
        loadingType: action.loadingType
      };
    case UI_STOP_LOADING:
      return {
        isLoading: false,
        loadingType: null
      };
    default:
      return state;
  }
};

export default reducer;

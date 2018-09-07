import { UI_START_LOADING, UI_STOP_LOADING } from './actionTypes';

export const uiStartLoading = (loadingType = null) => {
  return {
    type: UI_START_LOADING,
    loadingType
  };
};

export const uiStopLoading = () => {
  return {
    type: UI_STOP_LOADING
  };
};

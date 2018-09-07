import { SET_CMS } from './actionTypes';

export const loadCMS = () => async dispatch => {
  try {
    const url = '/cms.json';
    const response = await fetch(url);
    const responseBody = await response.json();
    dispatch(setCMS(responseBody));
  } catch (error) {
    console.error(error);
  }
};

export const setCMS = cms => {
  return {
    type: SET_CMS,
    cms
  };
};

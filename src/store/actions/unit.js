import { SET_UNIT } from './actionTypes';

export const setUnit = value => {
  return {
    type: SET_UNIT,
    value
  };
};

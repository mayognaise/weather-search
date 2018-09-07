import { SET_PLACE } from './actionTypes';
import { uiStartLoading, uiStopLoading } from './ui';
import { setModal } from './modal';

export const searchByCityname = name => async dispatch => {
  dispatch(uiStartLoading('city'));
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${window.encodeURI(name)}&appid=${process.env.REACT_APP_WEATHER_MAP_KEY}`;
    const response = await fetch(url);
    const responseBody = await response.json();    
    if (response.ok) {
      dispatch(setPlace(responseBody));
    } else {
      dispatch(setModal(responseBody));
    }
  } catch (error) {
    dispatch(setModal(error));
  }
  dispatch(uiStopLoading());
};

export const searchByZipcode = zipcode => async dispatch => {
  dispatch(uiStartLoading('zipcode'));
  try {
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},us&appid=${process.env.REACT_APP_WEATHER_MAP_KEY}`;
    const response = await fetch(url);
    const responseBody = await response.json();
    if (response.ok) {
      dispatch(setPlace(responseBody));
    } else {
      dispatch(setModal(responseBody));
    }
  } catch (error) {
    dispatch(setModal(error));
  }
  dispatch(uiStopLoading());
};

export const searchByGeolocation = () => dispatch => {
  dispatch(uiStartLoading('geolocation'));
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  const success = async pos => {
    try {
      const url = `http://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=${process.env.REACT_APP_WEATHER_MAP_KEY}`;
      const response = await fetch(url);
      const responseBody = await response.json();
      if (response.ok) {
        dispatch(setPlace(responseBody));
      } else {
        dispatch(setModal(responseBody));
      }
    } catch (error) {
      dispatch(setModal(error));
    }
    dispatch(uiStopLoading());
  }
  const fail = error => {
    dispatch(setModal(error));
    dispatch(uiStopLoading());
  };
  navigator.geolocation.getCurrentPosition(success, fail, options);
};

export const setPlace = place => {
  return {
    type: SET_PLACE,
    place
  };
};

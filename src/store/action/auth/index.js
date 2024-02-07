import {AUTH_FALIURE, AUTH_SUCCESS, AUTH_WATCHER} from '../../constant';

export const authWatcher = payload => {
  return {type: AUTH_WATCHER, payload};
};
export const authSuccess = payload => {
  return {type: AUTH_SUCCESS, payload};
};
export const authFaliure = payload => {
  return {type: AUTH_FALIURE, payload};
};

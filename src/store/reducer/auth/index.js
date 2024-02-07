import {AUTH_FALIURE, AUTH_SUCCESS, AUTH_WATCHER} from '../../constant';

const initialState = {
  userDataError: null,
  userDataLoader: false,
  userData: [],
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_WATCHER:
      return {
        ...state,
        userDataLoader: true,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        userDataError: null,
        userData: action.payload,
        userDataLoader: false,
      };
    case AUTH_FALIURE:
      return {
        ...state,
        userDataError: action,
        userDataLoader: false,
      };
    default:
      return state;
  }
}

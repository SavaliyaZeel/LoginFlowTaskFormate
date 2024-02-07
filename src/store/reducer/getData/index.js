import { AnyAction } from "redux";
import { GET_DATA_FALIURE, GET_DATA_SUCCESS, GET_DATA_WATCHER } from "../../constant";

const initialState = {
  getDataError: null,
  getDataLoader: false,
  getData: [],
};

export default function getDataReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case GET_DATA_WATCHER:
      return {
        ...state,
        getDataLoader: true,
      };
    case GET_DATA_SUCCESS:
      return {
        ...state,
        getDataError: null,
        getData: action.payload,
        getDataLoader: false,
      };
    case GET_DATA_FALIURE:
      return {
        ...state,
        getDataError: action,
        getDataLoader: false,
      };
    default:
      return state;
  }
}

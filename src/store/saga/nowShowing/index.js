import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { GET_DATA_WATCHER } from '../../constant';
import { getDataFaliure, getDataSuccess } from '../../action';

function* onGetData(action) {

  async function callApi() {

    const { payload } = action;

    try {
      const response = await axios.post(
        'http://3.7.81.243/projects/plie-api/public/api/events-listing', null,
        {
          headers: {
            Authorization: `Bearer ${payload.accessToken}`
          }
        }
      );
      if (response.data.success) {
        return { response: response.data.data };
      } else {
        return { error: response.data };
      }
    } catch (error) {
      return { error };
    }
  }

  const { response, error } = yield call(callApi);

  if (response) {
    yield put(getDataSuccess(response));
  } else {
    yield put(getDataFaliure(error));
  }
}

export function* getDataActionWatcher() {
  yield takeLatest(GET_DATA_WATCHER, onGetData);
}

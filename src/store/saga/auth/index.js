import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';
import {AUTH_WATCHER} from '../../constant';
import {authFaliure, authSuccess} from '../../action';

function* onGetData(action) {
  async function callApi() {
    try {
      const data = await axios.post(
        'http://3.7.81.243/projects/plie-api/public/api/login',
        action.payload,
      );
      if (data.data.success) {
        return {response: data.data};
      } else {
        return {error: data.data};
      }
    } catch (error) {
      return {error};
    }
  }

  const {response, error} = yield call(callApi);

  if (response) {
    yield put(authSuccess(response.data));
  } else {
    yield put(authFaliure(error));
  }
}

export function* authActionWatcher() {
  yield takeLatest(AUTH_WATCHER, onGetData);
}

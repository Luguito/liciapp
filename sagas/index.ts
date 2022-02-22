
import { all, takeLatest } from 'redux-saga/effects';

function* logoutSaga() {
  //window.location.href = logoutUrl({})
}

export function* rootSaga() {
  yield all([
    //takeLatest(PAYLINK_ACTIONS.INIT_POS, posSaga),
  ])
}

export default rootSaga

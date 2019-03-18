import { takeEvery, call, put, cancel, all } from "redux-saga/effects";
import * as actions from "../../drone/actions";



function* droneActionWatcher() {

    const { error, data } = yield call(
        actions.findDroneLocation
    );

    if (error) {
        console.log({ error });
        yield put({ type: actions.API_ERROR, code: error.code });
        yield cancel();
        return;
    }

    yield put({ type: actions.FETCH_DRONE_POSITION_SUCCESS, payload: data });
}

function* watchAppLoad() {
    yield all([
        takeEvery(actions.FETCH_DRONE_POSITION_PENDING, droneActionWatcher),
    ]);
}

export default [watchAppLoad];
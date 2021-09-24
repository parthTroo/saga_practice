import { call, put, takeEvery } from "redux-saga/effects";
import { getUserSuccess, GET_USER_FETCH } from "./Action";

function* workgetUsersFetch() {
	const response = yield call(
		fetch,
		"https://jsonplaceholder.typicode.com/users"
	);
	const users = yield response.json();
	yield put(getUserSuccess(users));
}

function* mysaga() {
	yield takeEvery(GET_USER_FETCH, workgetUsersFetch);
}

export default mysaga;

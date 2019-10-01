import { call, put } from 'redux-saga/effects';
import { doAddStories } from '../actions/story';
import { fetchStories } from '../api/story';
import { doFetchErrorStories } from '../actions/story';

function *handleFetchStories(action) {
	const { query } = action;
	try {
		const result = yield call(fetchStories, query);
		yield put(doAddStories(result.hits));
	} catch(error) {
		yield put(doFetchErrorStories(error));
	}
}

export {
	handleFetchStories
};
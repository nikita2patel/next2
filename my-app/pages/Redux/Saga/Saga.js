import {call, put,takeEvery} from 'redux-saga/effects';
import { DATA,} from '../Action/Action';
import {CREATE_POST,CREATE_POST_S} from '../Type'



function* PAN (action) {
	const mmm = yield call(DATA,action.item) 
	
	yield put({
		type:CREATE_POST_S,
		payload: mmm
	})
	
}



export default function* selectall(){
	yield takeEvery(CREATE_POST,PAN)

	
}




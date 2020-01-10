import {take, takeEvery, call,put, takeLatest} from 'redux-saga/effects'
import * as AT from './ActionType';
import {userValidation } from './Api'
import { fetchData} from './Actioon'

function* workerSaga(){
    console.log(" #########  worker Saga begin to prcess ###########")
   try{ 
       let response = yield call(fetchData);
       console.log("Call Api FetchData, res:",response.data);
       console.log("Saga dispatch fetchData success:",yield put({type:AT.FETCH_DATA_OK, data:response.data}))
   }
   catch(error){
    yield put({type:AT.FETCH_DATA_FAILURE})
   }
}

function* rootSaga(){
    console.log("########### root saga initiated ###########");
    console.log("Saga receive loginRqst",yield take(AT.USER_LOGIN_REQUEST));
    console.log("Saga verify user:",yield call(userValidation,"vz"));
    console.log("Saga dispath action",yield put({type: AT.USER_AUTH_OK}));
    
    //only when user login success then begin to fetch data
    console.log("Saga takeLatest fetchData Rqst",yield takeLatest(AT.FETCH_DATA, workerSaga));
}

export { rootSaga }

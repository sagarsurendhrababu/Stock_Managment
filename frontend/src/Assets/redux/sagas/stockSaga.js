import {put,call,takeEvery} from 'redux-saga/effects';
import axios from 'axios';

import {fetchStockRequest,
    fetchStockSucess,
    fetchStockFailure,
    addStockRequest,
    addStockSucess,
    addStockFailure } from '../features/stockSlice';


export function* fetchStockSaga(){
    try{
        const response = yield call(axios.get,'/api/stocks')
        yield put(fetchStockSucess(response.data))
    }catch(error){
        yield put(fetchStockFailure(error.message))
    }
}

export function* addStockSaga(action){
    try{
        const response = yield call(axios.post,'/api/stocks',action.payload);
        yield put(addStockSucess(response.data))
    }catch(error){
        yield put(addStockFailure(error.message))
    }  
}

export default function* watchStockActions(){
    yield takeEvery(fetchStockRequest.type, fetchStockSaga);
    yield takeEvery(addStockRequest.type, addStockSaga);
}
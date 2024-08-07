import {put,call,takeEvery} from 'redux-saga/effects';
import axios from 'axios'
import { fetchStockRequest } from '../features/stockSlice';

export function* fetchStockSaga(){

}

export function* addStockSaga(){
    
}

export default function* watchStockActions(){
    yield takeEvery(fetchStockRequest.type, fetchStockSaga);
    yield takeEvery(addStockRequest.type, addStockSaga);
}
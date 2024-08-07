import {all} from 'redux-saga/effects'
import watchStockActions from './sagas/stockSaga';

export default function* rootSaga(){
    yield all([
        watchStockActions(),
    ]);
}
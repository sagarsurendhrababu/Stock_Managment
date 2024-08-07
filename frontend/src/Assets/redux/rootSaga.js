import {all} from 'redux-saga/effect'

export default function* rootSaga(){
    yield all([
        watchStockActions(),
    ]);
}
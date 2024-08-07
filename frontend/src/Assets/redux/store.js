import {configureStore} from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSaga';
import stockSlice from './features/stockSlice';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
    reducer:{
        stock:stockSlice,
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleWare),
})
sagaMiddleWare.run(rootSaga)

export default store
import { legacy_createStore , applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './Reducer/index';
import Saga from './Saga/Saga'
import {createWrapper} from 'next-redux-wrapper'


const sagaMiddleware = createSagaMiddleware();
export  const store = legacy_createStore(rootReducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(Saga);
const makeStore  = () =>store
export const wrapper = createWrapper(makeStore)
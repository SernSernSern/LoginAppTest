import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducer';
import rootSaga from '../sagas';

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(rootReducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(rootSaga),
  };
};

export default configureStore;

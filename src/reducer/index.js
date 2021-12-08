import {combineReducers} from 'redux';
import login from './loginReducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  login: login,
  form: formReducer,
});

export default rootReducer;

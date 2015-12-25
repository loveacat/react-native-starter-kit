/**
 * Created by Yun on 2015-12-21.
 */
import { combineReducers } from 'redux';

import sessionReducer from './modules/session';

var initialState={text:'hello world'}

function todoAppReducer(state = initialState, action) {
  switch (action.type) {
  case 'SET_VALUE':
    return Object.assign({}, state, {
      text: action.text
    }); 
  default:
    return state;
  }
}


export default combineReducers({
  text: todoAppReducer,
});

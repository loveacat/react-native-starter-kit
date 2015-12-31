/**
 * Created by Yun on 2015-12-21.
 */
import { createAction, handleActions } from 'redux-actions';

// Action types;
export const INITIAL_OVER = 'app/pages/Login/initial_over';
export const SET_PHONED_LOADED ='app/pages/Login/set_phoneloaded'
export const SET_VALIDATE_LOADED ='app/pages/Login/set_validateloaded'

// Initial state
const initialState = {phoneloaded:false,validateloaded:false};

// reducer
const reducer = handleActions({
  [INITIAL_OVER]: (state, action) => {
  	console.log('action payload'+action.payload)
    return action.payload;
  },
  [SET_PHONED_LOADED]:(state,action)=>{
  	 let curstate = state.phoneloaded
  	console.log('action payload'+action.payload)
  	return Object.assign({},state,{phoneloaded:action.payload});
  },
  [SET_VALIDATE_LOADED]:(state,action)=>{
  	 let curstate = state.phoneloaded
  	console.log('action payload'+action.payload)
  	return Object.assign({},state,{validateloaded:action.payload});
  },
}, initialState);

export default reducer;

// action creators:
export const initialOver = createAction(INITIAL_OVER);
export const setphoneLoad = createAction(SET_PHONED_LOADED);
export const setvalidateLoad = createAction(SET_VALIDATE_LOADED);

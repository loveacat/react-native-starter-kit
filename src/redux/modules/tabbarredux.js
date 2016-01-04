/**
 * Created by Yun on 2015-12-21.
 */
import { createAction, handleActions } from 'redux-actions';

// Action types;
export const INITIAL_OVER = 'app/pages/Tabbar/initial_over';

const SET_SELETED_VALUE = 'app/pages/Tabbar/set_seleted_value'
// Initial state
const initialState = {selectedTab:'我'};

// reducer
const reducer = handleActions({
  [INITIAL_OVER]: (state, action) => {
  	console.log('action payload'+action.payload)
    return action.payload;
  },
  [SET_SELETED_VALUE]:(state,action)=>{
  	return Object.assign({},state,{selectedTab:action.payload});
  }
}, initialState);

export default reducer;

// action creators:
export const setSeletedValue = createAction(SET_SELETED_VALUE);



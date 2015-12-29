/**
 * Created by Yun on 2015-12-21.
 */
import { createAction, handleActions } from 'redux-actions';

// Action types;
export const INITIAL_OVER = 'app/session/initial_over';

const SET_VALUE = 'app/session/set_value'
// Initial state
const initialState = 'loveacat';

// reducer
const reducer = handleActions({
  [INITIAL_OVER]: (state, action) => {
  	console.log('action payload'+action.payload)
    return action.payload;
  },
}, initialState);

export default reducer;

// action creators:
export const initialOver = createAction(INITIAL_OVER);



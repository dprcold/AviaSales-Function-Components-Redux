import { combineReducers } from 'redux';

import { uiReducer } from './reducers/uiReducer';
import { fetchReducer } from './reducers/fetchReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
  fetch: fetchReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

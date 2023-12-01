import { combineReducers } from 'redux';

import { uiReducer } from './reducers/uiReducer';

export const rootReducer = combineReducers({
  ui: uiReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;

import { combineReducers } from 'redux';
import authReducer from './auth';
import customerReducer from './customer';
import planReducer from './plans';

export type RootState = ReturnType<typeof rootReducer>;

const appReducer = combineReducers({
  auth: authReducer,
  customer: customerReducer,
  plans: planReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;

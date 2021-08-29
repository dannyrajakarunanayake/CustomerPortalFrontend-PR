import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../util/store';
import CustomerAPI, { LoginSuccessResponse } from '../util/customer-api';

type InitialState = {
  loading?: boolean;
  hasErrors?: boolean;
  authToken: string | null;
  customerId: string | null;
  errorMessage: string | null;
};

export const initialState: InitialState = {
  loading: false,
  hasErrors: false,
  authToken: null,
  customerId: null,
  errorMessage: null,
};

type LoginPayload = {
  authToken: string;
  customerId: string;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginBegin: (state) => ({
      ...state,
      loading: true,
      errorMessage: null,
      hasErrors: false,
    }),
    loginSuccess: (state, action: PayloadAction<LoginPayload>) => ({
      ...state,
      authToken: action.payload.authToken,
      customerId: action.payload.customerId,
    }),
    loginFailure: (state, action: PayloadAction<{ errorMessage: string }>) => ({
      ...state,
      hasErrors: true,
      loading: false,
      errorMessage: action.payload.errorMessage,
    }),
    logoutBegin: (state) => ({
      ...state,
      loading: true,
      errorMessage: null,
      hasErrors: false,
    }),
    logoutSuccess: (state) => ({
      ...state,
      loading: false,
      hasErrors: false,
      authToken: null,
    }),
    logoutFailure: (state, action: PayloadAction<{ errorMessage: string }>) => ({
      ...state,
      hasErrors: true,
      loading: false,
      errorMessage: action.payload.errorMessage,
    }),
  },
});

const {
  loginBegin,
  loginSuccess,
  loginFailure,
  logoutBegin,
  logoutSuccess,
  logoutFailure,
} = authSlice.actions;

export default authSlice.reducer;

export const login = (username: string, password: string): AppThunk => async (
  //  DISPATCH THE GET AUTH REDUCER
  dispatch
) => {
  dispatch(loginBegin());
  // DISPATCH THE LOGIN API CALL
  try {
    const authentication: LoginSuccessResponse = await CustomerAPI.login(username, password);
    // CALL IT IN THE LOCAL STORAGE
    localStorage.setItem('authToken', authentication.authToken);
    localStorage.setItem('customerId', authentication.customerId);

    const auth = {
      authToken: authentication.authToken,
      customerId: authentication.customerId,
    };
    dispatch(loginSuccess(auth));
  } catch (e) {
    dispatch(loginFailure({ errorMessage: e.message }));
  }
};

// Handling Logout

export const logout = (): AppThunk => async (dispatch) => {
  dispatch(logoutBegin());
  try {
    localStorage.removeItem('authToken');
    localStorage.removeItem('customerId');
    dispatch(logoutSuccess());
  } catch (e) {
    dispatch(logoutFailure({ errorMessage: e.message }));
  }
};

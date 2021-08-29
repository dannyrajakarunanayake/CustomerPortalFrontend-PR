import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../util/store';
import PlansAPI, { PlansSuccessResponse } from '../util/customer-api';
import PlanAPI, { PlanSuccessResponse } from '../util/customer-api';
import { PlansData, PlanData } from '../types/customer';

type InitialState = {
  loading?: boolean;
  hasErrors?: boolean;
  authToken: string | null;
  planId: string | null;
  errorMessage: string | null;
  plans: Array<PlansData>;
  plan: PlanData;
};

export const initialState: InitialState = {
  loading: false,
  hasErrors: false,
  authToken: null,
  planId: null,
  errorMessage: null,
  plans: [],
  plan: {
    planId: '',
    planName: '',
    storeName: '',
    planStatus: '',
    payRemain: 0,
    paidAmount: '',
    remainingBalance: '',
    estRepaymentRemaining: '',
    approvalDate: '',
    activationDate: '',
    planDateAdded: '',
    saleAmount: '',
    deposit: '',
    loanAmount: '',
    establishmentFee: '',
    totalCreditProvided: '',
    planTerm: '',
    RepaymentFrequency: '',
    numberOfRepayments: 0,
    finalRepaymentDate: '',
    nextRepaymentDate: '',
    paymentsRemaining: 0,
    repaymentAmount: '',
  },
};

const planSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {
    fetchPlansBegin: (state) => ({
      ...state,
      loading: true,
      errorMessage: null,
      hasErrors: false,
    }),
    fetchPlansFailure: (state, action: PayloadAction<{ errorMessage: string }>) => ({
      ...state,
      hasErrors: true,
      loading: false,
      errorMessage: action.payload.errorMessage,
    }),
    fetchPlansSuccess: (
      state,
      action: PayloadAction<{
        plans: Array<PlansData>;
      }>
    ) => {
      const { plans } = action.payload;

      return {
        ...state,
        loading: false,
        plans: plans,
        errorMessage: null,
      };
    },
    getFetchPlanBegin: (state) => ({
      ...state,
      loading: true,
      errorMessage: null,
      hasErrors: false,
    }),
    getFetchPlanFailure: (state, action: PayloadAction<{ errorMessage: string }>) => ({
      ...state,
      hasErrors: true,
      loading: false,
      errorMessage: action.payload.errorMessage,
    }),
    getFetchPlanSuccess: (
      state,
      action: PayloadAction<{
        plan: PlanData;
      }>
    ) => {
      const { plan } = action.payload;

      return {
        ...state,
        loading: false,
        plan: plan,
        errorMessage: null,
      };
    },
  },
});

export const {
  getFetchPlanBegin,
  getFetchPlanFailure,
  getFetchPlanSuccess,
  fetchPlansBegin,
  fetchPlansFailure,
  fetchPlansSuccess,
} = planSlice.actions;

export default planSlice.reducer;

export const getPlans = (authToken: string): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchPlansBegin());
    const plansApi = new PlansAPI();
    const response: PlansSuccessResponse = await plansApi.plans(authToken);

    dispatch(fetchPlansSuccess(response));
  } catch (e) {
    dispatch(fetchPlansFailure({ errorMessage: e.message }));
  }
};

export const getPlan = (planId: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getFetchPlanBegin());
    const planApi = new PlanAPI();
    const response: PlanSuccessResponse = await planApi.plan(planId);
    console.log(response);
    dispatch(getFetchPlanSuccess(response));
    console.log(response);
  } catch (e) {
    dispatch(getFetchPlanFailure({ errorMessage: e.message }));
  }
};

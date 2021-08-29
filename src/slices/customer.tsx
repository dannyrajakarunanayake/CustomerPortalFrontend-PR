import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../util/store';
import CustomerAPI, { CustomerSuccessResponse } from '../util/customer-api';
import { CustomerData, NextPaymentData, OverduePaymentData } from '../types/customer';

type InitialState = {
  loading?: boolean;
  hasErrors?: boolean;
  customerId: string | null;
  authToken: string | null;
  errorMessage: string | null;
  submitSucceeded?: boolean;
  customer: CustomerData;
  nextPaymentAmount: NextPaymentData;
  overduePayment: Array<OverduePaymentData>;
};

export const initialState: InitialState = {
  loading: false,
  hasErrors: false,
  customerId: null,
  authToken: null,
  errorMessage: null,
  submitSucceeded: false,
  customer: {
    firstName: '',
    customerNumber: '',
    email: '',
    dateOfBirth: '',
    id: '',
    employerPhoneNumber: '',
    employmentType: '',
    fullName: '',
    lastName: '',
    licenceNumber: '',
    licenseExpiry: '',
    licenceState: '',
    employerName: '',
    country: '',
    confirmEmail: '',
    availableCredit: '',
    approvalLimit: '',
    accountKeepingFee: '',
    formatDateOfBirthFormat: '',
    middleName: '',
    newPassword: '',
    nextPaymentAmount: '',
    nextPaymentDate: '',
    numberOfActivePlans: '',
    otherIdExpiry: '',
    otherIncome: '',
    overDuePaymentAmount: '',
    passportNumber: '',
    passwordStatus: '',
    paymentCollectedSugarC: '',
    paymentFrequency: '',
    paymentProcessingFee: '',
    phoneMobile: '',
    postCode: '',
    repaymentAmount: '',
    residentialStatus: '',
    state: '',
    street: '',
    suburb: '',
    timeInJob: '',
    totalBalanceAmount: '',
    title: '',
    totalIncome: '',
    totalNumberOfPlans: '',
    totalOverDuePayments: '',
  },
  nextPaymentAmount: {
    nextDate: '',
    nextPayment: 0,
  },
  overduePayment: [],
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {
    fetchCustomerBegin: (state) => ({
      ...state,
      loading: true,
      errorMessage: null,
      hasErrors: false,
    }),
    fetchCustomerFailure: (state, action: PayloadAction<{ errorMessage: string }>) => ({
      ...state,
      hasErrors: true,
      loading: false,
      errorMessage: action.payload.errorMessage,
    }),
    fetchCustomerSuccess: (
      state,
      action: PayloadAction<{
        customer: CustomerData;
        nextPaymentAmount: NextPaymentData;
        overduePayment: Array<OverduePaymentData>;
      }>
    ) => {
      const { customer, nextPaymentAmount, overduePayment } = action.payload;
      return {
        ...state,
        loading: false,
        customer: customer,
        nextPaymentAmount: nextPaymentAmount,
        overduePayment: overduePayment,
        errorMessage: null,
      };
    },
    customerProfileBegin: (state) => ({
      ...state,
      loading: true,
      errorMessage: null,
      hasErrors: false,
      submitSucceeded: false,
    }),
    customerProfileFailure: (state, action: PayloadAction<{ errorMessage: string }>) => ({
      ...state,
      hasErrors: true,
      loading: false,
      submitSucceeded: false,
      errorMessage: action.payload.errorMessage,
    }),
    customerProfileSuccess: (state, action: PayloadAction<{}>) => {
      return {
        ...state,
        loading: false,
        submitSucceeded: true,
        hasErrors: false,
        errorMessage: null,
      };
    },
  },
});

export const {
  fetchCustomerBegin,
  fetchCustomerFailure,
  fetchCustomerSuccess,
  customerProfileBegin,
  customerProfileFailure,
  customerProfileSuccess,
} = customerSlice.actions;

export default customerSlice.reducer;

export const getCustomer = (customerId: string): AppThunk => async (dispatch) => {
  try {
    dispatch(fetchCustomerBegin());
    const customerApi = new CustomerAPI();
    const response: CustomerSuccessResponse = await customerApi.customer(customerId);

    dispatch(fetchCustomerSuccess(response));
  } catch (e) {
    dispatch(fetchCustomerFailure({ errorMessage: e.message }));
  }
};

export const customerProfileDetails = (customerId: string, formData: any): AppThunk => async (
  dispatch
) => {
  try {
    dispatch(customerProfileBegin());
    const customerApi = new CustomerAPI();
    const response: CustomerSuccessResponse = await customerApi.profile(customerId, formData);

    dispatch(customerProfileSuccess(response));
  } catch (e) {
    dispatch(customerProfileFailure({ errorMessage: e.message }));
  }
};

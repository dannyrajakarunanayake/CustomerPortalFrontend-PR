export type CustomerData = {
  firstName: string;
  customerNumber: string;
  email: string;
  dateOfBirth: string;
  id: string;
  employerPhoneNumber: string;
  employmentType: string;
  fullName: string;
  lastName: string;
  licenceNumber: string;
  licenseExpiry: string;
  licenceState: string;
  employerName: string;
  country: string;
  confirmEmail: string;
  availableCredit: string;
  approvalLimit: string;
  accountKeepingFee: string;
  formatDateOfBirthFormat: string;
  middleName: string;
  newPassword: string;
  nextPaymentAmount: string;
  nextPaymentDate: string;
  numberOfActivePlans: string;
  otherIdExpiry: string;
  otherIncome: string;
  overDuePaymentAmount: string;
  passportNumber: string;
  passwordStatus: string;
  paymentCollectedSugarC: string;
  paymentFrequency: string;
  paymentProcessingFee: string;
  phoneMobile: string;
  postCode: string;
  repaymentAmount: string;
  residentialStatus: string;
  state: string;
  street: string;
  suburb: string;
  timeInJob: string;
  totalBalanceAmount: string;
  title: string;
  totalIncome: string;
  totalNumberOfPlans: string;
  totalOverDuePayments: string;
};

export type NextPaymentData = {
  nextDate: string;
  nextPayment: number;
};

export type OverduePaymentData = {
  id: string;
  amount: number;
  name: string;
  purpose: string;
  lastAttempt: string;
  reasonForFailure: string;
  daysOverdue: number;
};

export type PlansData = {
  PlanName: string;
  statusCust: string;
  payRemain: number;
  balanceRemaining: string;
  paidAmount: string;
};

export type PlanData = {
  planId: string;
  planName: string;
  storeName: string;
  planStatus: string;
  payRemain: number;
  paidAmount: string;
  remainingBalance: string;
  approvalDate: string;
  planDateAdded: string;
  activationDate: string;
  saleAmount: string;
  deposit: string;
  loanAmount: string;
  establishmentFee: string;
  totalCreditProvided: string;
  estRepaymentRemaining: string;
  planTerm: string;
  RepaymentFrequency: string;
  numberOfRepayments: number;
  repaymentAmount: string;
  paymentsRemaining: number;
  finalRepaymentDate: string;
  nextRepaymentDate: string;
};

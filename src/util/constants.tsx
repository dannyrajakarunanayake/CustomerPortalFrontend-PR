export const menuItems = [
  { name: 'Dashboard', link: '/dashboard' },
  { name: 'My Plans', link: '/my-plans' },
  { name: 'Transactions', link: '/transactions' },
  { name: 'Statements', link: '/statements' },
  { name: 'Make a Payment', link: '/payments' },
];

//Messages
export const SUBTITLE = 'Welcome to Payright';

//Payment
export const PAYMENT_TITLE = 'Make a payment';
export const OVERDUE_TEXT = 'No default Payment';
export const PAYMENT_LABEL = 'Selected Account';

export const NEW_CARD_LABEL = 'Add New Card';
export const SELECT_CARD_LABEL = 'Select Payment Method';

export const ADD_CARD_HELP = 'Three digits in the back of the card';

//profile
export const AUSTRALIAN_STATES = [
  { name: 'Victoria', value: 'VIC' },
  { name: 'New South Wales', value: 'NSW' },
  { name: 'Queensland', value: 'QLD' },
  { name: 'Australian Capital Territory', value: 'ACT' },
  { name: 'South Australia', value: 'SA' },
  { name: 'Northern Territory', value: 'NT' },
  { name: 'Western Australia', value: 'WA' },
  { name: 'Tasmania', value: 'TAS' },
];

export const YEAR_LIST = [
  { name: '20', value: '20' },
  { name: '21', value: '21' },
  { name: '22', value: '22' },
  { name: '23', value: '23' },
  { name: '24', value: '24' },
  { name: '25', value: '25' },
];

export const MONTH_LIST = [
  { name: 'January', value: 'January' },
  { name: 'February', value: 'February' },
  { name: 'March', value: 'March' },
  { name: 'April', value: 'April' },
  { name: 'May', value: 'May' },
  { name: 'June', value: 'June' },
  { name: 'July', value: 'July' },
  { name: 'August', value: 'August' },
  { name: 'September', value: 'September' },
  { name: 'October', value: 'october' },
  { name: 'November', value: 'November' },
  { name: 'December', value: 'December' },
];

//Plans
export const FILTER_CHECK_BOXES = {
  Active: false,
  Incomplete: false,
  Closed: false,
  Review: false,
  Approved: false,
  Declined: false,
  Cancelled: false,
};

//Plan dashboard
export const TABLE_HEADERS = [
  { name: 'Plan Name', id: 'planName.name', sortable: true },
  { name: 'Status', id: 'statusCust', sortable: true },
  { name: 'Payments Remaining', id: 'payRemain', sortable: true },
  { name: 'Paid ($)', id: 'paidLoanAmount', sortable: true },
  { name: 'Remaining ($)', id: 'balanceRemaining', sortable: true },
  { name: '', id: 'buttonUrl', sortable: false },
];

//Plan detail
export const TABLE_DETAILS = [
  { name: '', id: 'planName.name', sortable: true },
  { name: 'Status', id: 'statusCust', sortable: true },
  { name: 'Payments Remaining', id: 'payRemain', sortable: true },
  { name: 'Paid ($)', id: 'paidLoanAmount', sortable: true },
  { name: 'Remaining ($)', id: 'balanceRemaining', sortable: true },
];

//Transactions
export const TRANSACTION_OPTIONS = [
  { name: 'Last 30 Days', value: '30' },
  { name: 'Last 60 Days', value: '60' },
  { name: 'Last 90 Days', value: '90' },
  { name: 'Last 180 Days', value: '180' },
];

//Tooltip
export const TOOLTIP_FIELDS = 'please call us on 1300 338 496 to change this detail';

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login';
import CustomerDetails from './pages/dashboard-page';
import Payment from './pages/payments/index';
import PlanDashboard from './pages/plans/planDashboard';
import PlanDetail from './pages/plans/plan-detail';
import Transactions from './pages/transactions';
import Statements from './pages/statements';
import AccountProfile from './pages/account-profile';
import ForgotPassword from './pages/forgot-password';


const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={LoginPage}></Route>
      <Route path="/dashboard" exact component={CustomerDetails}></Route>
      <Route path="/payments" exact component={Payment}></Route>
      <Route path="/my-plans" exact component={PlanDashboard}></Route>
      <Route path="/view-plan/:id" exact component={PlanDetail}></Route>
      <Route path="/transactions" exact component={Transactions}></Route>
      <Route path="/statements" exact component={Statements}></Route>
      <Route path="/account-profile" exact component={AccountProfile}></Route>
      <Route path="/forgot-password" exact component={ForgotPassword}></Route>
      <Route path="*">Page not found</Route>
    </Switch>
  );
};

export default App;

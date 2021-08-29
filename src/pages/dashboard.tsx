import React from 'react';
import LoggedInLayout from '../layouts/logged-in-layout';

const dashboardData = {};

const DashBoard = () => {
  return <LoggedInLayout activePage="/dashboard"></LoggedInLayout>;
};

export default DashBoard;

import React, { useEffect } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../slices';

import LoggedInLayout from '../layouts/logged-in-layout';
import {
  CustomerDashboard,
  HeaderCustomer,
  HeaderCustomerDashboard,
  media,
} from '@payright/web-components';

import { SUBTITLE } from '../util/constants';
import Loader from '../components/Loader';

import Footer from '../components/Footer';

import { getCustomer } from '../slices/customer';

interface CustomerDashboardProps {
  customer: any;
  nextPaymentAmount: any;
  overduePayment: any;
}

const ContentBox = styled.div`
  background-color: #ffffff;
  padding: 1rem;
  margin: 3rem;

  h3 {
    color: rgb(83, 29, 255);
  }

  .col-01 {
    width: 20%;
    display: inline-block;
  }
  .col-01 img {
    width: 100%;
  }
  .col-02 {
    width: 30%;
    display: inline-block;
    padding: 1em 2em;
  }

  .col-02 h6 {
    display: block;
    color: rgb(66, 77, 96);
    padding-top: 1.1em;
    webkit-font-smoothing: antialiased;
  }

  ${media.min.small} {
    font-size: 1em;
  }

  ${media.max.medium} {
    .col-01 {
      width: 50%;
    }
    .col-01 img {
      width: 60%;
    }

    .col-02 {
      width: 100%;
    }
  }
`;

const BoxWrapper = styled.div`
  margin: 3rem;
  h5 {
    color: rgb(66, 77, 96);
  }

  ${media.min.small} {
    font-size: 1em;
  }

  ${media.max.medium} {
    width: 100%;
  }
`;

const SCCustomerDashboardBox = styled.div`
  background-color: #ffffff;
  margin: 2rem;
  margin-bottom: 0;
`;

const OverdueWrapper = styled.div`
  margin: 3rem;
  h5 {
    color: rgb(66, 77, 96);
  }

  ${media.min.small} {
    font-size: 1em;
  }

  ${media.max.medium} {
    width: 100%;
  }
`;

const SCOverdueBox = styled.div`
  background-color: #ffffff;
  margin: 2rem;
  margin-bottom: 0;
`;

const CustomerDetails = (props: CustomerDashboardProps) => {
  const dispatch = useDispatch();

  const { customer, nextPaymentAmount, overduePayment } = useSelector(
    (state: RootState) => state.customer
  );
  const { paymentFrequency } = customer;

  const { nextDate, nextPayment } = nextPaymentAmount;
  const { customerId } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (customerId) dispatch(getCustomer(customerId));
  }, [customerId, dispatch]);

  if (typeof customer !== 'undefined') {
    const title = `Hi ${customer.firstName}`;
    const dashboardData = {
      plans: customer.numberOfActivePlans,
      balance: parseFloat(customer.totalBalanceAmount),
      overdue: parseFloat(customer.overDuePaymentAmount),
    };

    const showOverduePanel =
      typeof overduePayment !== 'undefined' ? (overduePayment.length > 0 ? true : false) : false;

    return (
      <LoggedInLayout contentMarginTop={0} activePage="/dashboard">
        <>
          <HeaderCustomer
            title={title}
            subtitle={SUBTITLE}
            component={<HeaderCustomerDashboard dashboardData={dashboardData} />}
          />

          {showOverduePanel ? (
            <>
              <OverdueWrapper>
                <h5>Overdue Payments {overduePayment.length}</h5>
              </OverdueWrapper>
              {overduePayment.map((payment, i) => {
                return (
                  <SCOverdueBox key={i}>
                    <CustomerDashboard
                      key={i}
                      paymentFrequency={paymentFrequency}
                      dueDate={new Date(payment.lastAttempt)}
                      paymentAmount={payment.amount}
                      overdue={true}
                      noOfOverdueDays={payment.daysOverdue}
                      //handleClick={this.handleOpenModal}
                    />
                  </SCOverdueBox>
                );
              })}
            </>
          ) : (
            <ContentBox>
              <div className="col-01">
                <img
                  src="https://www.payright.com.au/wp-content/uploads/why_browsing-into-buying.png"
                  alt=""
                />
              </div>
              <div className="col-02 ">
                <div className="content">
                  <h3>Your payments are up to date</h3>
                  <h6>
                    Want to pay off your plans sooner? You can make additional payments on your
                    remaining plans at any time.
                  </h6>
                </div>
              </div>
            </ContentBox>
          )}
          {typeof nextPaymentAmount !== 'undefined' ? (
            <>
              <BoxWrapper>
                <h5>Your Next Payment </h5>
              </BoxWrapper>
              <SCCustomerDashboardBox>
                <CustomerDashboard
                  paymentFrequency={paymentFrequency}
                  dueDate={new Date(nextDate)}
                  paymentAmount={nextPayment}
                  noOfOverdueDays={0}
                  overdue={false}
                />
              </SCCustomerDashboardBox>
            </>
          ) : (
            <></>
          )}

          <Footer />
        </>
      </LoggedInLayout>
    );
  } else {
    return <Loader />;
  }
};

export default CustomerDetails;

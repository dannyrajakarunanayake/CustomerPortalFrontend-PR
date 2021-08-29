import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import LoggedInLayout from '../layouts/logged-in-layout';
import { HeaderCustomer, media, Button, Search, Table } from '@payright/web-components';

import { FILTER_CHECK_BOXES } from '../util/constants';
import Footer from '../components/Footer';

const title = 'My Plans';

const SCSearch = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: -2em auto 0;

  ${media.max.tablet} {
    height: 48px;
  }
`;

const SCHeaderButton = styled(Button)`
  border-radius: inherit;
  padding: 1.4rem;
  width: 100%;

  ${media.max.large} {
    display: none;
  }
`;

interface SCCustomerPlansTableProps {}

const SCCustomerPlansTable = styled(Table)<SCCustomerPlansTableProps>`

td {
  &.balanceCustomer{
    
    display: flex;
      .title-block{
        flex-basis: 50%;
        &:last-child{
          h5{
            color: ${(props) => props.theme.colours.blue.base};
          }
        }
      }
    }
  }
}



${media.min.wide} {
  thead {
    tr {
      th {
        &:last-of-type {
          padding: 1rem 1.86rem;
        }
      }
    }
  }
  tbody {
    tr.row {
      td {
        padding: 2rem;
      }
    }
  }
}
${media.min.large} {
  border-collapse: inherit;
  border-spacing: 0 1rem;
  thead {
    tr {
      th {
        &:first-child {
          border-bottom-left-radius: 0.4em;
        }
        &:last-child {
          border-bottom-right-radius: 0.4em;
        }
      }
    }
  }
  tbody {
    tr.row {
      box-shadow: 1rem 0 2rem ${(props) => props.theme.colours.grey.light};
      border-radius: 0.8em;
      td {
        padding: 2rem 1rem;
        &:first-child {
          border-bottom-left-radius: 0.4em;
          border-top-left-radius: 0.4em;
        }
        &:last-child {
          border-bottom-right-radius: 0.4em;
          border-top-right-radius: 0.4em;
        }
        &.balanceCustomer{
          .title-block{
            &:last-child{
              padding-left: 2rem;
              h5{
                color: ${(props) => props.theme.colours.blue.base};
              }
            }
          }
        }
      }
    }
  }
}
${media.max.large} {
       
  tbody {
    tr {
      margin-bottom: 1rem;
      align-items: center;
      td {
        .title-block{
          h6{

            font-size: 0.8em;
            color: ${(props) => props.theme.colours.grey.medium};
          }
        }
        .subhead {
          display: none;
        }
        &.planName{
          flex-basis: 40%;
        }
        &.statusCust{
          flex-basis: 20%;
        }
        &.payRemain{
          flex-basis: 10%;
        }
        &.balanceCustomer{
          flex-basis: 30%;
        }
        &.buttonUrl {
          display: none;
        }
      }
    }
  }
}
${media.max.medium} {
  tbody {
    tr.row {
      td {
        padding: 0.8rem 1rem;
        &.planName{
          flex-basis: 60%;
          flex-grow: 1;
        }
        &.statusCust{
          flex-basis: auto;
        }
        &.payRemain{
          flex-basis: 30%;
          border-top: 1px solid ${(props) => props.theme.colours.grey.xlight};
        }
        &.balanceCustomer{
          flex-basis: 70%;
          border-top: 1px solid ${(props) => props.theme.colours.grey.xlight};
        }
      }
    }
  }
}
`;
const Plans = () => {
  const handleUpdateFilter = () => {};
  const handleInputChange = () => {};

  return (
    <LoggedInLayout contentMarginTop={0} activePage="/my-plans">
      <>
        <HeaderCustomer
          title={title}
          component={
            <Link to="/payments">
              <SCHeaderButton maxWidth="209px">Make a Payment</SCHeaderButton>
            </Link>
          }
        />
        <SCSearch>
          <Search
            placeholder="Search"
            filterCheckboxes={FILTER_CHECK_BOXES}
            updateFiltersHandler={handleUpdateFilter}
            inputChangeHandler={handleInputChange}
          />
        </SCSearch>
      </>

      <Footer />
    </LoggedInLayout>
  );
};

export default Plans;

import React from 'react';
import { FormContext, useForm } from 'react-hook-form';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import Footer from '../components/Footer';
import { Button, HeaderCustomer, IconExport, media } from '@payright/web-components';
import LoggedInLayout from '../layouts/logged-in-layout';
import styled from 'styled-components';

import { SUBTITLE, TRANSACTION_OPTIONS } from '../util/constants';
import { ControlledDropdown } from '../components/form-fields';

const SCTransacton = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  margin: 1em auto 0;
  .containerTransaction {
    display: flex;
    width: 100%;
    position: relative;
  }
  .right-col {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    right: 0;
  }
  .showResult {
    padding-right: 50px;
    flex-basic: 10%;
    padding: 0px 22px 0px 16px;
  }
  h5 {
    color: rgb(175, 187, 209);
    font-weight: bold;
    text-align: center;
  }
  .customDropdown {
    color: #531dff;
    padding: 0px 22px 0px 16px;
    background-color: transparent;
    border: 0px;
    outline: 0px;
  }
  Dropdown {
    background-color: transparent;
    border: 0px;
    outline: 0px;
    color: #531dff;
  }

  .exportButton {
    float: right;
  }
`;
type transactions = {};
const Transactions = () => {
  const dispatch = useDispatch();
  const reactHookForm = useForm<transactions>({});
  const { handleSubmit } = reactHookForm;
  return (
    <>
      <LoggedInLayout contentMarginTop={0} activePage="/transactions"></LoggedInLayout>
      <HeaderCustomer title="Transactions" subtitle={SUBTITLE} />
      <SCTransacton>
        <form className="containerTransaction">
          <div className="right-col">
            <div className="showingResult">
              <h5>Showing</h5>
            </div>
            <FormContext {...reactHookForm}>
              <div>
                <h5>
                  <ControlledDropdown
                    name="transaction"
                    className="customDropdown"
                    options={TRANSACTION_OPTIONS}
                  ></ControlledDropdown>
                </h5>
              </div>
              <div className="exportButton">
                <h5>
                  <Button
                    colour="blue"
                    size="small"
                    // handleClick={handleClick}
                    icon={<IconExport />}
                    iconPosition="left"
                  >
                    Export
                  </Button>
                </h5>
              </div>
            </FormContext>
          </div>
        </form>
      </SCTransacton>
      <Footer />
    </>
  );
};

export default Transactions;

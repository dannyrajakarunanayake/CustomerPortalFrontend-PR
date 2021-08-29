import React from 'react';

import { FormContext, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { HeaderCustomer, Button, IconExport } from '@payright/web-components';
import styled from 'styled-components';

import Footer from '../components/Footer';
import LoggedInLayout from '../layouts/logged-in-layout';

import { ControlledDatePicker } from '../components/form-fields';

const SCCalendar = styled.div`
  display: flex;
  width: 100%;
  -webkit-box-pack: end;
  justify-content: flex-end;
  margin: 1em auto 0px;

  .containerStatement {
    color
    display: flex;
    width: 100%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin: 1em auto 0px;
    padding: 25px 5px 0 10px;
  }

  button,
  .buttonStatement {
    
    display: flex;
    width: 100%;
    -webkit-box-pack: end;
    justify-content: flex-end;
    margin: 1em auto 0px;
    padding: 2px 5px 0 10px;
    border-color: initial;
  }
`;
type statements = {};
const Statements = () => {
  const reactHookForm = useForm<statements>({});
  const { handleSubmit } = reactHookForm;
  return (
    <>
      <LoggedInLayout contentMarginTop={0} activePage="/statements"></LoggedInLayout>
      <HeaderCustomer title="Your Statements" />
      <SCCalendar>
        <form className="StatementForm">
          <div className="containerStatement">
            <FormContext {...reactHookForm}>
              <div>
                <h5>From Date</h5>
                <ControlledDatePicker name="fromDate"></ControlledDatePicker>
              </div>

              <div>
                <h5>To Date</h5>
                <ControlledDatePicker name="toDate"></ControlledDatePicker>
              </div>
            </FormContext>
            <div>
              <h5>
                <div className="buttonStatement">
                  <Button colour="blue" size="small" icon={<IconExport />} iconPosition="left">
                    Generate Statement
                  </Button>
                </div>
              </h5>
            </div>
          </div>
        </form>
      </SCCalendar>
      <Footer />
    </>
  );
};

export default Statements;

import React from 'react';
import LoggedInLayout from '../layouts/logged-in-layout';
import { Button, HeaderCustomer } from '@payright/web-components';
import styled from 'styled-components';
import { FormContext, useForm } from 'react-hook-form';
import { ControlledInputField, ControlledTextArea } from '../components/form-fields';
import { RootState } from '../slices';
import { useSelector } from 'react-redux';

const SCContactUs = styled.div`
  box-shadow: rgb(204, 204, 204) 3px 3px 5px 6px;
  margin-top: 8em;
  margin-bottom: 2em;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(242, 242, 242);
  border-image: initial;
  border-radius: 10px;
  padding: 3rem;

  h3 {
    color: rgb(83, 29, 255);
    padding-bottom: 1em;
  }
  h5 {
    font-size: 1.13em;
    font-weight: bold;
    line-height: 1.3;
  }
  .page-title {
    padding-bottom: 1em;
  }
  .page-heading {
    padding-bottom: 0.4em;
  }
  .form-content {
    margin-top: 1.5em;
  }
  .input-field {
    padding-bottom: 0.2rem;
    margin-top: 0.75em;
    color: rgb(83, 29, 255);
  }

  label {
    box-sizing: border-box;
    padding-bottom: 1rem;
    font-weight: 600;
    color: rgb(36, 0, 82);
    margin-bottom: 0.75em;
    font-size: 0.93em;
    font-family: Quicksand, sans-serif;
  }

  .inquire {
    appearance: none;
    width: 100%;
    height: 120px;
    box-shadow: rgba(175, 187, 208, 0.39) 0px 1px 6px 0px inset;
    background-color: rgb(255, 255, 255);
    color: rgb(83, 29, 255);
    font-weight: bold;
    font-size: 0.93em;
    outline: 0px;
    border-radius: 3px;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(215, 221, 231);
    border-image: initial;
    transition: background-color 200ms ease 0s;
    text-align: start;
  }
  .submit-btn {
    display: inline-block;
    align-content: center;
    padding: 1rem;
    padding-right: 2em;
    font-size: 1em;
    border-radius: 10px;
    box-sizing: border-box;
    justify-content: space-evenly;
    margin-bottom: 1rem;
    margin-top: 1.3rem;
  }
`;
const SCContactForm = styled.div`
  display: inline;
  border-radius: 10px;
  padding: 1.33em 1.33em 1.33em 0px !important;
  margin-bottom: 2em;

  .message {
    margin-bottom: 2em;
    padding: 1.5em 0.5em 1.5em 0px;
  }
`;

type contactus = {};

const ContactUs = () => {
  const reactHookForm = useForm<contactus>({});
  const { handleSubmit } = reactHookForm;
  const { loading } = useSelector((state: RootState) => state.auth);
  const onSubmit = (values) => console.log(values);
  return (
    <LoggedInLayout contentMarginTop={0} activePage="/payments">
      <HeaderCustomer title="Contact Us" />
      <SCContactUs>
        <h3 className="page-title">Contact Us</h3>

        <SCContactForm>
          <div className="message"></div>
        </SCContactForm>
        <h5 className="page-heading">
          Got a question? We'd love to hear from you. Send us a message and we'll respond as soon as
          possible.
        </h5>
        <FormContext {...reactHookForm}>
          <div className="form-content">
            <form onSubmit={handleSubmit(onSubmit)}>
              <ControlledInputField
                name="number"
                className="phone"
                placeholder="416040030"
                rules={{ required: 'number' }}
              >
                Best contact number
              </ControlledInputField>
              <ControlledTextArea
                name="inquire"
                className="inquire"
                placeholder="Go ahead, We are listening......."
                rules={{ required: 'inquire' }}
              ></ControlledTextArea>
              <Button
                colour="blue"
                className="submit-btn"
                maxWidth="20%"
                type="submit"
                disabled={loading}
              >
                Submit
              </Button>
            </form>
          </div>
        </FormContext>
      </SCContactUs>
    </LoggedInLayout>
  );
};

export default ContactUs;

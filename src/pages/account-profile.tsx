import React, { useEffect } from 'react';
import styled from 'styled-components';

import LoggedInLayout from '../layouts/logged-in-layout';
import {
  HeaderCustomer,
  media,
  Button,
  IconInfo,
  Alert,
  IconDone,
  IconAttention,
} from '@payright/web-components';

import Loader from '../components/Loader';

import { FormContext, useForm } from 'react-hook-form';
import { RootState } from '../slices';
import { useSelector, useDispatch } from 'react-redux';

import Footer from '../components/Footer';

import { getCustomer, customerProfileDetails } from '../slices/customer';

import { ControlledDropdown, ControlledInputField } from '../components/form-fields';

import { AUSTRALIAN_STATES, TOOLTIP_FIELDS } from '../util/constants';
import ReactTooltip from 'react-tooltip-lite';

const SCCustomerDetails = styled.div`
  margin-bottom: 2em;
 
  
  h4 {
    color: #531dff;
    margin-left:7.5rem;
    margin-bottom:3rem;
  }

  label {
    font-weight: 600;
    color: #240052;
    margin-bottom: 0.75rem;
    font-size: 0.93em;
  }
  ${media.min.medium}{
    .title-firstname-wrapper {
      display: flex;
      flex-direction: row;
      position: relative;
      max-width: 15%;
      width: 100%;
      margin-left:7.6rem;
      margin-bottom:2rem;
      
    }
    .span {
      color:rgb(83, 29, 255);
      margin-right:24rem;
    }

    .divide {
      padding: 2em;
      padding-right: 1em;
    }
  }
  ${media.max.large}{
    .title-firstname-wrapper {
      display: flex;
      flex-direction: row;
      position: relative;
      max-width: 15%;
      width: 100%;
      margin-left:7.6rem;
      margin-bottom:5rem;

      .span {
        color:rgb(83, 29, 255);
        margin-right:24rem;
      }
      .divide {
        padding: 2em;
        padding-right: 1em;
      }

      
    }
  }
  ${media.min.medium}{
    .email-wrapper {
      display: flex;
      flex: 1 1 70%;
      width: 70%;
      justify-content: space-between;
      margin: 2rem;
      margin-left:7.6rem;
      
      .span {
        color:rgb(83, 29, 255);
        margin-right:24rem;
      }
      
      .divide {
        padding: 2em;
        padding-right: 1em;
      }
      
    }
  }
  ${media.max.large}{
    .email-wrapper {
      display: flex;
      flex: 1 1 70%;
      width: 70%;
      justify-content: space-between;
      margin: 0;
   
      margin-left:7.6rem;

      .span {
        color:rgb(83, 29, 255);
        margin-right:24rem;
       
      }
      
      .divide {
        padding: 2em;
        padding-right: 1em;
      }
      
    }
  }
  ${media.min.medium}{
    .mobile-wrapper {
      display: flex;
      flex-wrap: wrap;
      width: 95%;
      justify-content: space-between;
      margin-right: 2em;
      flex: 1 1 70%;
      width: 74%;
      justify-content: space-between;
      margin: 2rem;
      margin-left:9rem;
      margin-left:7.6rem;
      .mobile {
        width: calc(50% - 0.75em);
        margin-right: 0.7em;
        margin-bottom:4rem;
      }

      .span {
        color:rgb(83, 29, 255);
        margin-right:24rem;
      }
      
      .divide {
        padding: 2em;
        padding-right: 0;
      }
    }
    
  }
  ${media.max.large}{
    .mobile-wrapper {
      display: flex;
      flex-wrap: wrap;
      width: 95%;
      justify-content: space-between;
      margin-right: 2em;
      margin-left:9rem;
      flex: 1 1 70%;
      width: 74%;
      justify-content: space-between;
      margin: 0;
      margin-left:7.6rem;

      .mobile {
        width: calc(50% - 0.75em);
        margin-right: 0.7em;
        margin-bottom:4rem;
      }

      .divide {
        padding: 2rem;
        padding-right: 0;
      }
    }
    
  }

  ${media.min.medium}{
    .address-body {
      display: block;
      justify-content: flex-end;
      flex-direction: column;
      width: 84%;
      flex: 1 1 70%;
      width: 74%;
      justify-content: space-between;
      margin: 0;
      margin-left:7.6rem;
      .street {
        padding-right: 0;
        margin-bottom:4rem;
        
      }
      .state {
        padding-right: 0;
        margin-bottom:2rem;
      }
      .input-field {
        margin-bottom: 2.46em;
        flex: 1 1 calc(50% - 0.75em);
      }
    }
    .address-wrapper {
      flex-wrap-wrap;
      flex: 1 1 70%;
      padding: 0.28rem;
      width: 75%;
      margin: 0;
      flex: 1 1 calc(50% - 0.75em);
      display: flex;
      flex-direction: column;
      margin-left:7.6rem;
    
      

      .surburb {
        flex-direction: column;
        margin--right: 2rem;
        width: 32%;
        padding-right: 0;
        margin-bottom:4rem;
        
        
      }
      
      .input-field {
        margin-bottom: 2.46em;
        flex: 1 1 calc(50% - 0.75em);
      }
    }
    
  }
  ${media.max.large}{
    .address-body {
      display: block;
      justify-content: flex-end;
      flex-direction: column;        
      flex: 1 1 70%;
      width: 74%;
      justify-content: space-between;
      margin: 0;
      margin-left:7.6rem;
      
      .street {
        padding-right: 0;
        margin-bottom:4rem;
      }
      .state {
        padding-right: 0;
        margin-bottom:2rem;
      }
      .input-field {
        margin-bottom: 2.46em;
        flex: 1 1 calc(50% - 0.75em);
      }
    }
    .address-wrapper {
      flex-wrap-wrap;
      flex: 1 1 70%;
      padding: 0.28rem;
      width: 100%;
      margin: 0;
      flex: 1 1 calc(50% - 0.75em);
      display: flex;
      flex-direction: column;
      margin-bottom:4rem;
      
      
      .surburb {
        flex-direction: column;
        margin--right: 2rem;
        width: 32%;
        padding-right: 0;
        margin-bottom:4rem;
        
        
      }
      .input-field {
        margin-bottom: 2.46em;
        flex: 1 1 calc(50% - 0.75em);
      }
    }
  }
  ${media.min.medium}{
    .postcode-main {
      display: flex;
      flex-wrap-wrap;
      flex: 1 1 70%;
      padding: 0.28rem;
      width: 100%;
      justify-content: space-between;
      margin: 0;
      flex: 1 1 calc(50% - 0.75em);
      flex-direction: column;
      position: relative;
      width: 100%;



      .postcode {
        width: 53%;
       
      }
      .input-field {
        margin-bottom: 2.46em;
        margin-right:6em;
      }
    }
  }

  ${media.max.medium}{
    .postcode-main {
      display: flex;
      flex-wrap-wrap;
      flex: 1 1 70%;
      padding: 0.28rem;
      width: 100%;
      justify-content: space-between;
      margin: 0;
      flex: 1 1 calc(50% - 0.75em);
      flex-direction: column;
      position: relative;
      width: 60%;
      
      
      .postcode {
        width: 53%;
      }
      .input-field {
        margin-bottom: 2.46em;
        margin-right:6em;
      }
    }
  }

  ${media.max.large}{
    .details-hrd{
      width:100%;
      margin-bottom:3rem;
    }
  }
  ${media.min.medium}{
    .details-hrd{
      width:100%;
      margin-bottom:3rem;
      
    }
  }
  ${media.max.large}{
    .details-hr{
      width:100%;
      margin-bottom:3rem;
    }
  }
  ${media.min.medium}{
    .details-hr{
      margin-bottom:3rem;
      width:100%;
    }
  }
  ${media.max.large}{
    .details-hre{
      width:100%;
      margin-bottom:3rem;
    }
  }
  ${media.min.medium}{
    .details-hre{
      width:100%;
      margin-bottom:3rem;
    }
  }
 
  
  
`;

const SCCustomer = styled.div`
  max-width: 1200px;
  padding-left:0;
 


  margin-bottom: 3em;
  ${media.min.large}{
    
    h4{
      color: #531dff;
      margin-left:7.5rem;
    }
    

    .button-main {
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin-top: 0;
      margin-left:9rem;
      margin-right:0;
      margin-top:4rem;
      margin-bottom:4rem;
      
      
      .button {
        justify-content: flex-start;
        color: #fff;
        float:right;
        margin-left:45rem;
      }
    }

    .password-box {
      display: flex;
      justify-content: space-between;
      padding: 0;
      margin-top: 0;
      margin-left:9rem;
      margin-right:0;
      margin-top:4rem;
      margin-bottom:4rem;
      
      
      
      
    .password {
      margin:0;
      padding-right: 0;
      margin-bottom:3rem;
    }
    .confirm- password {
      margin:0;
      padding-right: 0;
      margin-bottom:4rem;
    }
    .input-field {
      appearance: none;
      width: 33%;
      margin:0;
      transition: background-color 200ms ease 0s;
    }
  }
`;

const SCCustomerForm = styled.div`
  max-width: 1200px;
  margin-left: 6rem;
  margin;right:4rem;
  padding: 0 1.33em 1.33em 0px !important;

  .message {
    margin-bottom: 2em;
  }
`;

const title = 'Account  Profile';

interface AccountProfileProps {}

type formData = {
  state: string;
  surburb: string;
  postCode: string;
  street: string;
  password: string;
  confirmPassword: string;
};

const showMessage = (submitSucceeded, errorMessage) => {
  if (submitSucceeded) {
    return (
      <Alert
        title="Update successfully"
        body="Your profile details updated successfully.!"
        outcome="positive"
        icon={<IconDone />}
      />
    );
  } else if (errorMessage) {
    return (
      <Alert
        title="Oops..! Update failure"
        body="Please update the details and resubmit it again"
        outcome="negative"
        icon={<IconAttention />}
      />
    );
  }
};

const AccountProfile = (props: AccountProfileProps) => {
  const dispatch = useDispatch();

  const { customer, submitSucceeded, errorMessage } = useSelector(
    (state: RootState) => state.customer
  );
  const { customerId } = useSelector((state: RootState) => state.auth);

  const reactHookForm = useForm<formData>({
    defaultValues: customer,
  });

  const { handleSubmit, errors, watch } = reactHookForm;

  const onSubmit = (formData) => {
    if (customerId) dispatch(customerProfileDetails(customerId, formData));
  };

  useEffect(() => {
    if (customerId) dispatch(getCustomer(customerId));
  }, [customerId, dispatch]);

  if (customer) {
    return (
      <LoggedInLayout contentMarginTop={0} activePage="/my-plans">
        <>
          <HeaderCustomer title={title} />
          <SCCustomerForm>
            <div className="message">{showMessage(submitSucceeded, errorMessage)}</div>
          </SCCustomerForm>
          <FormContext {...reactHookForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <SCCustomerDetails>
                <h4>My Details</h4>
                <div className="title-firstname-wrapper">
                  <div className="title">
                    <label>Title</label>
                    <ReactTooltip direction="up" content={TOOLTIP_FIELDS} className="tooltip">
                      <IconInfo />
                    </ReactTooltip>
                    <span className="span">{customer.title}</span>
                    <span className="divide">
                      <div></div>
                    </span>
                  </div>

                  <div className="first-name">
                    <label>First Name </label>

                    <ReactTooltip direction="up" content={TOOLTIP_FIELDS} className="tooltip">
                      <IconInfo />
                    </ReactTooltip>
                    <span className="span">{customer.firstName}</span>
                  </div>

                  <div className="last-name">
                    <label>Last Name </label>
                    <ReactTooltip direction="up" content={TOOLTIP_FIELDS} className="tooltip">
                      <IconInfo />
                    </ReactTooltip>
                    <span className="span">{customer.lastName}</span>
                  </div>
                </div>

                <div className="email-wrapper">
                  <div className="email">
                    <label>Email</label>
                    <ReactTooltip direction="up" content={TOOLTIP_FIELDS} className="tooltip">
                      <IconInfo />
                    </ReactTooltip>

                    <span className="span">{customer.email}</span>
                    <span className="divide">
                      <div></div>
                    </span>
                  </div>
                  <div className="confirm-email">
                    <label>Confirm Email </label>
                    <ReactTooltip direction="up" content={TOOLTIP_FIELDS} className="tooltip">
                      <IconInfo />
                    </ReactTooltip>

                    <span className="span">{customer.confirmEmail}</span>
                    <span className="divide">
                      <div></div>
                    </span>
                  </div>
                </div>

                <div className="mobile-wrapper">
                  <div className="mobile">
                    <label>Customer Number </label>
                    <ReactTooltip direction="up" content={TOOLTIP_FIELDS} className="tooltip">
                      <IconInfo />
                    </ReactTooltip>

                    <span className="span">{customer.phoneMobile}</span>
                    <span className="divide">
                      <div></div>
                    </span>
                  </div>
                  <div className="mobile">
                    <label>Date Of Birth </label>
                    <ReactTooltip direction="up" content={TOOLTIP_FIELDS} className="tooltip">
                      <IconInfo />
                    </ReactTooltip>
                    <span className="divide">
                      <div></div>
                    </span>
                    <span className="span">{customer.dateOfBirth}</span>
                    <span className="divide">
                      <div></div>
                    </span>
                  </div>
                  <hr className="details-hr" />
                </div>

                <div className="address-body">
                  <ControlledInputField
                    name="street"
                    className="street"
                    rules={{ required: 'Street Address is required' }}
                    error={errors.street?.message as string}
                  >
                    Street Address
                  </ControlledInputField>
                </div>
                <div className="address-body">
                  <ControlledDropdown name="state" options={AUSTRALIAN_STATES} className="state">
                    State
                  </ControlledDropdown>
                </div>

                <div className="address-wrapper">
                  <ControlledInputField
                    name="surburb"
                    className="surburb"
                    rules={{ required: 'Surburb is required' }}
                    error={errors.surburb?.message as string}
                  >
                    Surburb
                  </ControlledInputField>

                  <div className="postcode-main">
                    <ControlledInputField
                      name="postCode"
                      className="postcode"
                      maxWidth="32%"
                      rules={{ required: 'Postcode is required' }}
                      error={errors.postCode?.message as string}
                    >
                      PostCode
                    </ControlledInputField>
                  </div>

                  <hr className="details-hre" />
                </div>
              </SCCustomerDetails>

              <SCCustomer>
                <h4>Change Password </h4>
                <div className="password-box">
                  <ControlledInputField
                    type="password"
                    name="password"
                    className="password"
                    placeholder="Password"
                    rules={{
                      required: true,
                      minLength: 2,
                      //pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*[\]"';:_\-<>., =+/\\]).{8,}$/
                    }}
                    error={errors.password && 'Password strength does not meet the requirements'}
                  >
                    Password
                  </ControlledInputField>

                  <ControlledInputField
                    type="password"
                    name="confirmPassword"
                    className="confirm-password"
                    placeholder="Confirm Password"
                    rules={{
                      required: 'Required',
                      validate: (value) => value === watch('password'),
                    }}
                    error={errors.confirmPassword && 'Confirm Password should be same as Password'}
                  >
                    Confirm Password
                  </ControlledInputField>
                </div>

                <div className="button-main">
                  <Button withShadow maxWidth="15%" type="submit" className="button">
                    Save Changes
                  </Button>
                </div>
              </SCCustomer>
            </form>
          </FormContext>

          <Footer />
        </>
      </LoggedInLayout>
    );
  } else {
    return <Loader />;
  }
};

export default AccountProfile;

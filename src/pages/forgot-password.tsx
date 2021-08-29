import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button, IconLogo } from '@payright/web-components';
import { media, theme } from '@payright/web-components';
import loginImage from './loginImage.png';
import Spinner from '../components/spinner';
import { FormContext, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState } from '../slices';
import { ControlledInputField } from '../components/form-fields';

const SCEcommerceForgot = styled.div`
  display: flex;
  justify-content: space-around;
  ${media.max.wide} {
    padding: 1.6em;
  }
  ${media.min.large} {
    align-items: center;
  }
  ${media.max.medium} {
    padding: 1.6em;
    .login-header {
      border-bottom: 1px solid ${(props) => theme.colours.grey.light};
      padding-bottom: 1em;
      svg {
        width: 130px;
        height: 33px;
      }
      ${media.max.large} {
        svg {
          width: 115px;
        }
      }
      h4 {
      }
    }
  }
  height: 100%;
  .ecommerce-image {
    background-image: url(${loginImage});
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background-size: contain;
    background-repeat: no-repeat;
    background-position-y: center;
    max-width: 790px;
    ${media.max.large} {
      display: none;
    }
  }
  .login-wrapper {
    ${media.min.medium} {
      max-width: 364px;
    }
    width: 100%;
    .login-header {
      display: flex;
      justify-content: center;
      ${media.max.medium} {
        justify-content: space-between;
      }
      margin-bottom: 3em;
      .logo {
        display: flex;
        align-items: center;
        margin-right: 1.23em;
      }
      h4 {
        font-weight: normal;
        justify-content: flex-start;
        padding-left: 0.86em;
        display: flex;
        align-items: center;
        ${media.max.medium} {
          font-size: 1.266em;
          width: unset;
          color: ${(props) => theme.colours.plum.base};
        }
        ${media.min.medium} {
          border-left: 1px solid ${(props) => theme.colours.grey.light};
        }
      }
    }

    .input-field {
      margin-bottom: 2em;
    }

    label {
      margin-bottom: 0.75em;
      font-weight: 600;
      color: ${(props) => theme.colours.plum.base};
      font-size: 0.93em;
    }
    &::placeholder {
      color: ${(props) => theme.colours.grey.dark};
      font-weight: 500;
    }

    .forgotForm {
      display: flex;
      justify-content: space-evenly;
      align-content: center;
      padding: 1rem;
      padding-right: 2em;
      font-size: 1em;
      border-radius: 10px;
      box-sizing: border-box;
    }

    .divide {
      padding: 2rem;
      padding-right: 1em;
    }

    .validation-msg-box {
      background-color: #ffd2d3;
      border-radius: 5px;
      padding: 0.68em;
      color: #ff3b3b;
      margin-bottom: 0.5em;
      width: 100%;
    }
  }
`;

type forgotpassword = {};

const ForgotPassword = () => {
  let pageName = 'Forgot Password';
  const history = useHistory();
  const reactHookForm = useForm<forgotpassword>({});
  const { handleSubmit } = reactHookForm;
  const { errorMessage, loading } = useSelector((state: RootState) => state.auth);
  const onSubmit = (values) => console.log(values);
  return (
    <SCEcommerceForgot>
      <div className="ecommerce-image" />
      <div className="login-wrapper">
        <div className="login-header">
          <div className="logo">
            <IconLogo width={180} height={74} />
          </div>
          <h4>{pageName}</h4>
        </div>

        <FormContext {...reactHookForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            {errorMessage && <div className="validation-msg-box">{errorMessage}</div>}
            <ControlledInputField
              name="userName"
              rules={{ required: 'Username is required' }}
              placeholder="admin@payright.com.au"
            >
              User name
            </ControlledInputField>

            <div className="forgotForm">
              <Button withShadow maxWidth="50%" type="submit" handleClick={() => history.push('/')}>
                Cancel
              </Button>
              <span className="divide">
                <div></div>
              </span>
              <Button
                withShadow
                maxWidth="50%"
                type="submit"
                icon={loading ? <Spinner /> : undefined}
                disabled={loading}
              >
                Submit
              </Button>
            </div>
          </form>
        </FormContext>
      </div>
    </SCEcommerceForgot>
  );
};

export default ForgotPassword;

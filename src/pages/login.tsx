import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Button, IconLogo, media, theme } from '@payright/web-components';

import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, FormContext } from 'react-hook-form';

import { RootState } from '../slices';
import Spinner from '../components/spinner';
import { login } from '../slices/auth';
import { ControlledInputField } from '../components/form-fields';
import loginImage from './loginImage.png';

const SCEcommerceLogin = styled.div`
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
    .forgot-password {
      text-align: center;
      margin-bottom: 3.33em;
      font-weight: bold;
      font-size: 0.86em;
      display: flex;
      justify-content: center;
      height: 45px;
      align-items: center;
      .spacer {
        border-left: 1px solid ${(props) => theme.colours.grey.light};
        margin: 0 1em;
        height: 45px;
      }
    }
    .input-field {
      margin-bottom: 2em;
    }
    .or {
      color: ${(props) => theme.colours.blue.base};
      font-weight: bold;
      margin: 1.8em auto;
      display: block;
      text-align: center;
      font-size: 0.86em;
    }
    .social-sign-in {
      button {
        margin-bottom: 0.86em;
      }
    }
    .setup-new-account {
      font-weight: bold;
      font-size: 0.86em;
      margin-top: 1.6em;
      display: flex;
      justify-content: center;
      ${media.max.medium} {
        margin-bottom: 4em;
      }
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

interface LoginProps {}

type FormData = {
  username: string;
  password: string;
};

const Login = (props: LoginProps) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const reactHookForm = useForm<FormData>({
    defaultValues: {
      username: '',
      password: '',
    },
    mode: 'onSubmit',
  });

  const { handleSubmit, errors } = reactHookForm;
  const { errorMessage, authToken, loading } = useSelector((state: RootState) => state.auth);

  const formSubmitHandler = (formData: FormData) => {
    /// validation is complete now we gotta dispatch to the event to the reducer
    dispatch(login(formData.username, formData.password));
  };

  useEffect(() => {
    if (authToken) {
      history.push('/dashboard');
    }
  }, [authToken, history]);

  return (
    <SCEcommerceLogin>
      <div className="ecommerce-image" />
      <div className="login-wrapper">
        <div className="login-header">
          <div className="logo">
            <IconLogo width={180} height={74} />
          </div>
          <h4>Customer Portal</h4>
        </div>
        <div className="login-body">
          <FormContext {...reactHookForm}>
            <form onSubmit={handleSubmit(formSubmitHandler)} className="loginForm">
              {errorMessage && <div className="validation-msg-box">{errorMessage}</div>}

              <ControlledInputField
                name="username"
                rules={{ required: 'Username is required' }}
                error={errors.username?.message as string}
                placeholder="Username"
              >
                Username
              </ControlledInputField>

              <ControlledInputField
                name="password"
                rules={{ required: 'Password is required' }}
                error={errors.password?.message as string}
                placeholder="Password"
                type="password"
              >
                Password
              </ControlledInputField>

              <div className="forgot-password">
                <Link to="/forgot-password">
                  <span className="hide-mobile">I've forgotten my password</span>
                  <span className="mobile-only">Forgot password?</span>
                </Link>
              </div>
              <br />

              <Button
                type="submit"
                withShadow
                maxWidth="100%"
                iconPosition="right"
                icon={loading ? <Spinner /> : undefined}
                disabled={loading}
              >
                Login
              </Button>
            </form>
          </FormContext>
        </div>
      </div>
    </SCEcommerceLogin>
  );
};

export default Login;

import React, { useEffect } from 'react';
import styled from 'styled-components';
import {
  Navigation,
  IconAccount,
  IconLogout,
  IconLogoSmall,
  IconPayment,
  IconQuestion,
} from '@payright/web-components';

import { useSelector } from 'react-redux';
import { RootState } from '../slices';
import { useHistory } from 'react-router-dom';
import { menuItems } from '../util/constants';

interface LoggedInLayoutProps {
  /** By default, the content starts 60px below the nav header. Use this to override the value where necessary */
  contentMarginTop?: number;
  children?: React.ReactNode;
  activePage?: string;
}

const SCLoggedInLayout = styled.div<LoggedInLayoutProps>`
  .content {
    margin-top: ${(props) => props.contentMarginTop}px;
  }
  .menu-items {
    .menu-items__list {
      white-space: nowrap;
    }
  }
  .logged-in,
  .not-logged-in {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 1.6em;
  }
  .not-logged-in {
    h6 {
      margin-right: 1.6em;
    }
    button {
      height: 36px;
      width: 93px;
    }
  }
  .logged-in {
    width: 243px;
    border-left: 1px solid ${(props) => props.theme.colours.secondary3};

    label {
      color: ${(props) => props.theme.colours.plum.base};
      font-weight: bold;
      font-size: 1.13em;
      cursor: pointer;
      user-select: none;
    }
    .account-icon {
      background-image: linear-gradient(35deg, #5431ff, #f93253);
      border-radius: 50%;
      width: 34px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        width: 14px;
        height: 14px;
        path {
          fill: ${(props) => props.theme.colours.white};
        }
      }
    }
    .account-info {
      display: flex;
      flex-direction: column;
      margin-left: 1.3em;
      .account-info-links {
        a {
          font-weight: bold;
          font-size: 0.86em;
          margin-right: 0.75em;
        }
      }
    }
  }
`;

const LoggedInLayout = ({ contentMarginTop = 60, children, activePage }: LoggedInLayoutProps) => {
  const history = useHistory();

  const { authToken } = useSelector((state: RootState) => state.auth);

  const accountDetailsItems = [
    {
      icon: <IconAccount />,
      iconColour: 'blue',
      label: 'Account Profile',
      link: '/account-profile',
    },
    {
      icon: <IconLogoSmall />,
      label: 'Contact Payright',
      link: '/contact-us',
    },
    {
      icon: <IconPayment />,
      label: 'Update Card Details',
      link: '/payments',
    },
    {
      icon: <IconQuestion />,
      label: 'Need Help?',
      link: 'https://www.payright.com.au/faqs/',
      target: '_blank',
    },
    {
      icon: <IconLogout />,
      label: 'Logout',
      iconColour: 'red',
      labelColour: 'red',
      link: '/logout',
    },
  ];

  useEffect(() => {
    if (!authToken) {
      history.push('/');
    }
  }, [authToken, history]);

  return (
    <SCLoggedInLayout contentMarginTop={contentMarginTop} activePage={activePage}>
      <Navigation
        portalType="customer"
        menuItems={menuItems}
        activePage={activePage}
        accountDetailsActions={accountDetailsItems}
        showNotification={false}
        breakpoint="wide"
      ></Navigation>

      <div className="content">{children}</div>
    </SCLoggedInLayout>
  );
};

export default LoggedInLayout;

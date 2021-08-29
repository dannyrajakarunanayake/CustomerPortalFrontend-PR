import React from 'react';
import { styled, media } from '@payright/web-components';

const FooterBox = styled.div`
  background-color: #240052;
  height: 2.5rem;
  position: absolute;
  bottom: -90px;
  width: 100%;
  margin-top: 8rem;
  padding: 11px;

  .row-content {
    display: inline;
    width: 100%;
    padding: 1em;

    .logo {
      display: inline;
    }
    ul {
      display: inline;
      float: right;
    }
    li {
      display: inline;
      padding-left: 2.2em;
      text-align: center;
      font-size: 1.2em;
    }
    li a {
      color: rgb(255, 255, 255);
      font-size: 0.8em;
      text-decoration: none;
    }
    li a:hover {
      text-decoration: underline;
    }

    ${media.max.tablet} {
      width: 100%;
    }
  }
`;
const Footer = () => {
  return (
    <>
      <FooterBox>
        <div className="row-content ">
          <div className="logo">
            <img
              src="https://payright.com.au/wp-content/uploads/logo-payright-white.png"
              width="100"
              alt=""
            ></img>
            <ul>
              <li>
                <a
                  href="https://www.payright.com.au/financial-hardship/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Financial Hardship
                </a>
              </li>
              <li>
                <a
                  href="https://www.payright.com.au/responsible-lending/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Responsible Lending
                </a>
              </li>
              <li>
                <a
                  href="https://www.payright.com.au/privacy-policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="https://www.payright.com.au/terms-and-conditions/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a
                  href="https://www.payright.com.au/complaints/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Complaints & Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
      </FooterBox>
    </>
  );
};

export default Footer;

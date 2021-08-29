import React from 'react';
import styled from 'styled-components';
import { Loader as PayrightLoader } from '@payright/web-components';

type LoaderProps = {
  text?: any;
};

const SCLoaderWrapper = styled.div`
  text-align: center;
  margin-top: 6em;
`;

const Loader = ({ text }: LoaderProps) => {
  return (
    <SCLoaderWrapper>
      <PayrightLoader text={text} />
    </SCLoaderWrapper>
  );
};

export default Loader;

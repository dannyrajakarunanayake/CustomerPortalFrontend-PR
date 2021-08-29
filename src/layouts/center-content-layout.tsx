import React from "react";
import styled from "styled-components";

interface CenterContentLayoutProps {
  children?: React.ReactNode;
}

const SCCenterContentLayout = styled.div`
  .content {
    max-width: 800px;
    margin: 0 auto;

    padding: 0 20px;
  }
`;

const CenterContentLayout = ({ children }: CenterContentLayoutProps) => {
  return (
    <SCCenterContentLayout>
      <div className="content">{children}</div>
    </SCCenterContentLayout>
  );
};

export default CenterContentLayout;
